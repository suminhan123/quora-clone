import { Avatar } from "@mui/material";
import React from "react";
import './QuoraBox.css';

export default function QuoraBox() {
    return(
        <div className="quoraBox">
            <div className="quoraBox_info">
                <Avatar />
                <h5>hansoom</h5>
            </div>
            <div className="quoraBox_quora">
                <p> 무엇이 궁금하신가요?</p>
            </div>
        </div>
    );
}