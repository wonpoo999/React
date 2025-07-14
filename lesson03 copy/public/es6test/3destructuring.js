// 비구조화, 구조 분해
// ㄴ 배열 또는 객체를 분해한다 생각하면 된다.
//그럼 언제 쓰냐고? 함수 등 값을 전달할 때 사용한다.
// 아까는 새로운 함수를 만들 때 사용한다면 이건 전달하는데 쓴다

const sana = {name: '사나', age:23, address: '경기'}

function print1 (objValue){
//objValue라는 값을 받아와서 print 하는거지
    console.log('print1 함수 실행')
    console.log(objValue.name)
    console.log(objValue.age)
    console.log(objValue.address)
}

function print2 ({age, name, address}){  //{속성이름1, 속성이름2,,,,,} 이름 나이 순이 아니라 따로 넣어둬도  맨 위에 사나 name이 먼저 왔고 age가 그 다음 왔기 떄문에 속성 이름을 반대로 하든 다르게 배열해도 그거랑은 무관하게 위 나열 기준으로 나오지.
    console.log('print2 함수 실행')
    console.log(name)
    console.log(age)
    console.log(address)  // 없는 속성이름 : undefined
}

function print3({address}){ // 필요한 속성만 가져오기     //address 속성값을 addr 변수에 저장 
    console.log ('print3 함수 실행----')     
    console.log (address)    
}

function print4({address: addr}){ // 필요한 속성만 가져오기     //address 속성값을 addr 변수에 저장 
    console.log ('print3 함수 실행----')     
    console.log (addr)    
    console.log (address) // address 변수 선언 없으므로 오류(없는 속성은 undefined)

}
print1(sana)
print2(sana)
print3(sana)
print4(sana)