import { useEffect, useRef, useState } from 'react'

//Day04_02 : useRef, useEffect 테스트
//                  useRef는 input 요소에 사용 또는 단독을 이전값 사용을 위해서 정의

export function FocusInput() {
  // compoennt
  const inputRef = useRef(null)
  const [nickname, setNickname] = useState('')

  const handleFocus = () => {
    inputRef.current.focus()
    inputRef.current.value = '테스트 중입니다.'
  }

  console.log('이름: ', inputRef.current && inputRef.current.value)

  return (
    <>
      <input ref={inputRef} type="text" placeholder="이름을 입력하세요." />
      <button onClick={handleFocus}>포커스 이동</button>
      <hr />
      <input
        value={nickname}
        placeholder="닉네임을 입력하세요."
        onChange={(e) => setNickname(e.target.value)}
      />
      <div>닉네임 : {nickname}</div>
    </>
  )
}

export function EffectAndRef() {
  const inputRef = useRef(null)
  const [nickname, setNickname] = useState('')

  const handleFocus = () => {
    inputRef.current.focus()
    inputRef.current.value = '테스트 중입니다.'
  }

  useEffect(() => {
    console.log('이름: ', inputRef.current.value)
  })

  return (
    <>
      <input ref={inputRef} type="text" placeholder="이름을 입력하세요." />
      <button onClick={handleFocus}>포커스 이동</button>
      <hr />
      <input
        value={nickname}
        placeholder="닉네임을 입력하세요."
        onChange={(e) => setNickname(e.target.value)}
      />
      <div>닉네임 : {nickname}</div>
    </>
  )
}

export function PreviousValue() {
  const [count, setCount] = useState(0)
  //input와 연결하지 않고 사용하는 예시. (value 속성 안 씀.)
  const prevCount = useRef(0)

  useEffect(() => {
    //useRef로 만든 변수는 객체이다. 고로 current 속성으로 값을 설정해야하느니. 그래서 카운트라고 값을 줬지.
    prevCount.current = count
  }, [count])  //count가 바뀔때마다 콜백함수 실행. []로 바꾸면 마운트할 때 한번 가라

  return (
    <div>
      <p>현재 값: {count}</p>
      <p>이전 값: {prevCount.current}</p>
      <button onClick={() => setCount((count) => count + 1)}>+1</button>
    </div>
  )
}
