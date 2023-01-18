import React, { useEffect, useState } from "react";
import './Feed.css';
import Post from "./Post";
import QuoraBox from "./QuoraBox";

import db from './firebase';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function Feed(){
    const [posts, setPosts] = useState([]);
    useEffect(
        () =>{
            const colref = collection(db, "questions");
            const q = query(colref, orderBy('timestamp', 'desc'));
            onSnapshot(q, (snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({
                question: doc.data(), 
                id:doc.id}))))}
            , []);
    return(
        <div className="feed">
            <QuoraBox />
            {posts.map(({id, question}) => (
                <Post key={id} Id = {id} image={question.imageUrl}
                question={question.question} 
                timestamp={question.timestamp}
                quoraEmail={question.userEmail}
                quoraId={question.userId}
                quoraName={question.userName} />
            ))}
        </div>
    );
}