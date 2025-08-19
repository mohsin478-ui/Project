import React from "react";
import { Link } from 'react-router-dom';
// import './page6.css'

const Page6 = () => {
    return (
        <div>
            <Link to='/dashboard' class="DbBanner">
                <button class="DbBannerButton">⬅️ Back To DashBoard</button>
            </Link>

            <span>1 Inactive Members</span>

            <div class="DbDisplay">
                <div class="DbCards">
                    <div class="DbCardsDP"></div>
                    User
                    <br></br>
                    Next Bill Date : <br></br>
                    [01-08-2025]
                </div>
            </div>


        </div>
    )
}

export default Page6
