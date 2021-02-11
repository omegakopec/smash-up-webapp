import React, { useState } from 'react';
import Modal from 'react-modal';
import propTypes from 'prop-types';
import FactionLogo from '../FactionLogo/FactionLogo';
import FactionDescription from '../FactionDescription/FactionDescription';
import './FactionResult.scss';

const FactionResult = ({ faction }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="faction-result-container">
      <div className="faction-results-body" onClick={openModal} role="presentation">
        <p>{faction}</p>
        <FactionLogo faction={faction} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
      >
        <div className="modal-body">
          <h4 className="modal-title">{faction}</h4>
          <FactionLogo faction={faction} />
          <FactionDescription faction={faction} />
        </div>
      </Modal>
    </div>
  );
};

FactionResult.propTypes = {
  faction: propTypes.string.isRequired,
};

export default FactionResult;
