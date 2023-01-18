import React, { useEffect, useState } from "react";
import './Post.css';
import { Avatar } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { selectQuestionId, selectQuestionName, setQuestionInfo } from "./features/questionSlice";
import { selectUser } from "./features/userSlice";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {addDoc , collection, doc, query, orderBy, onSnapshot} from "firebase/firestore";
import db from './firebase';

export default function Post({key, Id, image, question, timestamp, quoraEmail, quoraId, quoraName}){
    const [openModal, setOpenModal] = useState(false);
    const [answer, setAnswer] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const questionId = useSelector(selectQuestionId);
    const questionName = useSelector(selectQuestionName);
    const [getAnswer, setGetAnswer] = useState([]);

    const handleAnswer = async() => {
        if(questionId){
            const ref = doc(collection(db, 'questions'));
            const colref = collection(ref, 'answer');
            const payload = {
                questionId: questionId,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                answer:answer,
                userName : user.displayName,
                userEmail : user.email,
                userId : user.uid
            }
            console.log(payload);
            await addDoc(colref, payload);
            }
            console.log(questionId, questionName);
            setAnswer("");
            setOpenModal(false);
        }

        useEffect(() => {
            if(questionId){
                const ref = doc(collection(db, "questions"));
                const colref = collection(ref, 'answer');
                const q = query(colref, orderBy('timestamp', 'desc'));
                onSnapshot(q, (snapshot) =>
                setGetAnswer(snapshot.docs.map((doc) => ({
                answers: doc.data(), 
                id:doc.id}))))
            }
        }, [questionId])
    return(
        <div className="post"  
        onClick={() => 
        dispatch(setQuestionInfo({
            questionId:Id, 
            questionName:question,}))}>
            <div className="post_info">
                <Avatar />
                <h5>{quoraName ? quoraName : quoraEmail}</h5>
                <small>{new Date(timestamp ?.toDate()).toLocaleString()}</small>
            </div>

            <div className="post_body">
                <div className="post_question">
                    <p> {question} </p>
                    <button className="post_btnAnswer" onClick={() => setOpenModal(true)}>답변하기</button>

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
                    <div className="modal_question">
                        <h1> {question} </h1>
                        <p> 
                            <span className="name">{quoraName ? quoraName : quoraEmail}</span>
                            로부터의 질문 
                            <span className="time">{new Date(timestamp ?.toDate()).toLocaleString()}</span>
                            에 작성됨 
                        </p>
                    </div>

                    <div className="modal_answer">
                        <textarea placeholder="답변을 작성해주세요" type="text" value={answer}
                        onChange={(e) => setAnswer(e.target.value)}/>
                    </div>
                    
                    <div className="modal_buttons">
                        <button type="submit" className="add" onClick={handleAnswer}> 답변작성 </button>
                        <button onClick={() => setOpenModal(false)}  className="can" >닫기</button>
                    </div>

                </Modal>


                </div>

                <div className="post_answer">
                    {
                        getAnswer.map(({id, answers}) => (
                            <p key={id} style={{position:"relative", paddingBottom:"5px"}}>
                                {id === answers.questionId ? (
                                    <span>{answers.answer}
                                    <br />
                                    <span style={{
                                        position: "absolute",
                                        color: "yellowgreen",
                                        fontSize: "small",
                                        display: "flex",
                                        right: "0px"
                                    }}>
                                    <span style={{color:"#b92b27"}}>
                                        {answers.userName ? answers.userName : answers.userEmail}
                                    </span>
                                    {"  "} {new Date(answers.timestamp ?.toDate()).toLocaleString()} 에 작성됨
                                    </span>
                                    </span>
                                ) : ""} 
                            </p>
                        ))
                    }
                </div>
                <img src={image}
                alt="" />
            </div>

            <div className="post_footer">
                <div className="post_footerAction">
                    <ArrowUpwardIcon />
                    <ArrowDownwardIcon />
                </div>
                <RepeatOneIcon />
                <ChatBubbleOutlineIcon />
                <div className="post_footerRight">
                    <ShareIcon />
                    <MoreHorizIcon />
                </div>
            </div>
        </div>
    );
}