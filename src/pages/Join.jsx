import React from 'react'

const Join = () => {
  return (
    <>
      <main id='join'>
        <div className='imgBox'>
          <span className='img1'></span>
          <span className='logo'></span>
          <p>peace와 사진을 공유해요! </p>
        </div>
        <div className='btnBox'>
          <div className="pull">5초만에 빠른 회원가입</div>
          <button type='button' className='pBtn kakao'><span className='ico'></span>카카오로 시작하기</button>
          <button type='button' className='pBtn google'><span className='ico'></span>Google로 시작하기</button>
          <button type='button' className='pBtn'>휴대폰 번호로 시작하기</button>
        </div>
      </main>
    </>
  )
}
export default Join