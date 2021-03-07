### 정의

세마포어와 뮤텍스는 "여러 프로세스나 쓰레드가 공유 자원에 접근하는 것을 제어하기 위한 방법"이다.

즉, 병행 처리를 위한 프로세스 동기화 기법이다.

예를 들어 교차하는 철도에서 열차의 진행가능 여부를 나타내는 신호등이 세마포어나 뮤텍스가 될 수 있다.

### 세마포어의 동작 원리

세마포어의 동작 원리를 알려면 세마포어 변수, semWait 연산, semSignal 연산에 대해 먼저 알아야 한다.

세마포어는 정수 값을 가지는 변수로 볼 수 있다. 그 정수 값은 접근할 수 있는 최대 허용치 만큼 동시에 사용자 접근을 할 수 있다.

- semWait 연산: 세마포어 값을 감소시킨다. 만일 값이 음수가 되면 semWait을 호출한 프로세스는 블록되고, 음수가 아니면 프로세스는 계속 수행될 수 있다.
- semSignal 연산: 세마포어 값을 증가시킨다. 만약 값이 양수가 아니면(0이거나 음수면), semWait연산에 의해 블록된 프로세스들을 깨운다.

```jsx
const semaphore = {
	count: 3,
	queue: []
};

async function semWait(_semaphore) {
	_semaphore.count--;
	if (_semaphore.count < 0) {
		// 해당 구역으로 들어온 프로세스는 공유 자원에 접근 불가능
		// 요청한 프로세스를 _semaphore.queue에 연결
    // 요청한 프로세스를 블록 상태로 전이 시킴
		await block();
	}
}

function semSignal(_semaphore) {
	_semaphore.count++;
	if (_semaphore.count <= 0) {
		// count가 0보다 작거나 같다는 것은 대기하고 있는 프로세스가 존재한다는 것을 의미함
    // _semaphore.queue에 연결되어 있는 프로세스를 queue에서 제거
		// 프로세스의 상태를 실행 가능으로 전이 시키로 read list에 연결
		wakeUp(process);
	}
}
```

세마포어를 코드로 구현하면 위과 같이 되어있고, 이것을 활용하면 다음과 같이 구현할 수 있다.

```jsx
const processCount = /* 프로세스 수 */;

const semaphore = {
	count: processCount,
	queue: []
};

function P(i) {
	while(true) {
		semWait(semaphore);
		// 임계 영역 (Critical Section)
    // 공유되는 자원에서 문제가 발생하지 않도록 독점을 보장해줘야 하는 영역

		semSignal(semaphore);
		// 임계 영역 이후 코드
	}
}

parbegin(P(0), P(1), P(2)...);

```

### 세마포어의 종류

세마포어는 유지할 수 있는 값에 범위에 따라 Binary Semaphore와 Counting Semaphore로 나뉜다. 위에서 구현한 세마포어는 Counting Semaphore이다.

Binary Semaphore는 세마포어의 초기값이 0 또는 1만가질 수 있는 세마포어이다. 즉, 1개의 자원을 locking하는 기법으로 쓰레드가 자원을 사용시 lock, 자원을 반납시 unlock한다.

Counting Semaphore는 Pool에 있는 자원의 수와 같은 값으로 초기화되어 동시에 자원의 수 만큼 접근할 수 있다.

세마포어는 큐에 프로세스들이 여러 개 있을 때 어떤 프로세스부터 깨울지에 따라 강성 세마포어와 약성 세마포어로 나뉜다. 큐에서 FIFO로 꺼낸다면 강성 세마포어이며, 프로세스들이 큐에서 제거되는 순서를 특별히 명시하지 않은 세모포어를 약성 세마포어라 한다.

### 뮤텍스

뮤텍스는 세마포어와 마찬가지로 병행 처리를 위한 동기화기법 중 하나이다. Binary Semaphore와 같이 초기값을 0 또는 1을 가진다.

임계 영역에 들어갈 때 lock을 걸어 다른 쓰레드가 접근하지 못하도록 하고, 임계 영역에서 나와 해당 lock을 unlock한다.

