import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, setSingedIn, setUserData } from '../feature/UserSlice.tsx'
import "./Logout.css";
const Logout = () => {
    const user = useSelector(selectUserData);

    const dispatch = useDispatch();
    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(setSingedIn(false), setUserData(null));
    };
    return (
        <div className="logout">
            <h1>
                Welcome <span className="user_name">{user.fullName}</span>
            </h1>{""}
            <button className="logout_button" onClick={(e) => handleLogout(e)}>
                Logout
            </button>
        </div>
    );
};
export default Logout; 