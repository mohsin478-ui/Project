import React from "react";
import './page1.css'

const Page1 = () => {
    return (
        <div>
            <div class="DbBanner">
                <button class="DbBannerButton">Add Member ❚█══█❚ </button>
                <button class="DbBannerButton">Membership ✚</button>
            </div>
            <button class="DbButton">⬅️ Back to DashBoard</button>
            <br></br>
            
            <input id="DbIn" type="text" placeholder="Search By Name or Mobile Number"></input>
            <button class="DbButton">🔍 Search</button>
            <br></br>

            <span>Total Members</span>

            <div class="DbDisplay">
                <div class="DbCards">
                    <div class="DbCardsDP">
                    </div>
                    Nikhil  Barua
                    <br></br>
                    Next Bill Date : <br></br>
                    [31-08-2025]
                </div>
                <div class="DbCards">
                    <div class="DbCardsDP"></div>
                    Mohsin Mahfooz
                     <br></br>
                    Next Bill Date : <br></br>
                    [31-08-2025]
                </div>
                <div class="DbCards">
                    <div class="DbCardsDP"></div>
                    Mohd. Taha
                     <br></br>
                    Next Bill Date : <br></br>
                    [31-08-2025]
                </div>
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
                <div class="DbCards">
                    <div class="DbCardsDP"></div>
                    Swaroop Malik
                     <br></br>
                    Next Bill Date : <br></br>
                    [31-08-2025]
                </div>
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

export default Page1