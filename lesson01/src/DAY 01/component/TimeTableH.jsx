//Day1_06 : 부모컴포넌트가 자식에게 전달하는 데이터(프로퍼티) 연습

// TimeTableH.jsx
import '../css/TimeTableH.css'

export default function TimeTableH({ time, todo }) {
  return (
    <div>
      <h3 className="title">오늘의 시간표</h3>
      <table>
        <tbody>
          <tr>
            <th className="theading">TIME</th>
            {time.map((item, idx) => (
              <td className="tdata" key={idx}>{item}</td>
            ))}
          </tr>
          <tr>
            <th className="theading">TODO</th>
            {todo.map((item, idx) => (
              <td className="tdata" key={idx}>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
