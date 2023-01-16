import React from "react";
import "./Navbar.css";
import HomeIcon from '@mui/icons-material/Home';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button} from "@mui/material";
import { Language, SportsRugbySharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { useState } from "react";
import Modal from "react-modal";

export default function Navbar(){
    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false);
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
                    <Avatar src={user.photo} onClick={() => auth.signOut()}/>
                </div>
                <Language />
                <Button onClick={() => setOpenModal(true)}> 질문하기 </Button>
                <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)}
                shouldCloseOnOverlayClick={false}
                style={{
                    overlay: {
                        width:700,
                        height:600,
                        backgroundColor : 'rgba(0,0,0,0.8)',
                        zIndex : "1000",
                        top : "50%",
                        left: "50%",
                        marginTop: "-300px",
                        marginLeft: "-350px",
                    }
                }}>
                    <div className="modal_title">
                        <h5> 질문 </h5>
                        <h5> 공유하기 </h5>
                    </div>
                    <div className="modal_info">
                        <p> 본문 </p>
                    </div>
                    <button onClick={() => setOpenModal(false)}>닫기</button>
                </Modal>
            </div>
        </div>
    );
}