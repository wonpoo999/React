//Day1_05 : KPopUL 컴포넌트의 부모 컴포넌트
//          index.js 에서 App 의 파일 위치 수정
import KPopUL from "./KPopUL";

export default function App() {
  const twice = ["나연❤", "모모", "다현", "지효"];
  return (
    <div>
      {/* {자식 component에 정의한 속성들 (members, title)} 은 하나의 객체로 자식 component에 전달 [KPopUL 확인] */}
      <KPopUL members={twice} title={"트와이스"}/>
      <KPopUL members={["슈가", "지민", "제이홉", "뷔"]} title={"BTS"} />
    </div>
  );
}