## 링크드리스트란?

연결 리스트, 링크드 리스트라고 하며 각 노드가 데이터와 포인터를 가지며 연결되어 있는 형태의 자료구조를 말한다. 데이터는 말 그대로 노드의 데이터를 가지고 있고, 포인터는 그 다음 순서의 자료가 있는 주소를 가지며 연결되어 있다.

링크드 리스트는 첫 노드의 주소를 가지고 있는 `head`와 노드의 개수를 표현하는 `length`가 있다.

종류로는 단순 링크드 리스트, 원형 링크드 리스트, 양방향 링크드 리스트가 있다.

### 장점

1. 링크드 리스트의 장점은 노드의 삽입이 간단하다.

   노드를 생성 후 이전 노드의 링크를 생성한 노드에, 생성한 노드의 링크를 이후 노드로 연결해 주면 된다.

2. 배열에 비해 메모리를 효율적으로 쓸 수 있다.

   메모리가 연속된 위치에 위치하지 않으므로 메모리 할당이 쉽고, 고정된 크기의 메모리를 할당받지 않아도 되므로, 자유롭게 노드를 추가할 수 있다.

### 단점

1. 항목에 대한 접근이 오래걸린다.

   물리적으로 인접한 메모리에 위치해있지 않고, head 노드부터 탐색해 접근해야 하므로 시간복잡도 `O(n)`을 갖게된다.

2. 참조 포인터를위한 메모리 공간이 낭비된다.

   데이터를 저장해야 하는 공긴 이외에 추가적으로 다음 노드에 대한 참조를 저장해야 하기 때문에 메모리 공간이 낭비된다. 하지만

## 단순 링크드 리스트

다음 노드에 대한 참조만을 가지는 가장 단순한 형태의 링크드 리스트이다. 가장 마지막 원소를 찾으려면 첫 노드부터 참조 포인터를 통해 마지막 원소까지 탐색해야 하기 때문에 시간 복잡도를 `O(n)`을 갖게된다.

단순 링크드 리스트는 head 노드를 참조하는 주소를 잃어버릴 경우 데이터 전체를 사용하지 못하고, 중간에 있는 노드가 유실되는 경우에도 그 이후의 자료들을 사용하지 못하기 때문에 안정적인 자료구조는 아니다.

## 양방향 링크드 리스트

양방향 링크드 리스트는 단순 링크드 리스트와 달리 다음 노드에 대한 참조만을 가지는 것이 아니라 이전 노드에 대한 참조도 갖게 된다. 그러므로 뒤로 탐색이 가능하다.

게다가 현재 노드를 제거할 경우, 단순 링크드 리스트는 head 노드부터 현재 바로 전 노드까지 재 탐색 후 노드의 링크를 제거해야 하지만, 양방향 링크드 리스트는 바로 이전 노드로 이동해 링크를 제거할 수 있으므로 현재 노드를 삭제할 때 단순 링크드 리스트에 비해 훨씬 간단하다.

그리고 각 노드가 이전과 이후로 참조를 2개 가지고 있기 때문에 단순 링크드 리스트에 비해 안정적이다.

## 원형 링크드 리스트

단순 링크드 리스트에서 마지막 노드의 링크를 head 노드로 연결하게 되면 원형 링크드 리스트가 된다. 그러므로 끝이 없고 노드를 탐색할 경우 특정 조건을 설정하지 않는다면 무한하게 순회할 수 있으므로 주의해야한다.