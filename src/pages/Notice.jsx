import React from 'react'
import useMove from '../hooks/useMove';

const Notice = () => {
    const moveToPrev = useMove(-1);
    const moveToDetail = useMove('/detail');
    const moveToMain = useMove('/main');
    const moveToUser = useMove('/user');
    
    return (
        <>
            <header>
                <div className='back' onClick={moveToPrev}></div>
                <div></div>
            </header>

            <main id='notice'>
                <div className='noticeBox'>
                    <div className='box'>
                        <span className='date'>2024년 6월 7일</span>
                        <div className='list'>
                            <div className='item' onClick={moveToDetail}>
                                <div className='circle'></div>
                                <p>winter님이 게시물을 좋아합니다.</p>
                                <div className='img'></div>
                            </div>
                            <div className='item' onClick={moveToDetail}>
                                <div className='circle'></div>
                                <p>winter님이 게시물을 좋아합니다.</p>
                                <div className='img'></div>
                            </div>
                            <div className='item' onClick={moveToDetail}>
                                <div className='circle'></div>
                                <p>winter님이 게시물을 좋아합니다.</p>
                                <div className='img'></div>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <span className='date'>2024년 6월 5일</span>
                        <div className='list'>
                            <div className='item' onClick={moveToDetail}>
                                <div className='circle'></div>
                                <p>winter님이 게시물을 좋아합니다.</p>
                                <div className='img'></div>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <span className='date'>2024년 6월 3일</span>
                        <div className='list'>
                            <div className='item' onClick={moveToDetail}>
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
                    <li className='home' onClick={moveToMain}></li>
                    <li className='add'></li>
                    <li className='user' onClick={moveToUser}></li>
                </ul>
            </footer>
        </>
    )
}
export default Notice