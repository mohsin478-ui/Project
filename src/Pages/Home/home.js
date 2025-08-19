import React from 'react'
import Login from '../../Components/Login/Login'
import Register from '../../Components/Register/Register'
import './home.css'
import Modal from '../../Components/Modal/modalForget'
import Page1 from '../DbPages/page1'
import Page2 from '../DbPages/page2'
import Page3 from '../DbPages/page3'
import Page4 from '../DbPages/page4'
import Page5 from '../DbPages/page5'
import Page6 from '../DbPages/page6'
import ModalForget from '../../Components/Modal/modalForget'

const Home = () => {
    return (
        <div class="Home">
            <div class="banner">
                {/* Welcome to GYM Mangement System (GMS) */}
            </div>

            <div class="bg">

                <div class="LR">

                    <Login />
                    <Register /> 
                    {/* <ModalForget /> */}

                    {/* <Page1 /> */}

                    {/* <Page2 /> */}

                    {/* <Page3 /> */}

                    {/* <Page4 /> */}

                    {/* <Page5 /> */}

                    {/* <Page6 /> */}

                </div>


            </div>
        </div>
    )
}

export default Home