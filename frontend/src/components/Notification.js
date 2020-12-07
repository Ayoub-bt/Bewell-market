import toast from "toasted-notes";
import "toasted-notes/src/styles.css";

const Notification = ({ text }) => {
  return toast.notify(`${text}`);
};

export default Notification;
