import {isAuthenticated, logout} from "../../utils/auth";
import {Button} from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const navigate = useNavigate()

    const {openJoinModal} = props

    return <>
        {!isAuthenticated() ? (
            <Button
                outline={true}
                gradientDuoTone="greenToBlue"
                onClick={e => openJoinModal()}
            >
                Войти
            </Button>
        ) : (
            <div className={'flex flex-row space-x-2'}>
                <Button
                    outline={true}
                    gradientDuoTone="greenToBlue"
                    onClick={e => navigate('/profile')}
                >
                    Профиль
                </Button>
                <Button
                    outline={true}
                    gradientDuoTone="greenToBlue"
                    onClick={e => logout()}
                >
                    Выйти
                </Button>
            </div>
        )}
    </>

}

export default Login