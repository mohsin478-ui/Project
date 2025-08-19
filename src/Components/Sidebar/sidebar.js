import React,{useState,uesEffect, useEffect} from 'react'
import './sidebar.css'

const Sidebar = () => {

    const[greeting, setGreeting] = useState("");

    const greetingMessage = ()=>{
        const currentHour = new Date().getHours();
        if(currentHour<12){
            setGreeting("Good Morning");
        } else if (currentHour<18){
            setGreeting("Good Afternoon");
        }else if (currentHour<21){
            setGreeting("Good Evening");
        }else {
            setGreeting("Good Night");
        }
    }

    useEffect(()=>{
        greetingMessage()
    },[])

  return (
    <div class="side">
        <div class="s1">
            Power Zone
        </div>
        <div class="flex-container">
            <div class="img">
                <img class="img" src="https://img.freepik.com/free-photo/tool-screwdriver-black-pointy-equipment_1303-450.jpg?semt=ais_hybrid&w=740"></img>
            </div>
            <div>
                <div class="gm">{greeting}</div>
                <div class="ad">Admin</div>
            </div>
        </div>
        <div class="cnt">
            <div class="flex-container c1 button">
                <div><img width="26" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Home_icon_grey.png"></img></div>
                <div>Dashboard</div>
            </div>
            <div class="flex-container c1 button">
                <div><img width="26" src="https://static.vecteezy.com/system/resources/thumbnails/035/861/149/small/simple-people-icon-in-black-and-grey-colors-png.png"></img></div>
                <div>Members</div>
            </div>
            <div class="flex-container c1 button">
                <div><img width="26" src="https://cdn-icons-png.flaticon.com/512/8212/8212701.png"></img></div>
                <div>Logout</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar