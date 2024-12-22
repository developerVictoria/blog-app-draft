
import React, { useEffect, useState } from "react";
import { selectUserData } from '../../feature/UserSlice'
import { useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const user = useSelector(selectUserData);
    const api_url = "http://localhost:3000/post/";
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        axios.get(`${api_url}${params.id}`)
            .then(data => {
                setTitle(data.data.title);
                setContent(data.data.content);
                console.log(data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const handleCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.patch(`${api_url}${params.id}`, {
            title: title,
            content: content,
            user_id: user.user_Id,
        })
            .then(data => {
                console.log(data);

            })
            .catch((err) => {
                console.log(err);
            })

        navigate('/');
    };



    return (
        <>
            <div className='new__post'>
                <form className="post_form" onSubmit={(e) => handleCreatePost(e)}>
                    <h1>Edit Post 📝</h1>
                    <input
                        type="author"
                        placeholder="Author"
                        value={user.fullName}
                        readOnly
                    />
                    <input
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
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

export default EditPost