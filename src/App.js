import logo from './logo.svg';
import './App.css';
import {Routes,Route,useNavigate} from 'react-router-dom';
import Home from './Pages/Home/home'
import Dashboard from './Pages/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/sidebar';
import {useState,useEffect} from 'react';
import Member from './Pages/Member/member';


function App() {
  
  const navigate = useNavigate()
  const[isLogin, setIsLogin]=useState(false)
  
  useEffect(()=>{
    let isLogedIn = sessionStorage.getItem("isLogin");
    if(isLogedIn){
      setIsLogin(true);
      navigate('/dashboard')
    }
    // else{
    //   navigate('/');
    // }
  },[sessionStorage.getItem('isLogin')])

  return (
    <div class="flex-container">
      {
        isLogin && <Sidebar />
      }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/member' element={<Member/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
