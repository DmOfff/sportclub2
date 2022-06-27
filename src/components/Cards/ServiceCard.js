import {Card} from "flowbite-react";
import {SERVICE_TYPES} from "../../utils/types";

const ServiceCard = (props) => {

    const {name, count, price, click} = props

    return(
            <div className={'max-w-sm'}>
            <Card className={'h-full'}>
                <h5 className={'mb-2 text-xl font-medium text-gray-500 text-center'}>
                    {name}
                </h5>
                <div className={'h-full'} />
                <span className="text-5xl font-extrabold tracking-tight text-center">{price} руб</span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                        <span className={'text-blue-600'}>{count}</span> {count === 1 ? 'посещение' : ' посещений/месяц'}
                </span>
                <button
                    onClick={e => click(name, count, price, SERVICE_TYPES.abonement)}
                    type="button"
                    className="inline-flex w-full justify-center rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900"
                >
                    Выбрать
                </button>
            </Card>
        </div>
    )

}

export default ServiceCard