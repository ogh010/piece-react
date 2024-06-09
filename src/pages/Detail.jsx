import sample04 from '../assets/img/smaple04.jpeg'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Detail = () => {
    const navigate = useNavigate();
    const move = (val) => {
        navigate(val)
    }
    // 하트 아이콘 토글
    const [heart,setHeart] = useState('🩶');
    const toggleHeart = () => {
        setHeart(heart == '🩶' ? '🩷' : '🩶')
    }
  return (
    <>
        <header>
            <div className='back' onClick={() => move(-1)}></div>
            <div></div>
        </header>

        <main id='detail'>
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
                            <img src={sample04} alt="" />
                        </div>
                        <div className='bottom'>
                            <div className='icoBox'>
                                <span className='heart' onClick={toggleHeart}>{heart}</span>
                                <span className='comment' >💬</span>
                            </div>
                            <p>좋아요 8개</p>
                            <p><b>im_winter</b>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <span className='gray'>댓글 4개 모두 보기</span>
                            <span className='gray'>2024.06.08</span>
                        </div>
                    </article>
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
export default Detail