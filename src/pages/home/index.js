import './index.css'
import ServiceCard from "../../components/Cards/ServiceCard";
import ContactCard from "../../components/Cards/ContactCard";

const Home = () => {

    return <div className={'h-screen flex flex-col mb-60'}>
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
        <span className={'text-5xl px-2 my-3 font-bold sm:px-4 uppercase text-center'}>Наши услуги</span>
        {/*<section className={'bg-black w-full bg-zinc-800 flex flex-row'}>*/}
        {/*    <img className={'w-1/2 px-2 sm:px-4 py-3 rounded-[32px]'} src={zalImage} />*/}
        {/*    <div className={'flex flex-col px-2 sm:px-4 py-3 w-full'}>*/}
        {/*        <span className={'text-3xl text-white text-center'}>Тренажерный зал</span>*/}
        {/*        <div></div>*/}
        {/*    </div>*/}
        {/*</section>*/}
        <span className={'text-4xl px-2 my-2 font-bold sm:px-4 uppercase text-center w-full'}>Бассейн</span>
        <span className={'text-xl px-2 my-0.5 font-bold sm:px-4 uppercase text-center w-full'}>
            Для взрослых
        </span>
        <div className={'w-full flex flex-col px-2 my-3 flex flex-row justify-center space-x-0 space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row sm:px-4 '}>
            <ServiceCard price={200} count={1} name={'Бассейн-1'} />
            <ServiceCard price={700} count={4} name={'Бассейн-4'} />
            <ServiceCard price={1450} count={8} name={'Бассейн-8'} />
            <ServiceCard price={2000} count={'∞'} name={'Бассейн "Безлимит"'} />
            <div className={'bg-gray-500 w-[4px] h-full rounded bg-opacity-10'}></div>
            <ServiceCard price={220} count={1} name={'Групповое занятие'} />
        </div>
        <span className={'text-xl px-2 my-0.5 font-bold sm:px-4 uppercase text-center w-full'}>
            Для детей
        </span>
        <div className={'w-full flex flex-col px-2 my-3 flex flex-row justify-center space-x-0 space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row sm:px-4 '}>
            <ServiceCard price={120} count={1} name={'Бассейн-1'} />
            <ServiceCard price={350} count={4} name={'Бассейн-4'} />
            <ServiceCard price={600} count={8} name={'Бассейн-8'} />
            <ServiceCard price={1500} count={'∞'} name={'Бассейн "Безлимит"'} />
            <div className={'bg-gray-500 w-[4px] h-full rounded bg-opacity-10'}></div>
            <ServiceCard price={220} count={1} name={'Групповое занятие'} />
        </div>
        <span className={'text-4xl px-2 my-3 font-bold sm:px-4 uppercase text-center w-full'}>Тренажерный зал</span>
        <div className={'w-full flex flex-col px-2 my-3 flex flex-row justify-center space-x-0 space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row sm:px-4 '}>
            <ServiceCard price={280} count={1} name={'Тренировка-1'} />
            <ServiceCard price={1600} count={8} name={'Тренировка-8'} />
            <ServiceCard price={2400} count={'∞'} name={'Тренировка "Безлимит"'} />
            <div className={'bg-gray-500 w-[4px] h-full rounded bg-opacity-10'}></div>
            <ContactCard price={500} name={'Консультация'}/>
            <ContactCard price={750} name={'Составление программы занятий'}/>
        </div>
    </div>

}

export default Home