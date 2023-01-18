import React from "react";
import "./Navbar.css";
import HomeIcon from '@mui/icons-material/Home';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button, Input} from "@mui/material";
import { ExpandMore, Language, Link, PeopleAltOutlined} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { useState } from "react";
import Modal from "react-modal";


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {addDoc , collection } from "firebase/firestore";
import db from './firebase';

function Navbar() {

    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");

    const handleQuestion = async() => {
        setOpenModal(false);
        const collectionRef = collection(db, "questions");
        const payload = {
            question: input,
            imageUrl: inputUrl,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            userName : user.displayName,
            userEmail : user.email,
            userId : user.uid
        }
        await addDoc(collectionRef, payload);
        setInput("");
        setInputUrl("");
    };

    return (
        <div className="navbar">

            <div className="qHeader_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/2880px-Quora_logo_2015.svg.png"
                    alt=""/>

            </div>

            <div className="qHeader_icons">

                <div className="qHeader_icon">
                    <HomeIcon/>
                </div>
                <div className="qHeader_icon">
                    <BorderAllIcon/>
                </div>

                <div className="qHeader_icon">
                    <AssignmentIndIcon/>
                </div>

                <div className="qHeader_icon">
                    <PeopleIcon/>
                </div>
                <div className="qHeader_icon">
                    <NotificationsIcon/>

                </div>

            </div>


            <div className="qHeader_input">
                <input type="text" placeholder="검색하기"/>
                <SearchIcon/>

            </div>

            <div className="qHeader_Rem">
                <div className="qHeader_avatar">
                    <Avatar src={user.photo} onClick={() => auth.signOut()}/>
                </div>
                <Language/>
                <Button onClick={() => setOpenModal(true)}> 질문하기 </Button>

                <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)}
                    shouldCloseOnOverlayClick={false}
                    style={{
                        overlay: {
                            width: 700,
                            height: 600,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            zIndex: "1000",
                            top: "50%",
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
                        <Avatar src={user.photo}/>
                        <p> 질문자 : {user.displayName ? user.displayName : user.email}</p>

                        <div className="modal_scope">
                            <PeopleAltOutlined/>
                            <p> 전체공개 </p>
                            <ExpandMore/>
                        </div>

                    </div>

                    <div className="modal_Field">
                        <Input type="text" placeholder="6하 원칙으로 질문을 작성하세요" required value={input} onChange={(e) => setInput(e.target.value)}/>

                        <div className="modal_fieldLink">
                            <Link/>
                            <Input type="text" placeholder="url 링크만을 작성해 주세요" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)}/>

                        </div>


                    </div>

                    <div className="modal_buttons">
                        <button type="text" className="add" onClick={handleQuestion}> 질문하기</button>

                        <button onClick={() => setOpenModal(false)}  className="can" >닫기</button>
                    </div>

                </Modal>


            </div>


        </div>
    );
}

export default Navbar;