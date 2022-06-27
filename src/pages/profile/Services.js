import ProfileServiceCard from "../../components/Cards/ProfileServiceCard";
import {SERVICE_TYPES, STATUS} from "../../utils/types";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

const Services = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const [services, setServices] = useState([])

    const cancelService = id => {

        fetch('http://localhost:9999/services/user/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                serviceID: id
            })
        })
            .then(res => res.json())
            .then(
                result => {
                },
                error => {}
            )
        window.location.reload(false);
        toast.success('Заявка отменена! Деньги будут возвращены в течении 24 часов', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }

    const getServices = () => {

        fetch('http://localhost:9999/services/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: user.id
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    setServices(result)
                },
                error => {}
            )

    }

    useEffect(()=> {
        getServices()
    }, [])



    return <>
        <span className={'text-center block w-full text-xl mb-3'}>Абонементы и заявки</span>
        <div className={'grid grid-container gap-3 px-0 sm:px-6'}>
            {
                services?.map(service => {
                    return (<ProfileServiceCard keyu={service?.id} id={service?.id} cancel={cancelService} type={service?.type} status={service?.status} expireDate={service?.expireDate} count={service?.count} name={service?.name} />)
                })

            }
            {/*<ProfileServiceCard expireDate={'2022-06-10T21:04:44.877Z'} count={3} name={'Бассейн-4'} />*/}
            {/*<ProfileServiceCard expireDate={'2022-06-10T21:04:44.877Z'} count={8} name={'Тренировка-8'} />*/}
            {/*<ProfileServiceCard type={SERVICE_TYPES.service} status={STATUS.idle} name={'Консультация'} />*/}
            {/*<ProfileServiceCard type={SERVICE_TYPES.service} status={STATUS.idle} name={'Составление программы занятий'} />*/}
        </div>
    </>
}

export default Services