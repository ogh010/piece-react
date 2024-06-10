import React from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const move = (val) => {
        navigate(val);
    }
  return (
    <div>
        <header>
            <div className='back' onClick={() => move(-1)}></div>
            <div></div>
        </header>

        <main id='profile'>
        
        
        </main>
        
        <footer>
            <ul>
                <li className='home' onClick={() => move('/main')}></li>
                <li className='add'></li>
                <li className='user' onClick={() => move('/user')}></li>
            </ul>
        </footer>
    </div>
  )
}

export default Profile;