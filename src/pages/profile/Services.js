import ProfileServiceCard from "../../components/Cards/ProfileServiceCard";
import {SERVICE_TYPES, STATUS} from "../../utils/types";

const Services = () => {
    return <>
        <span className={'text-center block w-full text-xl mb-3'}>Абонементы и заявки</span>
        <div className={'grid grid-container gap-3 px-0 sm:px-6'}>
            <ProfileServiceCard expireDate={'2022-06-10T21:04:44.877Z'} count={3} name={'Бассейн-4'} />
            <ProfileServiceCard expireDate={'2022-06-10T21:04:44.877Z'} count={8} name={'Тренировка-8'} />
            <ProfileServiceCard type={SERVICE_TYPES.service} status={STATUS.idle} name={'Консультация'} />
            <ProfileServiceCard type={SERVICE_TYPES.service} status={STATUS.idle} name={'Составление программы занятий'} />
        </div>
    </>
}

export default Services