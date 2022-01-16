import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
import SideIcons from './components/sideIcons'

import GDriveLogo from './media/google-drive-logo.png'

import { auth, provider } from "./firebase";
import { useState } from 'react';

function App() {
  // const [user, setUser] = useState()
  
// userPhoto={user.photoURL}
  return (
    <div className="app">
      
      
          <>
            <Header  />
            <div className="app__main">
              <Sidebar />
              <FilesView />
            
            </div>
          </>
      
    </div>
  );
}

export default App;