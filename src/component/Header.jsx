import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/Nepoai-Fevicon.png'


function Header() {
    return (
        <>

            <header className={`bg-amber-200 flex items-center justify-between w-full`}>
                <Link to={`/`}>
                    <div className="flex flex-row items-center gap-3 p-5">
                        <img src={logo} alt="NepoAi Logo" className={` w-12 h-12`} />
                        <p className=' text-amber-800 text-lg font-semibold'>NepoAi</p>
                    </div>
                </Link>
                <Link to={`https://www.facebook.com/hecodes.js.py`} className='pr-12 hover:text-green-900'>Made With ❤ SaajNaa</Link>

            </header>



        </>)
}

export default Header