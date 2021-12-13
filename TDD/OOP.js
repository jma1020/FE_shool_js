//객체지향


// 1. 모듈 패턴(클로저에서 말했는데 대체적으로 클로저 테크닉이 필요한때가 모듈패턴)
//객체를 반환하는
function person() {
    // 클로저 공간
    let age = 35;

    return {
        getAge: function () { return age },
        setAge: function (data) { age = data }
        // 얘네 둘이 클로저 공간에 접근할 수 있는 클로저 함수
    }
}

const myPerson = person();
console.log(person.getAge());

// 2. 사용자 정의 타입 패턴
function PersonType() {
    this.age = 35;
    // 이 값은 외부에서 은닉되지 않는다. 값을 숨길 수 없다.
}

PersonType.prototype.getAge = function () {
    return this.age
}

const instancePerson = new PersonType();
console.log(instancePerson.getAge());

// 3. 모듈 + 사용자 정의 타입
// 클로저 공간과 
function PersonType2() {
    let age = 25;

    function innerPersonType() { } 
    
    innerPersonType.prototype.getAge = function () {
            return age;
    }
    
    return innerPersonType
}



const Person3 = PersonType2();
const person3 = new Person3();
console.log(person3.getAge());



// IIFE 패턴으로 만들어보기
const PersonType3 = (function () {
    let age = 25;

    function innerPersonType() { }

    innerPersonType.prototype.getAge = function () {
        return age;
    }

    return innerPersonType;
})();

const personType3 = new PersonType3();
console.log(personType3.getAge());

