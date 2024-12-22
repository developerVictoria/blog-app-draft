/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import '../Login.css'
function Post(postInfo?: any) {
    const navigate = useNavigate();
    const showFullPage = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate(`/post/${postInfo.post.id}`);
    }


    return (
        <div className='post-wrapper'>
            <div className={`post-${postInfo.post.id} post post-div`} onClick={(e) => showFullPage(e)}>

                <h2>{postInfo.post.title.substring(0, 75)}</h2>
                <p>{postInfo.post.content.substring(0, 100)}</p>

            </div>
        </div>
    )
}

export default Post