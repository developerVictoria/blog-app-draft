/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { selectUserData } from '../../feature/UserSlice'
import { useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "../Login.css"

function newComment() {
    const [text, setText] = useState("test comment");

    const user = useSelector(selectUserData);
    const api_url = "http://localhost:3000/comment/";
    const navigate = useNavigate();
    const params = useParams();

    const HandleCreateComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(api_url, {
            text: text,
            post: parseInt(params.id),
            author: parseInt(user.id),
        }).then(data => {
            console.log(data);
            console.log('i did the post of the comment')
        })
            .catch((err) => {
                console.log(err);
            })

        navigate('/');

    };



    return (
        <>
            <div className='new__post'>
                <form className="post_form" onSubmit={(e) => HandleCreateComment(e)}>
                    <h1>Add New Comment 📝</h1>
                    <p>Author</p>
                    <input
                        type="author"
                        placeholder="Author"
                        value={user.fullName}
                    />
                    <p>Comment:</p>
                    <textarea
                        name="text"
                        placeholder="Comment"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <button type="submit" className="submit_btn">
                        Post
                    </button>
                </form>
            </div>
        </>

    )
}

export default newComment