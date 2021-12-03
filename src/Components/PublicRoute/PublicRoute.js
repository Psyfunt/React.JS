import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectAuth } from "../../Store/Profile/selectors";

export const PublicRoute = ({ children }) => {
    const authed = useSelector(selectAuth);

    return !authed ? children : <Navigate to="/dialogs" replace />;
};

export const PublicOutlet = () => {
    const authed = useSelector(selectAuth);

    return !authed ? <Outlet /> : <Navigate to="/dialogs" replace />;
};