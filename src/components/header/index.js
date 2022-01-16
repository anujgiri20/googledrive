import React from 'react'
import '../../styles/Header.css'
import { useHistory } from "react-router-dom";
import GDriveLogo from '../../media/google-drive-logo.png'
import {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';

const Index = ({ userPhoto }) => {
    const history = useHistory()
    const [logo,setlogo] = useState(...localStorage.getItem("name"))  
    const [logout , setlogout] = useState(false)
    function logout_()
    {
    localStorage.removeItem("access-token","name")
    history.push("/")
    }
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={GDriveLogo} alt="Google Drive" />
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder='Search in Drive' />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
                <div style={{backgroundColor:"green",
            width:"30px",
            height:"30px",
            borderRadius:"32.5px",
            marginLeft:"5px",
            cursor:"pointer"
            }} src={userPhoto} onClick={()=>setlogout(!logout)} alt="User Photo"><h1 style={{color:"white",fontSize:"1.2rem",textAlign:"center"}}>{logo}</h1></div>
                {
                    logout ? <div
                    style={{
                        position:"absolute",
                        right:"5px",
                        top:"60px",
                        padding:"10px"
                    
                    }}
                    >
                        <button 
                        onClick={logout_}
                        className='btn'
                        style={{padding:"10px",
                    backgroundColor:"green"}}
                        >logout</button>
                    </div> : ""
                }
            </div>
        </div>
    )
}

export default Index