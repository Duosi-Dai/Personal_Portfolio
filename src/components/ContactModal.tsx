interface ModalProps {
  setModalOpen: (index: boolean) => void;
}

const ContactModal = ({ setModalOpen }: ModalProps) => {
  return (
    <>
      <div className="modal">
        <button
          className="btn--close-modal"
          onClick={() => setModalOpen(false)}
        >
          &times;
        </button>
        <h2 className="modal__header">
          Feel free to contact me <br />
          by this<span className="highlight"> the form </span>
        </h2>
        <form className="modal__form">
          <label>Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <label>Message</label>
          <input type="text" />
          <button className="btn" onClick={() => setModalOpen(false)}>
            Submit
          </button>
        </form>
      </div>
      <div className="overlay" onClick={() => setModalOpen(false)}></div>
    </>
  );
};

export default ContactModal;
