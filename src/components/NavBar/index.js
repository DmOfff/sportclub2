import './navbar.css'
import {Navbar, Button} from "flowbite-react";
import logo from '../../assets/img/logo.png'
import JoinModal from "../Modals/JoinModal";
import {useState} from "react";
import RegistrationModal from "../Modals/RegistrationModal";

const NavBar = () => {

    const [getVisibilityJoinModal, setVisibilityJoinModal] = useState(false)

    const closeJoinModal = () => {
        setVisibilityJoinModal(false)
    }
    const openJoinModal = () => {
        setVisibilityJoinModal(true)
    }

    const [getVisibilityRegModal, setVisibilityRegModal] = useState(false)
    const closeRegModal = () => {
        setVisibilityRegModal(false)
    }
    const openRegModal = () => {
        setVisibilityRegModal(true)
    }


    return<>
        <Navbar
            fluid={true} rounded={true}
            className={'bg-gray-100 shadow-xl fixed w-full z-30'}
        >
            <Navbar.Brand href={'/'}>
                <img className={'mr-3 h-9 sm:h-9 rounded'} src={logo} alt="Логотип OLYMPIC"/>
                <span className={'self-center whitespace-nowrap text-3xl text-green-500 font-semibolds font-sport'}>
                OLYMPIC
            </span>
            </Navbar.Brand>

            <div className="flex flex-col items-center sm:flex-row md:order-2 w-full sm:w-auto">
                <div className={'flex flex-col mr-3 mb-2 sm:mb-0 text-gray-500 text-sm'}>
                    <span>Телефон: <a href={'tel:+74991670318'} className={'text-blue-500'}>+7(499)167-03-18</a></span>
                    <span>E-mail: <a href={'maildto:olympic@sport.ru'} className={'text-blue-500'}>olympic@sport.ru</a></span>
                </div>
                <Button
                    outline={true}
                    gradientDuoTone="greenToBlue"
                    onClick={e => openJoinModal()}
                >
                    Войти
                </Button>
            </div>
        </Navbar>
        <JoinModal show={getVisibilityJoinModal} open={openRegModal} close={closeJoinModal} />
        <RegistrationModal show={getVisibilityRegModal} open={openJoinModal} close={closeRegModal} />
    </>
}

export default NavBar