import React from 'react'

const Main = () => {
  return (
    <>
        <header>
            <div className='logo'></div>
            <div className='heart'></div>
        </header>

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
                <ul>
                    <li>
                        <div></div>
                    </li>
                </ul>
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