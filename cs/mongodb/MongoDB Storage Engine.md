# MongoDB Storage Engine

Tags: 데이터베이스
작성일: Feb 16, 2021
작성자: 찬영 조

## Storage Engine

Storage Engine이란 메모리와 디스크 모두에서 데이터가 저장되는 방식 관리를 담당하는 DB의 구성 요소, MongoDB는 특정 워크로드에 대해 서로 다른 엔진이 더 나은 성능을 발위하므로 여러 Storage Engine을 지원함

사용 사례에 적합한 Storage Engine을 선택하면 퍼포먼스에 큰 영양을 끼칠 수 있다.

- ~~MMAPv1 (4.2 버전부터 depreacted, 제거됨)~~
- wierdTiger (3.2 default)
    - Many CPU, Lots of RAM에 효과적
- In-Memory Storage Engine

## MMAPv1

몽고디비의 원래 storage engine이지만 4.0버전부터 depreacted 됨

## WiredTiger

몽고디비 3.2버전부터 기본 storage engine으로 설정, 멀티코어 시스템에서 효율이 좋음

### 문서 수준 동시성

WiredTiger는 쓰기 작업에 document-level에서 동시성 제어를 사용함, 즉 여러 클라이언트가 컬렉션의 서로 다른 문서(document)를 동시에 수정할 수 있음

같은 시간대에 다른 사용자가 같은 문서에 접근하면 쓰기 충돌이 발생하여 몽고디비가 해당 작업을 투명하게 다시 시도하는데 하나의 사용자만 작업이 허용되며 다른 한명은 conflict가 발생하게 됨

### 스냅샷 및 체크포인트

스냅샷이란? 특정 시점에 생성되는 백업 복사본

WiredTiger는 MVCC(MultiVersion Concurrency Control)를 사용하여 Disk에 데이터를 넣을 때, WiredTigher는 스냅샷의 모든 데이터를 디스크에 저장함, 저널(로그같은 역할)은 데이터 파일에서 체크포인트 역할을 함checkpoint는 데이터 파일들의 일관성을 보장하고 마지막 체크포인트들을 데이터 파일에 저장함, 체크포인트는 복구 지점으로 작동할 수 있음

- MVCC란?

    MVCC는 동시 접근을 허용하는 DB에서 동시성을 제어하기 위해 사용하는 방법 중 하나이며, MVCC모델에서 데이터에 접근하는 사용자는 접근한 시점에서 DB의 스냅샷을 읽는다.

    이 스냅샷 데이터에 대한 변경이 완료될 때까지 만들어진 변경사항은 다른 데이터베이스 사용자가 볼 수 없다. 이제 사용자가 데이터를 업데이트 하면 이전의 데이터를 덮어 씌우는게 아니라 새로운 버전의 데이터를 UNDO 영역에 생성하고 이전 버전의 데이터와 비교해서 변경된 내용을 기록한다. 이렇게 해서 하나의 데이터에 대해 여러 버전의 데이터가 존재하게 되고 사용자는 마지막 버전의 데이터를 읽게된다.

    이러한 구조를 지닌 MVCC의 특징을 정리하면 다음과 같다.

    - 일반적인 RDBMS보다 매우 빠르게 작동한다.

        MVCC는 잠금을 필요로 하지 않기 때문에 빠르게 동작하고, 데이터를 읽기 시작할 때, 다른 사람이 그 데이터를 삭제하거나 수정하더라도 영향을 받지 않고 데이터를 사용할 수 있다.

    - 사용하지 않는 데이터가 계속 쌓이게 되므로 데이터를 정리하는 시스템이 필요
    - 데이터 버전이 충돌하면 애플리케이션 영역에 이러한 문제를 해결해야함

3.6 버전부터 몽고디비는 60초 간격으로 체크포인트를 생성(스냅샷 데이터를 디스크에 기록)하도록 WiredTiger를 구성함

새 체크포인트를 생성하는 동안 이전 체크포인트는 여전이 유효함, 따라서 몽고디비가 종료되었거나 새 체크포인트를 생성하는 동안 에러가 발생하더라도, 재시작시 몽고디비는 마지막 유효한 체크포인트에서 복구할 수 있음

