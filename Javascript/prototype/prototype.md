# 프로토타입

## 프로토타입이란?

자바스크립트는 클래스 기반 객체지향 언어와는 달리 프로토타입 기반 객체지향 언어이다. (물론 ES2015부터 클래스 문법이 추가되었기는 하지만 여전히 프로토타입 기반 언어이다. ) 프로토타입이란 객체의 원형을 나타내는 개념으로 자바스크립트는 객체 원형인 프로토타입을 이용하여 새로운 객체를 만들어 내고, 이렇게 생성된 객체 역시 또 다른 객체의 원형이 될 수 있다.

프로토타입은 자바스크립트가 객체를 확장하고 객체 지향적인 프로그래밍을 할 수 있도록 해준다.

상속 관점에서 자바스크립트의 유일한 생성자는 객체뿐이다. 각각의 객체는 `[[Prototype]]`이라는 숨김 프로퍼티를 가지는데 이것은 자신의 프로토타입(원형)이 되는 다른 객체를 가리킨다.

그 객체의 프로토타입 또한 프로토타입을 가지고 있고 이것이 반복되다, 결국 null을 프로토타입으로 가지는 오브젝트에서 끝난다. `null`은 더 이상 프로토타입이 없다고 정의되며, 프로토타입 체인의 종점 역할을 한다.

# 함수와 객체의 내부 구조

자바스크립트에서는 함수를 정의하고 파싱단계로 들어가면 내부적으로 수행되는 작업이 있다.

