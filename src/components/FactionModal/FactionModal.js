import React, { useState } from 'react';
import Modal from 'react-modal';
import propTypes from 'prop-types';
import FactionLogo from '../FactionLogo/FactionLogo';
import FactionDescription from '../FactionDescription/FactionDescription';

const FactionModal = ({ faction }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => { setIsOpen(true); };
  const closeModal = () => { setIsOpen(false); };

  return (
    <div className="faction-wrapper">
      <div onClick={openModal} onKeyPress={openModal} role="presentation">
        {faction}
        <FactionLogo faction={faction} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#f1ffe3',
            margin: 'auto',
            textAlign: 'center',
            borderRadius: '25px',
            maxWidth: '350px',
            minHeight: 'fit-content',
          },
        }}
      >
        <div id="faction-description">
          <p id="modal-title">
            {' '}
            {faction}
            {' '}
          </p>
          <FactionLogo faction={faction} />
          <FactionDescription faction={faction} />
        </div>
      </Modal>
    </div>
  );
};

FactionModal.propTypes = {
  faction: propTypes.string.isRequired,
};

export default FactionModal;
