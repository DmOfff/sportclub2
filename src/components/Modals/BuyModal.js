import { Label, Modal} from "flowbite-react";
import { Button } from "flowbite-react/lib/esm/components/Button";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import {SERVICE_TYPES} from "../../utils/types";

const BuyModal = (props) => {

    const user = JSON.parse(localStorage.getItem('user'))

    const {show=false, close, data={
        name: '',
        count: '',
        price: 0,
        type: SERVICE_TYPES.service
    }} = props

    const {name, count, price, type} = data

    const login = (e) => {
        e.preventDefault()

        close()

        fetch('http://localhost:9999/services/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: user.id,
                name,
                count,
                type
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    toast.success('Успешная оплата товара!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                },
                error => {}
            )



    }

    return <Modal
        show={show}
        size={'2xl'}
        popup={true}
        onClose={e => {
            close()
        }}

    >
        <Modal.Header>
            <h3 className="text-4xl px-4 text-center w-full font-medium text-gray-900 text-center mb-3">
                Детали покупки
            </h3>
        </Modal.Header>
        <Modal.Body className={''}>
            <form onSubmit={login} className="pb-2 flex flex-col">
                <div className={'flex flex-row space-x-3'}>
                    <div className="flex flex-col">
                        <p className={'text-md text-gray-500'}>Наименование товара:<br/><span className={'text-black'}>{name}</span></p>
                        <p className={'text-md text-gray-500'}>Цена: <span className={'text-black'}>{price} руб</span></p>
                        {
                            count ? (                <p className={"text-md font-normal text-gray-500"}>
                                Количество посещений: <span className={'text-black'}>{count} {count === 1 ? 'посещение' : ' посещений/месяц'}</span>
                            </p>): <></>
                        }
                        {/*<h3 className="text-xl font-medium text-gray-900 text-center">*/}
                        {/*    Детали покупки*/}
                        {/*</h3>*/}
                        <Button  className={'mt-2 mx-auto'} type={'submit'} outline={true}
                                 gradientDuoTone="greenToBlue">
                            Купить
                        </Button>
                    </div>
                    <div className={'w-[280px]'}>
                        <div className={'p-3 bg-gray-600 mx-auto rounded flex flex-col space-y-0.5'}>
                            <p className={'text-white text-sm'}>Кредитная карта</p>
                            <div className={'flex flex-col'}>
                                <Label
                                    className={'text-gray-300'}
                                    htmlFor="card-number"
                                >
                                    Номер карты
                                </Label>
                                <input
                                    id="card-number"
                                    type={'number'}
                                    inputMode={'numeric'}
                                    maxLength={16}
                                    pattern={'[0-9]{13,19}'}
                                    placeholder="0000000000000000"
                                    required={true}
                                    className={'rounded text-sm'}
                                />
                            </div>
                            <div className={'flex flex-row'}>
                                <div className={'flex flex-col'}>
                                    <Label
                                        className={'text-gray-300'}
                                        htmlFor="card-date"
                                    >
                                        До
                                    </Label>
                                    <input
                                        id="card-date"
                                        type={'text'}
                                        placeholder="01/22"
                                        pattern={'[0-9][0-9]\\[0-9][0-9]'}
                                        required={true}
                                        className={'rounded w-3/4' }
                                    />
                                </div>
                                <div className={'flex flex-col'}>
                                    <Label
                                        className={'text-gray-300'}
                                        htmlFor="card-cvv"
                                    >
                                        CVV
                                    </Label>
                                    <input
                                        id="card-cvv"
                                        type={'number'}
                                        placeholder="123"
                                        required={true}
                                        maxLength={3}
                                        className={'rounded w-2/4'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Modal.Body>
    </Modal>

}

export default BuyModal