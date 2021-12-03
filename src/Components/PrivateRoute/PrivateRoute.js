import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router";
import { selectAuth } from "../../Store/Profile/selectors";

export const PrivateRoute = ({ children }) => {
    const authed = useSelector(selectAuth);

    return authed ? children : <Navigate to="/" replace />;
};