import React from 'react'
import sample01 from '../assets/img/sample01.jpg'
import sample02 from '../assets/img/sample02.jpg'
import sample04 from '../assets/img/smaple04.jpeg'
import { useState } from 'react';
import Commnet from '../components/Commnet'

const Main = () => {
    // 하트 아이콘 토글
    const [heart,setHeart] = useState('🩶');
    const toggleHeart = () => {
        setHeart(heart == '🩶' ? '🩷' : '🩶')
    }

    // 팝업 열기/닫기
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleclose = () => {
        setOpen(false);
    };
    
    return (
    <>
        <header>
            <div className='logo'></div>
            <div className='heart'></div>
        </header>
        {/* onClose,open 속성을 전달하여 팝업 상태 제어 */}
        <Commnet onClose={handleclose} open={open}/>
        <main id='main'>
            <section className='storyBox'>
                <ul>
                    <li className='circleBox'>
                        <div className='circle'></div>
                        <span>im_winter</span>
                    </li>
                </ul>
            </section>
            <section className='mainBox'>
                <div className='mainList'>
                    <article>
                        <div className='top'>
                            <div className='left'>
                                <div className='circle'></div>
                                <span>im_winter</span>
                            </div>
                            <div className="menu"></div>
                        </div>
                        <div className='content'>
                            {/* 이미지 */}
                            <img src={sample01} alt="" />
                        </div>
                        <div className='bottom'>
                            <div className='icoBox'>
                                <span className='heart' onClick={toggleHeart}>{heart}</span>
                                <span className='comment' onClick={handleClickOpen} >💬</span>
                            </div>
                            <p>좋아요 8개</p>
                            <p><b>im_winter</b>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <span className='gray'>댓글 4개 모두 보기</span>
                            <span className='gray'>2024.06.08</span>
                        </div>
                    </article>
                    <article>
                        <div className='top'>
                            <div className='left'>
                                <div className='circle'></div>
                                <span>im_winter</span>
                            </div>
                            <div className="menu"></div>
                        </div>
                        <div className='content'>
                            {/* 이미지 */}
                            <img src={sample02} alt="" />
                        </div>
                        <div className='bottom'>
                            <div className='icoBox'>
                                <span className='heart' onClick={toggleHeart}>{heart}</span>
                                <span className='comment' onClick={handleClickOpen}>💬</span>
                            </div>
                            <p>좋아요 8개</p>
                            <p><b>im_winter</b>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <span className='gray'>댓글 4개 모두 보기</span>
                            <span className='gray'>2024.06.08</span>
                        </div>
                    </article>
                    <article>
                        <div className='top'>
                            <div className='left'>
                                <div className='circle'></div>
                                <span>im_winter</span>
                            </div>
                            <div className="menu"></div>
                        </div>
                        <div className='content'>
                            {/* 이미지 */}
                            <img src={sample04} alt="" />
                        </div>
                        <div className='bottom'>
                            <div className='icoBox'>
                                <span className='heart' onClick={toggleHeart}>{heart}</span>
                                <span className='comment' onClick={handleClickOpen}>💬</span>
                            </div>
                            <p>좋아요 8개</p>
                            <p><b>im_winter</b>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <span className='gray'>댓글 4개 모두 보기</span>
                            <span className='gray'>2024.06.08</span>
                        </div>
                    </article>
                </div>
            </section>
        </main>

        <footer>
            <ul>
                <li className='home on'></li>
                <li className='add'></li>
                <li className='user'></li>
            </ul>
        </footer>
    </>
  )
}
export default Main