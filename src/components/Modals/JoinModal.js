import { Label, Modal} from "flowbite-react";
import { Button } from "flowbite-react/lib/esm/components/Button";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import {setUser} from "../../utils/auth";

const JoinModal = (props) => {

    const {show=false, close, open} = props

    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    })

    const login = (e) => {
        e.preventDefault()

        fetch('http://localhost:9999/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(
                result => {
                    if (result?.err)
                        return toast.error(result?.msg, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    toast.success('Успешный вход', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setUser(result)
                    return close()
                },
                error => {

                })

    }

    return <Modal
        show={show}
        size={'md'}
        popup={true}
        onClose={e => {
            close()
        }}

    >
        <Modal.Header />
        <Modal.Body className={''}>
            <form onSubmit={login} className="space-y-2 px-6 pb-4 flex flex-col items-center">
                <h3 className="text-xl font-medium text-gray-900">
                    Вход в аккаунт
                </h3>
                <div>
                    <Label
                        className="mb-2 block"
                        htmlFor="phone"
                    >
                        Номер телефона<span className={'text-red-600'}> *</span>
                    </Label>
                    <input
                        id="phone"
                        type={'tel'}
                        placeholder="+70000000000"
                        required={true}
                        className={'rounded'}
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                </div>
                <div>
                    <Label
                        className="mb-2 block"
                        htmlFor="password"
                    >
                        Пароль<span className={'text-red-600'}> *</span>
                    </Label>
                    <input
                        id="password"
                        type="password"
                        required={true}
                        className={'rounded'}
                        value={formData.password}
                        onChange={e => setFormData({...formData, password: e.target.value})}
                    />
                </div>
                <span className={'text-gray-500 text-sm'}><span className={'text-red-600'}>*</span> - обязательные поля для ввода</span>
                <div className="w-full flex flex-row justify-center space-x-3">
                    <Button type={'submit'}>
                        Войти в аккаунт
                    </Button>
                    <Button onClick={close} color={"red"}>
                        Отмена
                    </Button>
                </div>
                <div className="text-sm font-medium text-gray-500">
                    Не зарегистрированы?{' '}
                    <a
                        onClick={e => {
                        close()
                        open()
                        }}
                        type={'button'}
                        className="text-blue-700 hover:underline cursor-pointer"
                    >
                        Создать аккаунт
                    </a>
                </div>
            </form>
        </Modal.Body>
    </Modal>

}

export default JoinModal