
import { Modal } from "flowbite-react";
import { Button } from "flowbite-react/lib/esm/components/Button";


const SuccessModal = (props) => {

    const {show, close} = props

    return <Modal
        show={show}
        size={'sm'}
        onClose={e => close()}
    >
        <Modal.Header>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Спасибо за покупку!
            </h3>
        </Modal.Header>
        <Modal.Body>
            <div className="text-center">

                <div className="flex justify-center gap-4">
                    <Button
                        onClick={e => close()}
                    >
                        Ок
                    </Button>
                </div>
            </div>
        </Modal.Body>
    </Modal>

}

export default SuccessModal