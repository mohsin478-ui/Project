import React from "react";
import { Link } from 'react-router-dom';
// import './page4.css'

const Page4 = () => {
    return (
        <div>
            <Link to='/dashboard' class="DbBanner">
                <button class="DbBannerButton">⬅️ Back To DashBoard</button>
            </Link>

            <span>2 Expiring 4-7 Days Member</span>

            <div class="DbDisplay">
                <div class="DbCards">
                    <div class="DbCardsDP"></div>
                    Param Goel
                    <br></br>
                    Next Bill Date : <br></br>
                    [28-08-2025]
                </div>
                <div class="DbCards">
                    <div class="DbCardsDP"></div>
                    Dhananjay Sharma
                    <br></br>
                    Next Bill Date : <br></br>
                    [28-08-2025]
                </div>
            </div>


        </div>
    )
}

export default Page4
