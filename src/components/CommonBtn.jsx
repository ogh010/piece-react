import React from 'react'

 const Common = () => {
  return (
    <>
        <button type='button' className='pBtn'>휴대폰 번호로 시작하기</button>
        <button type='button' className='pBtn kakao'><span className='ico'></span>카카오로 시작하기</button>
        <button type='button' className='pBtn google'><span className='ico'></span>Google로 시작하기</button>
        <button type='button' className='pBtn black'>저장하기</button>
        <button type='button' className='pBtn pink'>삭제하기</button>
    </>
  )
}

export default Common