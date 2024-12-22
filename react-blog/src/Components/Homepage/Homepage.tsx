
import Login from "../Login.tsx"
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, setUserData } from '../../feature/UserSlice.tsx'
import FYPage from './FYPage.tsx';
import "./Homepage.css";
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    const navigate = useNavigate();
    const user = useSelector(selectUserData);
    const dispatch = useDispatch();
    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(setUserData(null));
    };

    const handleAddPost = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log(user.id);
        navigate(`/${user.user_Id}/post`);
    };
    return (
        <>
            <header className='userInfoBanner'>
                <h1 className='navbar_header'>Blog app</h1>
                <div className='user-section'>
                    <button className="logout_button" onClick={(e) => handleAddPost(e)}>
                        Add post
                    </button>
                    <div className='username'>{user.fullName}</div>
                    <button className="logout_button" onClick={(e) => handleLogout(e)}>
                        Logout
                    </button>
                </div>

            </header>
            <div className='home__page'>
                <div>{user ? <FYPage /> : <Login />}</div>
            </div>
        </>

    )
}

export default Homepage