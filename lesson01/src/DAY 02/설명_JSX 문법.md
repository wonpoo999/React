JSX(JavaScript XML)는 React에서 UI를 선언적으로 표현할 수 있게 해주는 문법 확장입니다. HTML과 유사하지만 JavaScript 안에서 동작하며 약간 다른 규칙이 있습니다. 주요 문법과 특징을 아래에 정리합니다. (원래 HTML 안에서 JS 를 작성/실행, JSX는 JS안에서 함수가 html 요소를 리턴.)

✅ 1. JSX 기본 구조
<!-- JSX -->
const element = <h1>Hello, world!</h1>;
HTML과 유사하지만 JavaScript 코드 안에서 사용됨
babel(바벨)이 JSX를 React.createElement()로 변환
✅ 2. 하나의 부모 요소만 리턴

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
컴포넌트는 반드시 하나의 루트 요소를 반환해야 함
여러 요소를 반환하려면
또는 <></>로 감싸야 함
✅ 3. JavaScript 표현식(수식/메소드실행,값) 사용 ({} 중괄호)

const name = "샘";
const element = <h1>Hello, {name}!</h1>;
JSX 안에서는 중괄호 {}로 JavaScript 표현식 사용 가능
조건식, 함수 호출, 변수 등 삽입 가능
✅ 4. class → className, for → htmlFor

return (
  <div className="box" htmlFor="inputId">
    내용
  </div>
);
HTML 속성과는 다르게 설정함
class → className , for(label 태그 속성) → htmlFor
✅ 5. 조건부 렌더링

{
  isLoggedIn ? <Logout /> : <Login />;
}
또는

{
  isAdmin && <AdminPanel />;
}
JSX 안에서 삼항 연산자 또는 &&를 사용하여 조건부 렌더링 가능
✅ 6. 스타일 적용 방식
- 스타일을 정의한 내용을 하나의 객체처럼 다룬다.

<!-- ```jsx -->
const divStyle = { color: "blue", fontSize: "16px" };

return <div style={divStyle}>Styled Text</div>;
style은 객체 형태로 작성 (camelCase 사용)
✅ 7. 배열/리스트 렌더링

<!-- ```jsx` -->
const fruits = ["apple", "banana", "cherry"];
return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
JSX 안에서 .map() 사용 가능. 많이 사용하는 배열 메소트 (filter[조건까지 걸 수 있는 거], reduce[누적해서 곱한다])
반복 요소에는 반드시 key 속성 필요. 예시: 반복요소는 ki, td
✅ 8. 주석 사용 방법

return (
  <div>
    {/* 이건 주석입니다 */}
    <p>Hello</p>
  </div>
);
✅ 9. Fragment (<></>)

<!-- JSX -->
return (
  <>
    <Header />
    <Content />
  </>
);
불필요한
없이 여러 요소를 그룹화
<React.Fragment> 또는 축약형 <></> 사용

✅ 10. 컴포넌트 사용
<!-- JSX -->
클래스형 컴포넌트는 구조가 복잡해지기 때문에 함수형 컴포넌트를 쓰지 클래스형 컴포넌트는 더이상 쓰지 않는다.
<!-- 정의: 함수형 component -->
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
<Welcome name="샘" />
대문자로 시작하는 태그는 사용자 정의 컴포넌트로 인식됨
props를 통해 데이터 전달 : 부모 component가 자식 component에게 데이터 전달할 때
   ㄴ component가 계층 구조로 사용됨에 따라 필요하다.
✅ 11. 이벤트 속성

<!-- JSX -->

<button onClick={handleClick}>클릭</button>
onClick, onChange 등 DOM 이벤트는 camelCase로 작성
event handler는 함수 참조 또는 람다식(화살표 함수랑 동일한 뜻.) 사용 가능

✅ 참고: JSX는 결국 JS로 만들어진다.

```jsx
const element = <h1>Hello, world!</h1>;
는 다음 코드로 변환됨:

const element = React.createElement("h1", null, "Hello, world!");

// hook이라는 함수가 있어.


