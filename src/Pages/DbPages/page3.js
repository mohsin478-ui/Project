import React from "react";
import { Link } from 'react-router-dom';
// import './page3.css'

const Page3 = () => {
    return (
        <div>
            <Link to='/dashboard' class="DbBanner">
                <button class="DbBannerButton">⬅️ Back To DashBoard</button>
            </Link>

            <span>2 Expiring 3 Days Member</span>

            <div class="DbDisplay">
                <div class="DbCards">
                    <div class="DbCardsDP"></div>
                    Ajeet Singh
                    <br></br>
                    Next Bill Date : <br></br>
                    [23-08-2025]
                </div>
                <div class="DbCards">
                    <div class="DbCardsDP"></div>
                    Harshit Kumar
                    <br></br>
                    Next Bill Date : <br></br>
                    [23-08-2025]
                </div>
            </div>


        </div>
    )
}

export default Page3
