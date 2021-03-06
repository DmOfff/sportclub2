import './index.css'
import ServiceCard from "../../components/Cards/ServiceCard";
import ContactCard from "../../components/Cards/ContactCard";
import {Label} from "flowbite-react";
import {Button} from "flowbite-react/lib/esm/components/Button";
import Footer from "../../components/Footer";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import BuyModal from "../../components/Modals/BuyModal";
import {isAuthenticated} from "../../utils/auth";
import {SERVICE_TYPES} from "../../utils/types";

const Home = () => {

    const [getContactRequestData, setContactRequestData] = useState({
        name: '',
        phone: '',
        email: '',
        comment: ''
    })

    const [buyData, setBuyData] = useState({
        name: '',
        count: '',
        price: 0,
        type: SERVICE_TYPES.abonement
    })

    const [showBuyFormModal, setShowBuyFormModal] = useState(false)


    useEffect(()=> {
        document.title = 'OLYMPIC - фитнесс клуб'
    }, [])

    const sendContactRequest = (e) => {
        e.preventDefault()

        fetch('http://localhost:9999/users/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(getContactRequestData)
        })
            .then(res => res.json())
            .then(
                result => {
                    toggleSuccessContactRequestModalShow()
            },
                error => {
                    toggleErrorContactRequestModalShow()
                })
    }

    const toggleSuccessContactRequestModalShow = () => {
        toast.success('Запрос отправлен!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setContactRequestData({
            name: '',
            phone: '',
            email: '',
            comment: ''
        })
    }

    const toggleErrorContactRequestModalShow = () => {
        toast.error('К сожалению произошла ошибка. Попробуйте позже.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const openBuyModal = (name, count, price, type) => {

        if (isAuthenticated()) {
            setBuyData({
                name,
                count,
                price,
                type
            })
            setShowBuyFormModal(true)
        } else {
            toast.warning('Для покупки нужно авторизоваться!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }


    }

    const closeBuyModal = () => {
        setShowBuyFormModal(false)
    }


    return <div className={'h-screen flex flex-col'}>
        <section className={'px-2 py-3 my-2 sm:px-4 w-full'}>
            <p className={'text-3xl text-center font-bold uppercase'}>ФИТНЕС-КЛУБ</p>
            <p className={'olympic text-7xl text-center font-bold font-sport text-green-500 w-full'}>OLYMPIC</p>
            <div>
                <p className={'text-xl text-center sm:max-w-lg mx-auto'}>
                    <span className={'font-bold'}>OLYMPIC</span> – ЭТО ВАШ НОВЫЙ ОБРАЗ ЖИЗНИ!
                    ОГРОМНЫЙ ВЫБОР ГРУППОВЫХ ПРОГРАММ, ПЕРСОНАЛЬНЫЕ ТРЕНИРОВКИ,
                    СОВРЕМЕННЫЕ ТРЕНАЖЕРЫ,
                    СОПУТСТВУЮЩИЕ УСЛУГИ.<br/>
                    В КЛУБЕ <span className={'font-bold'}>OLYMPIC </span>
                    ЕСТЬ ВСЕ ДЛЯ ДОСТИЖЕНИЯ ВАШИХ ЦЕЛЕЙ.
                </p>
            </div>
        </section>
        <section className={'flex flex-col bg-zinc-800 pb-3'}>
            <span className={'text-5xl px-2 my-3 font-bold sm:px-4 uppercase text-center text-white'}>Наши услуги</span>
            <span className={'text-4xl px-2 my-2 font-bold sm:px-4 uppercase text-center w-full text-white'}>Бассейн</span>
            <span className={'text-xl px-2 my-0.5 font-bold sm:px-4 uppercase text-center w-full text-white'}>
                Для взрослых
            </span>
            <div className={'w-full flex flex-col px-2 my-3 flex flex-row justify-center space-x-0 space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row sm:px-4 '}>
                <ServiceCard click={openBuyModal} price={200} count={1} name={'Бассейн-1'} />
                <ServiceCard click={openBuyModal} price={700} count={4} name={'Бассейн-4'} />
                <ServiceCard click={openBuyModal} price={1450} count={8} name={'Бассейн-8'} />
                <ServiceCard click={openBuyModal} price={2000} count={'∞'} name={'Бассейн "Безлимит"'} />
                <div className={'bg-white/30 w-[4px] h-full rounded'}></div>
                <ServiceCard click={openBuyModal} price={220} count={1} name={'Групповое занятие'} />
            </div>
            <span className={'text-xl px-2 my-0.5 font-bold sm:px-4 uppercase text-center w-full text-white'}>
                Для детей
            </span>
            <div className={'w-full flex flex-col px-2 my-3 flex flex-row justify-center space-x-0 space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row sm:px-4 '}>
                <ServiceCard click={openBuyModal} price={120} count={1} name={'Бассейн-1'} />
                <ServiceCard click={openBuyModal} price={350} count={4} name={'Бассейн-4'} />
                <ServiceCard click={openBuyModal} price={600} count={8} name={'Бассейн-8'} />
                <ServiceCard click={openBuyModal} price={1500} count={'∞'} name={'Бассейн "Безлимит"'} />
                <div className={'bg-white/30 w-[4px] h-full rounded'}></div>
                <ServiceCard click={openBuyModal} price={220} count={1} name={'Групповое занятие'} />
            </div>
            <span className={'text-4xl px-2 my-3 font-bold sm:px-4 uppercase text-center w-full text-white'}>Тренажерный зал</span>
            <div className={'w-full flex flex-col px-2 my-3 flex flex-row justify-center space-x-0 space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row sm:px-4 '}>
                <ServiceCard click={openBuyModal} price={280} count={1} name={'Тренировка-1'} />
                <ServiceCard click={openBuyModal} price={1600} count={8} name={'Тренировка-8'} />
                <ServiceCard click={openBuyModal} price={2400} count={'∞'} name={'Тренировка "Безлимит"'} />
                <div className={'bg-white/30 w-[4px] h-full rounded'}></div>
                <ContactCard click={openBuyModal} price={500} name={'Консультация'}/>
                <ContactCard click={openBuyModal} price={750} name={'Составление программы занятий'}/>
            </div>
        </section>
        <section className={'mt-1 pb-12'}>
            <p className={'text-5xl px-2 my-3 font-bold sm:px-4 uppercase text-center w-full'}>Контактная информация</p>
            <div className={'px-2 py-3 my-2 sm:px-4 w-full flex flex-col sm:flex-row space-x-0 sm:space-x-12 justify-start sm:justify-center'}>
                <div className={'flex flex-col mb-3 sm:mb-0 justify-self-end'}>
                    <span className={'text-2xl'}>Свяжитесь со мной</span>
                    <form onSubmit={sendContactRequest} className={'flex flex-col gap-2'}>
                        <div>
                            <Label
                                className="mb-2 block"
                                htmlFor="name1"
                            >
                                Как к Вам обращаться?<span className={'text-red-600'}> *</span>
                            </Label>
                            <input
                                   id="name1"
                                   type="text"
                                   placeholder="Иванов Иван"
                                   required={true}
                                   className={'rounded'}
                                   value={getContactRequestData.name}
                                   onChange={e => {
                                       setContactRequestData({
                                           ...getContactRequestData,
                                           name: e.target.value
                                       })
                                   }}
                            />
                        </div>
                        <div>
                            <Label
                                className="mb-2 block"
                                htmlFor="phonenumber1"
                            >
                                Номер телефона<span className={'text-red-600'}> *</span>
                            </Label>
                            <input
                                id="phonenumber1"
                                type="tel"
                                maxLength="12"
                                placeholder="+7(999)999-99-99"
                                required={false}
                                className={'rounded'}
                                value={getContactRequestData.phone}
                                onChange={e => {
                                    setContactRequestData({
                                        ...getContactRequestData,
                                        phone: e.target.value
                                    })
                                }}
                            />
                        </div>
                        <div>
                            <Label
                                className="mb-2 block"
                                htmlFor="email1"
                            >
                                Ваша почта
                            </Label>
                            <input
                                   id="email1"
                                   type="email"
                                   placeholder="name@sport.ru"
                                   required={true}
                                   className={'rounded'}
                                   value={getContactRequestData.email}
                                   onChange={e => {
                                       setContactRequestData({
                                           ...getContactRequestData,
                                           email: e.target.value
                                       })
                                   }}
                            />
                        </div>
                        <div>
                            <Label
                                className="mb-2 block"
                                htmlFor="comment"
                            >
                                Примечание
                            </Label>
                            <input
                                   id="comment"
                                   type="text"
                                   placeholder="Примечание"
                                   required={false}
                                   className={'rounded'}
                                   value={getContactRequestData.comment}
                                   onChange={e => {
                                       setContactRequestData({
                                           ...getContactRequestData,
                                           comment: e.target.value
                                       })
                                   }}
                            />
                        </div>
                        <span className={'text-gray-500 text-sm'}><span className={'text-red-600'}>*</span> - обязательные поля для ввода</span>
                        <Button type="submit">
                            Отправить
                        </Button>
                    </form>
                </div>
                <div className={'flex flex-col'}>
                    <span className={'text-lg'}>Телефоны для связи: <a className={'text-blue-500'} href={'tel:+74991670318'}>+7(499)167-03-18</a></span>
                    <span className={'text-lg text-white'}>Телефоны для связи: <a className={'text-blue-500'} href={'tel:+79777399330'}>+7(977)739-93-30</a></span>
                    <span className={'text-lg'}>Почта: <a className={'text-blue-500'} href={'mailto:olympic@sport.ru'}>olympic@sport.ru</a></span>
                    <span className={'text-lg'}>Адрес: <a className={'text-blue-500'} href={'https://yandex.ru/maps/-/CCUJj4hUcD'}>Москва, Сиреневый бульвар, 4Г </a></span>
                    <span className={'text-lg'}>График работы: <span className={'text-blue-500'}>пн-пт 08:00–17:00, </span></span>
                    <span className={'text-lg text-white'}>График работы: <span className={'text-blue-500'}>обед  12:00–13:00 </span></span>
                </div>
                <div className={'w-full rounded-xl justify-self-start max-w-md'}>
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe
                        src="https://yandex.com/map-widget/v1/?um=constructor%3A79f62ffda59976eff7c70f6e4769f0192bd949bffe00f0ae781bcfef1f031db3&amp;source=constructor"
                        width="100%" height="368" frameBorder="0" />
                </div>
            </div>
        </section>
        <BuyModal show={showBuyFormModal} open={openBuyModal} close={closeBuyModal} data={buyData}/>
        <Footer />
    </div>

}

export default Home