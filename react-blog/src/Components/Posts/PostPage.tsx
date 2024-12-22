/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

import { selectUserData } from '../../feature/UserSlice';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from '../Comments/Comment.tsx'


function PostPage() {
    const navigate = useNavigate();
    const params = useParams();
    const [postInfo, setPostInfo] = useState({ title: "Wait a little bit", author: "1", content: "post is loading", id: 2, comments: [] });
    const [author, SetAuthor] = useState('author');
    const [comments, SetComments] = useState([]);
    const user = useSelector(selectUserData);
    const api_url = `http://localhost:3000/`;
    const getAuthorName = (id: number | string) => {
        console.log("Id in get author name", id);

        axios.get(`${api_url}users/name/${id}`).then(data => {
            console.log(data.data);
            SetAuthor(data.data);

        }).catch((err) => {
            console.log(err);
        });

    }
    const getAllComments = () => {
        const req_url = `http://localhost:3000/post/${params.id}/comments`;
        axios.get(req_url).then(data => {
            console.log(data.data);
            SetComments(data.data);

        }).catch((err) => {
            console.log(err);
        });
    }
    useEffect(() => {
        axios.get(`${api_url}post/${params.id}`)
            .then(data => {
                setPostInfo(data.data);
                getAuthorName(data.data.author);
                getAllComments();
                console.log(data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const handleEditPost = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log(user.id);
        navigate(`/edit/post/${params.id}`);
    };
    const handleAddComment = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log(user.id);
        navigate(`/comment/${params.id}`);
    };

    return (
        <>
            <button type="submit" className="submit_btn" onClick={(e) => handleAddComment(e)}>
                add a comment
            </button>

            {author == user.fullName ? <button type="submit" className="submit_btn" onClick={(e) => handleEditPost(e)}>
                edit post
            </button> : ""}

            <div className={`post-${params.id} post-full`}>
                <h1>{postInfo.title}</h1>
                <h4>{author}</h4>
                <p>{postInfo.content}</p>
            </div>
            <div className='comment-section'>
                <h4>Comments:</h4>
                <div className='comments'>
                    {(comments.length == 0) ? "No comment added yet, be first!" : comments.map((comment: object | any, index: number | any) => (<Comment key={index} index={index} content={comment} />))}
                </div>

            </div>

        </>

    )
}

export default PostPage