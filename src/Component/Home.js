import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import userData from '../Contextapi'

function Home({setUserLoginSetup}) {
    const navigate = useNavigate()
    const {userloginSetup} = useContext(userData)
    console.log(userloginSetup.fname + userloginSetup.lname)
    const handleLogout = ()=>{
        setUserLoginSetup({})
    }
    return (
        <>
            <div>
                <h1>This is Home Page</h1>
                <h2>{`Hii 👋${userloginSetup.fname} ${userloginSetup.lname}`}</h2>
                <button className='btn' onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}


export default Home