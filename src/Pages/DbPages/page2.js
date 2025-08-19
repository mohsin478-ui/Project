import React from 'react';
import { Link } from 'react-router-dom';
// import './page2.css'

const Page2 = () => {
    return (
        <div>
            <Link to='/dashboard' class="DbBanner">
                <button class="DbBannerButton">⬅️ Back To DashBoard</button>
            </Link>

            <span>1 Monthly Joined Member</span>

             <div class="DbDisplay">
                <div class="DbCards">
                    <div class="DbCardsDP">
                    </div>
                    Nikhil  Barua
                    <br></br>
                    Next Bill Date : <br></br>
                    [31-08-2025]
                </div>
            </div>

        </div>
    )
}

export default Page2
