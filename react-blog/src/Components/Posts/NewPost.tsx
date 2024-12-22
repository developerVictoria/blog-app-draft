
import React, { useState } from "react";
import { selectUserData } from '../../feature/UserSlice';
import { useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import '../Login.css'
import { REACT_APP_API_URL } from '../../environment';
function NewPost() {
    const param = useParams();
    const [title, setTitle] = useState("test title");
    const [content, setContent] = useState("some text");
    const user = useSelector(selectUserData);
    const api_url = `${REACT_APP_API_URL}post/`;
    const navigate = useNavigate();
    const handleRedirect = () => {

        navigate('/');
    }

    const handleCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(typeof (param.author))
        e.preventDefault();
        axios.post(api_url, {
            author: user.id,
            title: title,
            content: content,
        })
            .then(data => {
                console.log(data);


            })
            .catch((err) => {
                console.log(err);
            })

        handleRedirect();
    };



    return (
        <>
            <div className='new__post'>
                <form className="post_form" onSubmit={(e) => handleCreatePost(e)}>
                    <h1>New Post 📝</h1>
                    <p>Author:</p>
                    <input
                        className='new-item'
                        type="author"
                        placeholder="Author"
                        value={user.fullName}
                    />
                    <p>Title:</p>
                    <input
                        className='new-item'
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <p>Post:</p>
                    <textarea

                        name="content"
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <button type="submit" className="submit_btn">
                        Post
                    </button>
                </form>
            </div>
        </>

    )
}

export default NewPost