WiredTiger의 이러한 체크포인트 덕분에 몽고디비는 저널링 없이도 마지막 체크포인트로의 복원이 가능하나, 마지막 체크포인트와 최근 작업 사이의 작업은 복원이 불가능하기 때문에 가장 최근의 작업까지 복원하기 위해 저널링이 필요, 몽고디비 4.0부터는 `—nogournal`이 불가능함

### 저널

WiredTiger는 데이터 내구성을 보장하기 위해 체크포인트와 함께 미리 쓰기 로그(저널)을 사용함

WiredTiger 저널은 체크 포인트 사이의 모든 데이터 수정 사항을 유지함, 몽고디비가 체크포인트 사이에서 종료되면 몽고디비는 저널을 사용해 마지막 체크포인트 이후 수정된 모든 데이터를 재생한다.

WiredTiger 저널은 snappy 압축 라이브러리를 사용해 압축을 하며, 다른 알고리즘을 사용하여 압축을 하기 위해서는 storage.wiredTiger.engineConfig.journalCOmpressor setting값을 변경해주면 된다.

로그 레코드가 128바이트 (WiredTiger의 최소 로그 레코드 크기)보다 작거나 같은 경우 WiredTiger는 해당 레코드를 압축하지 않는다.

### 압축

WiredTiger를 통해 몽고디비는 모든 컬렉션과 인덱스에 대한 압축을 지원한다. 압축은 CPU를 추가적으로 사용하는 대신 스토리지 사용을 최소화한다.

기본적으로 WiredTiger는 모든 컬렉션에 대해 블록압축을 snappy 압축 라이브러리와 함께 사용하고 모든 인덱스에 대해 prefix압축을 사용함

대부분의 워크로드에서 기본 압축 설정은 스토리지 효율성과 처리 요구 사항의 기본 균형을 맞춤

### 메모리 사용

WiredTiger를 통해 몽고디비는 WiredTiger내부 캐시와 파일 시스템 캐시를 모두 활용함

메모리 사용으로 인한 특징은 다음과 같다.

- 파일 시스템 캐시의 데이터는 데이터 파일 압축의 이점을 포함하여 on-disk 형식과 동일하게 취급되고 이러한 파일 시스템 캐시는 운영체제에서 disk I/O를 줄여주는데 사용됨
- WiredTiger 내부 캐시에 로드된 인덱스는 on-disk형식과 다른 데이터 표현을 가지만 여전히 인덱스 prefix압축을 활용하여 램 사용량을 줄일 수 있다. 인덱스 prefix 압축은 인덱싱 된 필드에서 공동 prefix를 제거함
- WiredTiger 내부 캐시의 수집 데이터는 압축되지 않으며 on-disk형식과 다른 표현을 사용함, 블록 압축은 디스크상의 저장공간을 크게 절약할 수 있지만 서버에서 데이터를 조작하려면 압축을 풀어야 함

파일 시스템 캐시를 통해 몽고디비는 WiredTiger 캐시 또는 다른 프로세스에서 사용하지 않는 모든 여유 메모리를 자동으로 사용함 (내부 캐시 크기 역시 조절할 수 있지만 기본값 이상으로 늘리는 것은 추천하지 않음)

### 데이터 구조 (02/17)

레코드(Document) 스토어 : B-Tree (구체적으로는 B+트리 )<< 최근 사용 방식

- 일반적인 RDBMS가 사용하는 저장방식, 테이블의 레코드를 한꺼번에 같이 저장하는 방식

LSM 스토어 : Log Structured Merge Tree

- HBase나 카산드라와 같은 NoSQL에서 자주 사용하는 저장방식으로, 데이터 읽기보다는 쓰기에 집중한 저장방식, B-tree로 동작하지 않고 순차 파일 형태로 데이터를 저장함

    메모리의 저장 가능한 크기의 조각으로 데이터 파일을 관리하는데 메모리의 저장 가능한 한계를 넘어서면 디스크에 저장

ref

[https://docs.mongodb.com/manual/core/wiredtiger/](https://docs.mongodb.com/manual/core/wiredtiger/)

[http://blog.naver.com/PostView.nhn?blogId=ijoos&logNo=221324560518](http://blog.naver.com/PostView.nhn?blogId=ijoos&logNo=221324560518)