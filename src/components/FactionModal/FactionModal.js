import React, { useState } from 'react';
import Modal from 'react-modal';
import propTypes from 'prop-types';
import FactionLogo from '../FactionLogo/FactionLogo';
import FactionDescription from '../FactionDescription/FactionDescription';

const FactionModal = ({ faction }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  // const closeModal = () => setModalIsOpen(false);

  return (
    <div className="faction-wrapper" role="presentation" onClick={openModal}>
      {faction}
      <FactionLogo faction={faction} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            backgroundColor: '#f1ffe3',
            margin: 'auto',
            textAlign: 'center',
            borderRadius: '25px',
            maxHeight: '500px',
            maxWidth: '300px',
          },
        }}
      >
        <h4>{faction}</h4>
        <p id="modal-text">
          <FactionDescription faction={faction} />
        </p>
        <FactionLogo faction={faction} />
      </Modal>
    </div>
  );
};

FactionModal.propTypes = {
  faction: propTypes.string.isRequired,
};

export default FactionModal;
