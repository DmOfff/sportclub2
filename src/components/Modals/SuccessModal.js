
import { Modal } from "flowbite-react";
import { Button } from "flowbite-react/lib/esm/components/Button";


const SuccessModal = (props) => {

    const {show, toggle, data} = props

    return <Modal
        show={show}
        size={'md'}
    >
        <Modal.Header>
            <span className={'text-center'}>Заявка отправлена</span>
        </Modal.Header>
        <Modal.Body>
            <div className="text-center">
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Уважаемый {data.name}, ожидайте скорой связи от специалиста!
                </h3>
                <div className="flex justify-center gap-4">
                    <Button
                        onClick={toggle}
                    >
                        Ок
                    </Button>
                </div>
            </div>
        </Modal.Body>
    </Modal>

}

export default SuccessModal