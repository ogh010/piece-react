import './assets/css.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { CommonBtn,CommonHeader } from './pages/index';

function App() {

  return (
    <>
      {/* <Routes>
        <Route >
      </Routes> */}
      <div id='wrap'>
        <div id='leftWrap'>
          <div className='leftCon'>
            <p>소중한 기억을 한 <b>조각</b>씩 남겨보세요</p>
            <p>사진 공유는 <span className='logo'></span></p>
          </div>
        </div>
        <div id='rightWrap'>
          <Routes>
            <Route path='/commonheader' element={<CommonHeader />} /> 
            <Route path='/commonbtn' element={<CommonBtn />} /> 
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
