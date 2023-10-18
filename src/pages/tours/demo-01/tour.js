import React, { useState } from 'react';
import { useTour } from '@reactour/tour';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

const TourComponent = () => {
  const { setIsOpen } = useTour();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <main>
      <button onClick={() => setIsOpen(true)}>Open Tour</button>

      <button
        style={{ border: '1px solid red' }}
        data-tour="1"
        onClick={() => setModalIsOpen(true)}
      >
        Open Modal
      </button>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat quam eu mauris
        euismod imperdiet. Nullam elementum fermentum neque a placerat. Vivamus sed dui nisi.
        Phasellus vel dolor interdum, accumsan eros ut, rutrum dolor. Etiam in leo urna. Vestibulum
        maximus vitae urna at congue. Vivamus lectus nisi, pellentesque at orci a, tempor lobortis
        orci. Praesent non lorem erat. Ut augue massa, aliquam in bibendum sed, euismod vitae magna.
        Nulla sit amet sodales augue. Curabitur in nulla in magna luctus porta et sit amet dolor.
        Pellentesque a magna enim. Pellentesque malesuada egestas urna, et pulvinar lorem viverra
        suscipit. Duis sit amet mauris ante. Fusce at ante nunc. Maecenas ut leo eu erat porta
        fermentum.
      </p>

      <button data-tour="2" to="/">
        Back Home 2
      </button>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat quam eu mauris
        euismod imperdiet. Nullam elementum fermentum neque a placerat. Vivamus sed dui nisi.
        Phasellus vel dolor interdum, accumsan eros ut, rutrum dolor. Etiam in leo urna. Vestibulum
        maximus vitae urna at congue. Vivamus lectus nisi, pellentesque at orci a, tempor lobortis
        orci. Praesent non lorem erat. Ut augue massa, aliquam in bibendum sed, euismod vitae magna.
        Nulla sit amet sodales augue. Curabitur in nulla in magna luctus porta et sit amet dolor.
        Pellentesque a magna enim. Pellentesque malesuada egestas urna, et pulvinar lorem viverra
        suscipit. Duis sit amet mauris ante. Fusce at ante nunc. Maecenas ut leo eu erat porta
        fermentum.
      </p>

      <button data-tour="3">Back Home 3</button>

      <Modal show={modalIsOpen} onHide={() => setModalIsOpen(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalIsOpen(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setModalIsOpen(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default TourComponent;
