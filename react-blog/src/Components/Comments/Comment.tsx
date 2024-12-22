/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { REACT_APP_API_URL } from '../../environment';

function Comment(commentInfo?: any) {
    const navigate = useNavigate();
    const [author, setAuthor] = useState("");
    const showFullPage = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate(`/post/${commentInfo.content.post}`);
    }
    useEffect(() => {

        axios.get(`${REACT_APP_API_URL}users/name/${commentInfo.content.author}`).then(data => {
            console.log(data.data);
            setAuthor(data.data);

        }).catch((err) => {
            console.log(err);
        });
    }, [])

    { console.log(commentInfo) }
    return (
        <div className='comment' onClick={(e) => showFullPage(e)}>
            <p>{author}   :   {commentInfo.content.text}</p>
        </div>

    )
}

export default Comment