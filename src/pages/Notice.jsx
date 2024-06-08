import React from 'react'

const Notice = () => {
  return (
    <>
        <header>
            <div className='back'></div>
            <div></div>
        </header>

        <main id='notice'>
            <div className='noticeBox'>
                <div className='box'>
                    <span className='date'>2024년 6월 7일</span>
                    <div className='list'>
                        <div className='item'>
                            <div className='circle'></div>
                            <p>winter님이 게시물을 좋아합니다.</p>
                            <div className='img'></div>
                        </div>
                        <div className='item'>
                            <div className='circle'></div>
                            <p>winter님이 게시물을 좋아합니다.</p>
                            <div className='img'></div>
                        </div>
                        <div className='item'>
                            <div className='circle'></div>
                            <p>winter님이 게시물을 좋아합니다.</p>
                            <div className='img'></div>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <span className='date'>2024년 6월 5일</span>
                    <div className='list'>
                        <div className='item'>
                            <div className='circle'></div>
                            <p>winter님이 게시물을 좋아합니다.</p>
                            <div className='img'></div>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <span className='date'>2024년 6월 3일</span>
                    <div className='list'>
                        <div className='item'>
                            <div className='circle'></div>
                            <p>winter님이 댓글을 달았습니다. : 맞팔해요~🩵</p>
                            <div className='img'></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer>
            <ul>
                <li className='home'></li>
                <li className='add'></li>
                <li className='user'></li>
            </ul>
        </footer>
    </>
  )
}
export default Notice