```jsx
let mutex = 1;

async function lock() {
	while(mutex !== 1) {
		// mutex의 값이 1이 될 때까지 기다림
		await mutexIsOne();
	}
	// 이 구역에 도착했다는 것은 mutex의 값이 1이라는 것으로 이제 mutex의 값을
  // 0으로 만들어 다른 쓰레드가 접근하지 못하도록 막아야 한다.
	mutex = 0;

	function unlock() {
	  // 임계 영역에서 나온 쓰레드는 다른 쓰레드가 접근할 수 있도록 lock을 해제함
		mutex = 1;
	}
}
```

### 세마포어와 뮤텍스의 차이

세마포어는 공유 자원에 세마포어의 변수만큼 프로세스(또는 쓰레드)가 접근할 수 있다. 반면에 뮤텍스는 오직 1개의 프로세스(쓰레드)만 접근할 수 있다.

현재 수행중인 프로세스가 아닌 다른 프로세스가 세마포어를 해제할 수 있지만 뮤텍스는 반드시 lock을 획득한 프로세스가 반드시 그 락을 해제해야 함

#### Binary Semaphore와 Mutex의 차이

Binary Semaphoresms 0과 1만 가정할 수 있는 세마포어로, 상호 배제를 달성하기 위해 신호 메커니즘을 사용해 locking을 구현하는데 사용됨

세마포어의 값이 0이면 locking된 상태이므로 lock을 사용할 수 없고, 세마포어의 값이 1이면 unlocking된 상태이므로 lock을 사용할 수 있다.

Mutex는 Mutual Exclusion의 약자로 한 번에 하나의 쓰레드만 임계 영역에 들어갈 수 있는 잠금 메커니즘을 제공하는 이진 변수

##### Binary Semaphore

- 신호 메커니즘을 기반으로 한 기능
- 현재 쓰레드보다 우선 순위가 높은 쓰레드도 Binary Semaphore를 unlock 후 locking 상태로 만들 수 있음
- wait(), signal()에 따라 세마포어의 값이 변경됨
- 여러 쓰레드가 동시에 Binary Semaphore를 획득할 수 있음
- Binary Semaphore는 소유권이 없음
- 다른 프로세스나 쓰레드가 Binary Semaphore를 해제할 수 있기 때문에 뮤텍스보다 빠름
- 자원에 대한 인스턴스가 많은 경우 Binary Semaphore를 사용하는 것이 유리함

##### Mutex

- 잠금 메커니즘을 기반으로 한 기능
- 뮤텍스를 획득한 쓰레드는 임계 영역에서 나갈 때만 뮤텍스를 해제할 수 있음
- 뮤텍스 값은 lock, unlock으로 수정할 수 있음
- 한 번에 하나의 쓰레드만 뮤텍스를 획득할 수 있음
- 소유자만 잠금을 해제할 수 있으므로 뮤텍스는 소유권이 있음
- 획득한 쓰레드만 잠금을 해제할 수 있기 때문에 세마포어보다 느림
- 자원에 대한 단일 인스턴스가 있는 경우 뮤텍스를 사용하는 것이 유리함

두 기법 역시 완벽한 기법은 아니며, 이 기법을 사용하더라도 데이터의 무결성을 보장할 수 없으며 데드락이 발생할 수도 있다. 하지만 상호배제를 위한 기본적인 기법이다.

> **본 포스트는 다음 문서를 참고해 작성했습니다.**
>
> [https://velog.io/@conatuseus/OS-세마포어와-뮤텍스](https://velog.io/@conatuseus/OS-%EC%84%B8%EB%A7%88%ED%8F%AC%EC%96%B4%EC%99%80-%EB%AE%A4%ED%85%8D%EC%8A%A4)
>
> [https://www.geeksforgeeks.org/difference-between-binary-semaphore-and-mutex/](https://www.geeksforgeeks.org/difference-between-binary-semaphore-and-mutex/)
