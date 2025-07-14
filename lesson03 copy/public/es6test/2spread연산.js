//객체, 배열에서 사용하는 연산
// 기호는 ...로 표시

// Array
const kor =[90,89,77]
const eng = [77,88,100]
// 2개의 배열을 합쳐서 새로운 배열을 만들 때

const scores = [...kor, ...eng]
console.log('배열 합치기 scores :', scores)

// 객체에 spread연산 이용하여 새로운 배열 객체 형성하기 - 기존 객체(object) 복사하여 새로운 객체를 생성할 때 사용한다. useState
const people = {name: '트와이스', age:28}
console.log('people:' , people)

//...이 연산은 people 객체의 속성들을 모두 가져온다
const people2 = {...people, address: '서울'}     // address는 추가된 속성
console.log('새로운 객체 people2: ', people2)       
// 앞에 있는 name 속성을 가지고 와서 address라는 속성까지
//객체가 바뀌면 변수를 바꾸는 걸 권장하기 때문에 const 쓰는거


const people3 = {...people, name: '트와이스2'}    //name은 기존에 있던 속성
console.log('새로운 객체 people3 속성 수정: ', people3)

// people에 새로운 속성 추가하기
people.email = 'koreait@gmail.com'
//people에 기존 속성 값 변경하기
people['name'] = '아이브'    // people.name = '아이브'와 같음
console.log('기존 객체 people: ', people)

//useState