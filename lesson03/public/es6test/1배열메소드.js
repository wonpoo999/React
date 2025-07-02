console.log('Day03 - JavaScript 문법 테스트')
//3. reduce method : Array의 each Element 값을 순서대로 실행한  수식 결과로 한개의 값만 만들어낸다. 배열의 많은 값을 한개의 값으로 줄여버리는거지. 모든 값을 다 더하든, 다 연결하든, 하나씩 빼든, 이런 식으로 결국은 많은 것을 하나로 줄이는거지. 그래서 Reduce다.

//2. filter method
const numbers1 = [45,4,9,16,25]
let sum = numbers1.reduce(myFunction4)

//reduce의 특징이 뭐라 했지? 첫번째 인자가 각 요소의 연산결과를 저장하는 변수가 필요하다는 것이다. 다음번에 왔을 때 요 total에서 연산이 이어나갈 수 있게. 
function myFunction4(total, value){      //초기값은 0이라 생각해면 된다. 0이 될 수 있고 빈문자' '가 될 수 있고
    return total + value
    //0 더하기 45는 45지? 그럼 '45'만 입력되지. 
   //  0+45 = 45, 45+4 = 49, 49+9 = 58, 58+16=74, 74+25=99
}
console.log('reduce sum', sum)
//자, 필터 해볼까?
const over15 = numbers1.filter(myFunction2)    //얘는 15초과 필터링
const under15 = numbers1.filter(myFunction3)  // 15이하 필터리
//filter method의 특정은 return의 식이 true or false로 결과값이 나오지
function myFunction2(value){
    return value > 15
    // true 되는 값만 가져가서 새로운 array를 create하는 거다. 그게 바로 filter이니라
}
console.log('filter-over15', over15)
//toString 때문에 15보다 큰 값의 나열된 숫자의 수도 출력되더라
function myFunction3(value){
    return value < 15
}
console.log('filter-under15', under15)

// 1.map이라는 method를 출력 테스트 해봤지
//map method는 새로운 array를 만든다
// ㄴ numbers1 배열을 조작(각 요소값으로 연산-콜백함수 리턴)한 결과
const numbers2 = numbers1.map(myFunction)    //myFunction은 자기 value에 값을 입력

// value는 numbers1 배열의 각각 요소값. 요소의 값만 사용할 때 인자는 1개
function myFunction(value){     //새로운 myFunction에 입력값을 주지
    return value*2      //연산     90, 8, 18, 32, 50     
}

// 콜백 함수를 화살표 함수로 바꾸기 , 즉 myFunction을 function으로 정의하지 않고 콜백 함수로 바로 실행
const numbers3 = numbers1.map((value, index)=> (value*2 + index))
// 예시 ) 요소 (element)의 값(value)과 인덱스(index)를 콜백함수(callball function)로 입력(인자) 
console.log('numbers2', numbers2.toString())
console.log('numbers3', numbers3.toString())

console.log('its over 9000!!!!')