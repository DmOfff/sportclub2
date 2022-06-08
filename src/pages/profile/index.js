import Footer from "../../components/Footer";
import Services from "./Services";

const Profile = () => {

    return <div className={'h-screen flex flex-col'}>
        <section className={'px-2 py-3 my-2 sm:px-4 w-full flex-1'}>
            <span className={'text-3xl text-center block font-bold uppercase mb-6'}>Личный кабинет</span>
            <div className={'flex flex-col sm:flex-row w-full'}>
                <div className={'w-full sm:w-2/3'}>
                    <Services />
                </div>
                <div className={'w-full sm:w-1/3 flex flex-col'}>
                    <span className={'text-center block w-full text-xl mb-2'}>Личные данные</span>
                    <div className={'w-full'}>
                        <form className={'flex flex-col gap-1'}>
                            <span>
                                Уникальный идентификатор: <span className={'font-bold text-blue-500'}>5123123123</span>
                            </span>
                            <span>
                                Фамилия и Имя: <span className={'font-bold text-blue-500'}>Иванов Иван</span>
                            </span>
                            <span>
                                Номер телефона: <span className={'font-bold text-blue-500'}>+7(921)999-99-99</span>
                            </span>
                            <span>
                                E-Mail: <span className={'font-bold text-blue-500'}>test@email.ru</span>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </section>
       <Footer />
    </div>

}

export default Profile