import React, { useContext } from 'react';
import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';
import ModalContentComponent from './ModalContentComponent';

const ComponentWithModal = () => {
  const disclosureManager = useContext(DisclosureManagerContext);
  return (
    <button
      onClick={() => {
        disclosureManager.disclose({
          preferredType: 'modal',
          size: 'large',
          content: {
            key: 'component-with-modal.modal-content',
            component: <ModalContentComponent />,
          },
        });
      }}
    >
      Show Modal
    </button>
  );
};

export default ComponentWithModal;