import logo from './logo.svg';
import './App.css';
import { useContext, useEffect } from 'react';
import { AssestContext } from './context/assestcontext';
import Sidebar from './component/sidebar';
import Mainscreen from './component/main';
import Footer from './component/footer';
import { Apicontext } from './context/apicontext';

function App() {
  
  return (
    <div className="App min-h-[100vh] flex  ">
       <Sidebar/>
      <div className='flex flex-col w-full'>
       <Mainscreen/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
