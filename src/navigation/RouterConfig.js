import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from "../pages/home";
import Profile from "../pages/profile";
import {isAuthenticated} from "../utils/auth";

export const RouterConfig = () => {

    const navigate = useNavigate()

    return <Routes>

        <Route path={'/'} element={<Home />} />
        {
            isAuthenticated() ? <Route path={'/profile'} element={<Profile />} /> : <></>
        }

        <Route path={'/*'} element={<Home />} />

    </Routes>
}

export default RouterConfig