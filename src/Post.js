import React from "react";
import './Post.css';
import { Avatar } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Post(){
    return(
        <div className="post">
            <div className="post_info">
                <Avatar />
                <h5>유저 아이디</h5>
                <small>작성 시간</small>
            </div>

            <div className="post_body">
                <div className="post_question">
                    <p> 질문내용 입니다 </p>
                    <button className="post_btnAnswer">답변하기</button>
                </div>

                <div className="post_answer">
                    <p> 답변내용 입니다 </p>
                </div>
                <img src="https://cdn.pixabay.com/photo/2017/09/27/10/38/stadium-2791693__340.jpg"
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