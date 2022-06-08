import { Label, Modal} from "flowbite-react";
import { Button } from "flowbite-react/lib/esm/components/Button";
import {useState} from "react";

const RegistrationModal = (props) => {

    const {show=false, close, open} = props

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    })

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
            <form className="space-y-2 px-6 pb-4 flex flex-col items-center">
                <h3 className="text-xl font-medium text-gray-900">
                    Регистрация
                </h3>
                <div>
                    <Label
                        className="mb-2 block"
                        htmlFor="name2"
                    >
                        Как Вас зовут?<span className={'text-red-600'}> *</span>
                    </Label>
                    <input
                        id="name2"
                        type={'tel'}
                        placeholder="Иванов Иван"
                        required={true}
                        className={'rounded'}
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                </div>
                <div>
                    <Label
                        className="mb-2 block"
                        htmlFor="phone2"
                    >
                        Номер телефона<span className={'text-red-600'}> *</span>
                    </Label>
                    <input
                        id="phone2"
                        type={'tel'}
                        placeholder="+70000000000"
                        maxLength={12}
                        required={true}
                        className={'rounded'}
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                </div>
                <div>
                    <Label
                        className="mb-2 block"
                        htmlFor="email2"
                    >
                        E-Mail
                    </Label>
                    <input
                        id="email2"
                        type="email"
                        required={false}
                        className={'rounded'}
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                </div>
                <div>
                    <Label
                        className="mb-2 block"
                        htmlFor="password2"
                    >
                        Пароль<span className={'text-red-600'}> *</span>
                    </Label>
                    <input
                        id="password2"
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
                        Зарегистрироваться
                    </Button>
                    <Button onClick={close} color={"red"}>
                        Отмена
                    </Button>
                </div>
                <div className="text-sm font-medium text-gray-500">
                    Уже есть аккаунт?{' '}
                    <a
                        onClick={e => {
                            close()
                            open()
                        }}
                        type={'button'}
                        className="text-blue-700 hover:underline cursor-pointer"
                    >
                        Войти
                    </a>
                </div>
            </form>
        </Modal.Body>
    </Modal>

}

export default RegistrationModal