import React from "react";
import "./Navbar.css";
import HomeIcon from '@mui/icons-material/Home';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button } from "@mui/material";
import { Language } from "@mui/icons-material";

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="qHeader_logo">
                <img src="https://cdn.pixabay.com/photo/2021/09/11/12/17/quora-6615448__340.png"
                alt="" />
            </div>

            <div className="qHeader_icons">
                <div className="qHeader_icon">
                    <HomeIcon />
                </div>

                <div className="qHeader_icon">
                    <BorderAllIcon />
                </div>

                <div className="qHeader_icon">
                    <AssignmentIndIcon />
                </div>

                <div className="qHeader_icon">
                    <PeopleIcon />
                </div>

                <div className="qHeader_icon">
                    <NotificationsIcon />
                </div>
            </div>

            <div className="qHeader_input">
                <input type="text" placeholder="Search" />
                <SearchIcon />
            </div>

            <div className="qHeader_Rem">
                <div className="qHeader_avatar">
                    <Avatar />
                </div>
                <Language />
                <Button> 질문하기 </Button>
            </div>
        </div>
    );
}