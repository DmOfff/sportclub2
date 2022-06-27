import {Route, Routes} from 'react-router-dom';
import Home from "../pages/home";
import Profile from "../pages/profile";
import {isAuthenticated} from "../utils/auth";

export const RouterConfig = () => {

    return <Routes>

        <Route path={'/'} element={<Home />} />
        <Route path={'/profile'} element={<Profile />} />

        <Route path={'/*'} element={<Home />} />

    </Routes>
}

export default RouterConfig