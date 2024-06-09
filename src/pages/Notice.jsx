import React from 'react'
import { useNavigate } from 'react-router-dom';

const Notice = () => {
    const navigate = useNavigate();
    const move = (val) => {
        navigate(val); // 이전 페이지로 이동
    };
    return (
        <>
            <header>
                <div className='back' onClick={() => move(-1)}></div>
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
                    <li className='home' onClick={() => move('/main')}></li>
                    <li className='add'></li>
                    <li className='user' onClick={() => move('/user')}></li>
                </ul>
            </footer>
        </>
    )
}
export default Notice