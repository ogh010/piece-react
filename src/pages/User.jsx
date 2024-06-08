import React from 'react'

const User = () => {
  return (
    <>
       <header>
            <div className='back'></div>
            <div></div>
        </header>

        <main id='user'>
            <section className='userBox'>
                <p className='id'>🩶 winter</p>
                <div className='info'>
                    <div className='circle'></div>
                    <ul>
                        <li>
                            <span>15</span>
                            <span>게시물</span>
                        </li>
                        <li>
                            <span>1</span>
                            <span>팔로워</span>
                        </li>
                        <li>
                            <span>3</span>
                            <span>팔로잉</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='imgBox'>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </main>

        <footer>
            <ul>
                <li className='home'></li>
                <li className='add'></li>
                <li className='user on'></li>
            </ul>
        </footer>
    </>
  )
}
export default User;