![1](https://user-images.githubusercontent.com/49899406/88473315-40884c00-cf57-11ea-8d09-11217ae681b8.png)

```javascript
function User(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
```

다음은 `name`, `age`, `gender`라는 프로퍼티를 가지고 있는 `User`함수를 선언한 모습이다. `User`는 각 프로퍼티와 숨김 프로퍼티인 `prototype`과 `[[Prototype]]`(`__proto__`)를 갖게된다. 이 둘은 엄현하게 다르다. (`__proto__`는 `[[prototype]]`용 getter, setter이다. 둘은 엄연히 다르다.)

`User`함수의 `prototype`은 `User Prototype`객체를 참조하게 된다. (`prototype` 프로퍼티는 함수만이 가지고 있다)

그리고 `User Prototype`의 `constructor`는 `User`함수를 참조하고 있다.

## 프로토타입 객체를 이용한 새로운 객체 생성

프로토타입 객체란, 함수를 정의하면 다른 곳에 생성되는 프로토타입 객체는 자신이 다른 객체의 원형이 되는 객체이다. 그렇다면 프로토타입 객체를 이용해 다른 객체를 만들어보자

![2](https://user-images.githubusercontent.com/49899406/88473319-48e08700-cf57-11ea-9070-3383c8809083.png)

```javascript
function User(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const user1 = new User('chanyeong', 25, 'man');
```

`User`함수를 이용해 `user1`이라는 객체를 생성했다. `user1`은 `User Prototype`의 `constructor` 프로퍼티로 새로운 객체를 생성하게 되고 `user1`의 `[[prototype]]`은 객체가 만들어지기 위해 사용된 원형인 프로토타입 객체, `User Prototype`을 참조하게 된다.

![3](https://user-images.githubusercontent.com/49899406/88473324-4f6efe80-cf57-11ea-892a-7f4fd9467f66.png)

```javascript
function User(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const user1 = new User('chanyeong', 25, 'man');

User.prototype.getName = function () {
  return this.name;
};

console.log(user1.getName()); // chanyeong

user1.getName = function () {
  return 'user getName()';
};

console.log(user1.getName()); // user getName()
```

`User`함수의 프로토타입에 `getName`이라는 메서드를 추가했다. `getName`은 `User Prototype`의 프로퍼티이고 `user1`의 `[[prototype]]`은 `User Prototype`을 참조하고 있다. `user1`에서 `getName()`메서드를 호출하게 되면 `user1`은 먼저 자신의 프로퍼티중에 `getName()`메서드가 있는지 확인하게 된다.

만약 `user1`에 `getName`이라는 메서드가 존재하지 않는다면 `[[prototype]]`프로퍼티를 사용해 참조하고 있는 프로토타입에 `getName()`메서드가 있는지 확인 후 접근한다.

그렇게 되면 다음 코드와 같이 프로토타입 객체에만 `getName()`메서드가 있을 경우 `user1`의 `name`이 반환되지만 `user1`객체에도 `getName()`메서드가 있다면 `user1`의 `getName()`메서드가 실행된다.

# 프로토타입 상속

자바스크립트에도 다른 언어와 같이 상속의 개념이 있다. 다만 자바스크립트에서는 프로토타입 상속이라는 기능을 이용한다.

자바스크립트의 모든 객체는 숨김 프로퍼티`[[Prototype]]`을 가지고 있다. 이 프로퍼티는 객체나 `null`을 가리킨다. 이 프로퍼티가 다른 객체를 참조하는 경우 참조 대상을 프로토타입이라 한다.

![4](https://user-images.githubusercontent.com/49899406/88473334-5c8bed80-cf57-11ea-925f-46c43c240f58.png)

```javascript
const student = {
  job: 'student',
  getJob() {
    return this.job;
  },
};

const user = {
  name: 'chanyeong',
  __proto__: student,
};

console.log(user.getJob()); // student
```

다음과 같이 객체 `student`와 `user`를 만들었다. `student`에는 프로퍼티 `job`과 `getJob()`메서드를 생성했고 `user`에는 `name`이라는 프로퍼티와 `__proto__`를 사용해 `[[prototype]]`을 `student`로 설정했다.

`user`의 프로토타입에서 `student`를 상속받았기 때문에 `user`는 `student`의 프로퍼티인 `getJob()`메서드를 사용할 수 있다. (여기서 `this`는 프로토타입의 영향을 받지 않고 언제나 호출한 객체가 된다)

![5](https://user-images.githubusercontent.com/49899406/88473339-6ada0980-cf57-11ea-966c-ea6a6586444f.png)

```javascript
const student = {
  job: 'student',
  getJob() {
    return this.job;
  },
};

const user = {
  name: 'chanyeong',
  getName() {
    return this.name;
  },
  __proto__: student,
};

const detailedUser = {
  age: 25,
  __proto__: user,
};

console.log(detailedUser.getJob()); // student
console.log(detailedUser.getName()); // chanyeong
```

프로토타입 상속은 연속적으로 일어날 수도 있다. 이런 경우를 프로토타입 체이닝이라고 한다. `detailedUser`의 프로토타입은 `user`, `user`의 프로토타입은 `student`이기 때문에 `detailedUser`는 프로토타입 체인을 타고 올라가 `student`의 프로퍼티에도 접근할 수 있다.

하지만 프로토타입 체이닝에는 두가지 제약사항이 있다.

1. 순환 참조는 허용되지 않는다. `__proto__`를 이용해 닫힌 형태로 다른 객체를 참조하면에러가 발생한다.
2. `__proto__`의 값은 언제나 객체나 `null`만 가능하고 다른 자료형은 무시된다.
3. 객체는 단 하나의 프로토타입만 가질 수 있다. 두 개 이상의 객체는 상속받지 못한다.

## 상속 프로퍼티 순회

```javascript
const student = {
  job: 'student',
  getJob() {
    return this.job;
  },
};

const user = {
  name: 'chanyeong',
  getName() {
    return this.name;
  },
  __proto__: student,
};

console.log(Object.keys(user)); // [ 'name', 'getName' ]

for (let key in user) {
  console.log(key); // name, getName, job, getJob
}
```

`Object.keys()`메서드를 사용하면 객제 자신의 키만 반환하지만 `for...in`반복문으로 순회를 하게 되면 상속 프로퍼티도 순회대상에 포함된다.

# 네이티브 프로토타입

지금까지는 프로토타입 상속에 관해 알아보았다. 그렇다면 따로 프로토타입을 지정해주지 않은 객체는 어떤 프로토타입을 가리킬까?

![6](https://user-images.githubusercontent.com/49899406/88473343-75949e80-cf57-11ea-82f5-4b06c8c557c9.png)

모든 내장 객체들(Object, Array, Date, Function 등)은 각자의 네이티브 프로토타입을 가지고 있다. 예를 들어 객체 `{ name: 'chanyeong' }`을 만들면 기본 `new Object()` 생성자가 내부에서 사용되기 때문에 `Object.prototype`이 객체의 프로토타입이 되며 내부 메서드도 사용할 수 있다. 이런 내부 동작은 메모리 효율을 높여주는 장점을 가져다준다.

명세서 또한 모든 내장 프로토타입의 꼭대기엔 `Object.prototype`이 있어야 한다고 규정하고 이런 규정 때문에 몇몇 사람들은 '모든 것은 객체를 상속받는다'라는 말도 한다. (Array나 Function도 객체이기 때문이다)

![7](https://user-images.githubusercontent.com/49899406/88473345-81806080-cf57-11ea-83c4-90d726884f6a.png)

세 가개의 내장 객체(Array, Function, String)을 이용해 그림을 그리면 다음과 같다.

```javascript
const arr = [];

console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Array.prototype.__proto__.__proto__ === null); // true
```

실제로 콘솔을 통해 확인해 봐도 그림과 같게 나오는것을 확인할 수 있다.

## 네이티브 프로토타입 변경하기

네이티브 프로토타입또한 수정할 수 있고 메서드를 추가할 수도 있다.

```javascript
String.prototype.getString = function () {
  return this.toString();
};

console.log('chanyeong'.getString()); // chanyeong
```

다음과 같이 메서드를 추가할 수 있지만 프로토타입은 전역으로 영향을 미치기 때문에 프로토타입을 조작하면 충돌이 날 가능성이 높다. 따라서 폴리필을 만들때를 제외하고는 네이티브 프로토타입을 수정하는 것은 좋지 않다.

# 프로토타입 메서드

지금까지는 객체의 프로토타입을 설정하기 위해 `__proto__`를 사용했다. 하지만 `__proto__`는 브라우저를 대상으로 개발하고 있다면 다소 구식이기 때문에 더는 사용하지 않는 것이 좋고 `__proto__`를 대체할 다음과 같은 메서드들이 있다.

- `Object.create(proto[, descriptors])` : `[[Prototype]]`이 `proto`를 참조하는 빈 객체를 만든다. 이때 프로퍼티 설명자를 추가로 넘길 수 있다.
- `Object.getPrototypeOf(obj)` : `obj`의 `[[Prototype]]`을 반환한다.
- `Object.setPrototypeOf(obj, proto)` : `obj`의 `[[Prototype]]`이 `proto`가 되도록 설정한다.


> **본 포스트는 다음 문서를 참고해 작성했습니다.**
> [https://ko.javascript.info/](https://ko.javascript.info/)
> [https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
> [http://www.nextree.co.kr/p7323](http://www.nextree.co.kr/p7323)