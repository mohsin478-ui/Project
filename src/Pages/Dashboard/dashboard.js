import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div class="ban">
      <div class="b1 flex-container">
      <img width="27" src="https://www.pngmart.com/files/23/Menu-Icon-PNG.png"></img>
      <img class="imag" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeWzFKkplQgwhz4BYlUdHwTS3-HqlacPiTQ&s"></img>
      </div>

      <div class="b2 g2">

        <Link to='/member' class="g">
          <div class="g1 bt">
          <img width="49" src="https://dhskcommercecollege.edu.in/online/icon/employee.png"></img>
          <p>Joined Members</p>
          </div>
        </Link>

        <Link to='/page2' class="g">
          <div class="g1 bt">
          <img width="49" src="https://cdn-icons-png.flaticon.com/512/12180/12180807.png"></img>
          <p>Monthly Joined</p>
          </div>
        </Link>

        <Link to='/page3' class="g">
          <div class="g1 bt">
          <img width="49" src="https://cdn-icons-png.flaticon.com/512/417/417198.png"></img>
          <p>Expiring Within 3 Days</p>
          </div>
        </Link>

        <Link to='/page4' class="g">
          <div class="g1 bt">
          <img width="49" src="https://cdn-icons-png.flaticon.com/512/417/417198.png"></img>
          <p>Expiring Within 4-7 Days</p>
          </div>
        </Link>

        <Link to='/page5' class="g">
          <div class="g1 bt">
          <img width="49" src="https://cdn-icons-png.flaticon.com/512/3588/3588294.png"></img>
          <p>Expired</p>
          </div>
        </Link>

        <Link to='/page6' class="g">
          <div class="g1 bt">
          <img width="49" src="https://cdn-icons-png.flaticon.com/512/3588/3588294.png"></img>
          <p>InActive Members</p>
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Dashboard
