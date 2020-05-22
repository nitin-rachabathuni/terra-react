import React, { useContext, useRef } from 'react';
import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';
import ModalContentComponent from './ModalContentComponent';

const ComponentWithModal = () => {
    const disclosureManager = useContext(DisclosureManagerContext);
    const modalDismissRef = useRef();
    return (
        <div>
            <h1>Hello World</h1>
            <button
                text="Close Modal"
                onClick={() => {
                    disclosureManager.closeDisclosure();
                }}
            > Close Modal </button>
        </div>

        // <button
        //   onClick={() => {
        //     // disclosureManager.disclose({
        //     //   preferredType: 'modal',
        //     //   size: 'large',
        //     //   content: {
        //     //     key: 'component-with-modal.modal-content',
        //     //     component: (
        //     //       <ModalContentComponent
        //     //         onSubmit={() => {
        //     //           if (modalDismissRef.current) {
        //     //             modalDismissRef.current();
        //     //             modalDismissRef.current = undefined;
        //     //           }
        //     //         }}
        //     //       />
        //     //     ),
        //     //   },
        //     // }).then(({ dismissDisclosure }) => {
        //     //   modalDismissRef.current = dismissDisclosure;
        //     // });
        //   }}
        // >
        //   Show Modal
        // </button>
    );
};

export default ComponentWithModal;