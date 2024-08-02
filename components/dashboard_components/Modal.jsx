"use client";
function Modal({ buttonText, children }) {
  return (
    <>
      <button
        className="btn btn-info btn-sm"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        {buttonText}
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box md:w-max-none">{children}</div>
      </dialog>
    </>
  );
}

export default Modal;
