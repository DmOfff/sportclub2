import {Card} from "flowbite-react";
import dateFormat from "../../utils/time";
import {SERVICE_TYPES, STATUS} from "../../utils/types";
import {Button} from "flowbite-react/lib/esm/components/Button";

const ProfileServiceCard = (props) => {

    const {name='noname', expireDate='2022-06-08T21:04:44.877Z', count=0, status=STATUS.active, type=SERVICE_TYPES.abonement} = props

    return <Card className={'min-w-sm gap-0.5'} href={'#'}>
        <h5 className={'text-2xl font-bold tracking-tight text-gray-900'}>{name}</h5>
        {
            type === SERVICE_TYPES.abonement ? (
                <>
                    <div className={'flex flex-row items-center justify-items-start'}>
                        <span className="p-1 mr-2 text-sm font-semibold text-white bg-green-500 rounded-full">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd" />
                            </svg>
                        </span>
                            <span>
                            Активен до {dateFormat(expireDate)}
                        </span>
                    </div>
                    <span>Осталось: <span>{count}</span> посещений(-я)</span>
                </>
            ) : <></>
        }

        {
            type === SERVICE_TYPES.service ?

                status === STATUS.idle ? (
                    <>
                        <div className={'flex flex-row items-center justify-items-start'}>
                        <span className="p-1 mr-2 text-sm font-semibold text-white bg-amber-300 rounded-full">
                             <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path
                                 fillRule="evenodd"
                                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                 clipRule="evenodd" />
                             </svg>
                        </span>
                            <span>
                                Ожидание звонка от специалиста
                            </span>
                        </div>
                        <Button color="red">
                            Отмена заявки
                        </Button>
                    </>
                ) : <></>
                : <></>
        }

    </Card>

}

export default ProfileServiceCard