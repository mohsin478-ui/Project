import React from 'react'
import Login from '../../Components/Login/Login'
import Register from '../../Components/Register/Register'
import './home.css'
//import Modal from '../../Components/Modal/modal'

const Home = () => {
    return (
        <div class="Home">
            <div class="banner">
                Welcome to GYM Mangement System (GMS)
            </div>

            <div class="bg">

                <div class="LR">

                    <Login />
                    <Register />

                </div>


            </div>
        </div>
    )
}

export default Home