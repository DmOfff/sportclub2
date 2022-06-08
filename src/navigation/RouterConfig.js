import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home";
import Profile from "../pages/profile";

export const RouterConfig = () => {
    return <Routes>

        <Route path={'/'} element={<Home />} />
        <Route path={'/profile'} element={<Profile />} />

    </Routes>
}

export default RouterConfig