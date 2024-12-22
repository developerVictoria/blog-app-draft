/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectBlogData, setBlogData } from '../../feature/UserSlice.tsx'
import Post from '../Posts/Post.tsx'
import axios from 'axios'
//on post click we make next requests:
//get the author by id, and comments
//on response we form a postInfo blok
//immidiatly we make request to gett all posts

function FYPage() {
    const posts = useSelector(selectBlogData);
    const api_url = 'http://127.0.0.1:3000/post/'
    const dispatch = useDispatch();
    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        axios.get(api_url)
            .then(data => {
                dispatch(setBlogData(data.data));
                console.log(data);
                SetLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <div className='blog__page'>
            <h1 className='blog__page__header'>Blogs and Posts</h1>
            {loading ? <div>Hold on a sec, we get all the good stuff!</div> :
                (posts == null) ? <div>No post there yet. Be first to add your post!</div> :
                    posts.map((post: object | any, index: number | any) => (<Post key={index} index={index} post={post} />))
            }

        </div>
    )
}

export default FYPage

