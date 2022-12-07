import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  const onClick = () => {
    setShowModal(false);
  };

  const keepOpen = () => {
    setShowModal(true);
  };
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Resume
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex  overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none "
            // onClick={onClick}
          >
            <div
              className="relative w-auto my-6 mx-auto max-w-6xl"
              onClick={keepOpen}
            >
              {/* <button
                className="text-red-500 bg-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button> */}
              <p className="bg-white p-10">Hello</p>

            </div>
          </div>


          <div
            onClick={onClick}
            className="opacity-25 fixed inset-0 z-40 bg-black"
          ></div>
        </>
      ) : null}
    </>
  );
}
