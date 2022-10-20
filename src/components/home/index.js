import React from 'react'
import Body from '../body'
import Header from '../header'
import './home.css'
function Home() {
    return (
        <div className='home'>
            <div>
                <Header />
            </div>
            <div>
                <Body />
            </div>

        </div>
    )
}

export default Home