import {useState} from 'react'
import useMove from '../hooks/useMove';

const User = () => {
    const moveToPrev = useMove(-1);
    const moveToDetail = useMove('/detail');
    const moveToMain = useMove('/main');
    const moveToJoin = useMove('/join');
    const moveToProfile = useMove('/profile');

    // 메뉴 토글
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLogout = () => {
        console.log('로그아웃');
        const confirmLogout = window.confirm('정말 로그아웃 하시겠습니까?');
        if(confirmLogout) {
            moveToJoin();
        }
    }
    return (
        <>
        <header>
                <div className='back' onClick={moveToPrev}></div>
                <div className='setting' onClick={toggleMenu}>
                    {isMenuOpen && 
                         <ul className="setting-menu">
                            <li className="menu-item" onClick={moveToProfile}>🙂 프로필 변경</li>
                            <li className="menu-item" onClick={handleLogout}>🫥 로그아웃</li>
                        </ul>
                    }
                </div>
            </header>

            <main id='user'>
                <section className='userBox'>
                    <p className='id'>🩶 im_winter</p>
                    <div className='info'>
                        <div className='circle'></div>
                        <ul>
                            <li>
                                <b>15</b>
                                <span>게시물</span>
                            </li>
                            <li>
                                <b>1</b>
                                <span>팔로워</span>
                            </li>
                            <li>
                                <b>3</b>
                                <span>팔로잉</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='imgBox'>
                    <ul>
                        <li onClick={moveToDetail}>
                            <span className='descrip'>🩷 1 &nbsp; 💬 10</span>
                        </li>
                        <li onClick={moveToDetail}>
                            <span className='descrip'>🩷 1 &nbsp; 💬 10</span>
                        </li>
                        <li onClick={moveToDetail}>
                            <span className='descrip'>🩷 1 &nbsp; 💬 10</span>
                        </li>
                        <li onClick={moveToDetail}>
                            <span className='descrip'>🩷 1 &nbsp; 💬 10</span>
                        </li>
                    </ul>
                </section>
            </main>

            <footer>
                <ul>
                    <li className='home' onClick={moveToMain}></li>
                    <li className='add'></li>
                    <li className='user on'></li>
                </ul>
            </footer>
        </>
    )
}
export default User;