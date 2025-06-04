import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
} from "@heroui/react";

export default function ModalComp({ disclosure, children , title}) {
    const { isOpen, onOpenChange } = disclosure;


    return (
        <div className="flex flex-col gap-2">

            <Modal isOpen={isOpen} scrollBehavior={"inside"} onOpenChange={onOpenChange} backdrop="blur">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

