//DAY02_01 : 객체 데이터 props 연습
// {schedules}는 {schedules : schedules} 생략된 형태의 객체
// 그리고 schedules가 참조하는 데이터도 객체

import React from 'react'
import '../css/TimeTableH.css'

export default function TimeTableV({schedules}) {
  return (
    <div>
        <h3>2025년 7월 1일 (REACT DAY 02) 시간표</h3>
        <table>
            <thead>
                <th className='theading'>TIME</th>
                <th className='theading'>TODO</th>
            </thead>
            <tbody>
                {
                    //중가로는 표현식 기호
                    // item에 저장된 데이터 예시 {time: '09:00, todo: '수업'}
                    schedules.map((item, idx)=>(
                    <tr key={idx}>
                        <td className='tdata'>{item.time}</td>
                        <td className='tdata'>{item.todo}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)
}
