import {Card} from "flowbite-react";
import {SERVICE_TYPES} from "../../utils/types";

const ContactCard = (props) => {

    const {name, price, click} = props

    return(
        <div className={'max-w-sm'}>
            <Card className={'h-full'}>
                <h5 className={'mb-2 text-xl font-medium text-gray-500 text-center whitespace-pre-wrap'}>
                    {name}
                </h5>
                <div className="flex flex-col text-center text-gray-900 dark:text-white">
                    <span className="text-5xl font-extrabold tracking-tight">{price} руб</span>
                </div>
                <div className={'h-full'} />
                <button
                    onClick={e => click(name, null, price, SERVICE_TYPES.service)}
                    type="button"
                    className="inline-flex w-full justify-center rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900"
                >
                    Оставить заявку
                </button>
            </Card>
        </div>
    )

}

export default ContactCard