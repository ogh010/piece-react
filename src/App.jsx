import './assets/css.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { CommonBtn,CommonHeader, CommonFooter } from './components/index';
import {Join, Main, Notice, User, Detail,Profile} from './pages/index'

function App() {

  return (
    <>
      <div id='wrap'>
        <div id='leftWrap'>
          <div className='leftCon'>
            <p>소중한 기억을 한 <b>조각</b>씩 남겨보세요</p>
            <p>사진 공유는 <span className='logo'></span></p>
          </div>
        </div>
        <div id='rightWrap'>
          <Routes>
            {/* 공통 컴포넌트 헤더, 푸터, 버튼 */}
            <Route path='/commonheader' element={<CommonHeader />} /> 
            <Route path='/commonbtn' element={<CommonBtn />} /> 
            <Route path='/commonfooter' element={<CommonFooter />} /> 
            {/* pages */}
            <Route path='/join' element={<Join />} />          
            <Route path='/main' element={<Main />} />          
            <Route path='/notice' element={<Notice />} />          
            <Route path='/user' element={<User />} />          
            <Route path='/detail' element={<Detail />} />          
            <Route path='/profile' element={<Profile />} />          
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
