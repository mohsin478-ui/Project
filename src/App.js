import './App.css';
import Sidebar from './Components/Sidebar/sidebar';
import Home from './Pages/Home/home';
import { Routes,Route,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Dashboard from './Pages/DashBoard/dashboard';

function App() {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    let isLoginIn = sessionStorage.getItem("isLogin");
    if(isLogin){
      setIsLogin(true);
      navigate('/dashboard')
    }
  },[sessionStorage.getItem("isLogin")])

  
  return (
    <div className="flex">
      {
        (isLogin && <Sidebar />)
      }
      

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
      
    </div>
  );
}

export default App;
