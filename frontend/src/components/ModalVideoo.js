import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";

const ModalVideoo = () => {
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    const modal_status = localStorage.getItem("modal_status");

    if (modal_status) {
      setOpen(false);
      localStorage.setItem("modal_status", true);
    }
  }, []);
  return (
    <>
      <div>
        <ModalVideo
          channel="youtube"
          videoId="12kyh3Y8Uuc"
          autoplay
          isOpen={isOpen}
          onClose={() => {
            setOpen(false);
            localStorage.setItem("modal_status", true);
          }}
        />

        {/* <button className="btn-primary" onClick={() => setOpen(true)}>
          VIEW DEMO
        </button> */}
      </div>
    </>
  );
};

export default ModalVideoo;
