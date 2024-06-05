import React from 'react'

const CommonHeader = () => {
  return (
    <div>
        <header>
            <div className='logo'></div>
            <div className='heart'></div>
        </header>
        <header>
            <div className='back'></div>
            <div className='next'></div>
        </header>
        <header>
            <div className='back'></div>
            <div></div>
        </header>
        <header>
            <div></div>
            <div className='next'></div>
        </header>
        <header>
            <div className='close'></div>
            <div className='next'></div>
        </header>
    </div>
  )
}
export default CommonHeader;