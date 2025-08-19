import './App.css';
import Sidebar from './Components/Sidebar/sidebar';
import Home from './Pages/Home/home';
import { Routes,Route,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Dashboard from './Pages/DashBoard/dashboard';
import Page1 from './Pages/DB pages/page1';
import Page2 from './Pages/DB pages/page2';
import Page3 from './Pages/DB pages/page3';
import Page4 from './Pages/DB pages/page4';
import Page5 from './Pages/DB pages/page5';
import Page6 from './Pages/DB pages/page6';

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
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
        <Route path='/page4' element={<Page4/>}/>
        <Route path='/page5' element={<Page5/>}/>
        <Route path='/page6' element={<Page6/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
