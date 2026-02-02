import ReactDOM from "react-dom";

const Popup = ({ onClose }) => {
  const popupRoot = document.getElementById("popup-root");
  console.log("popupRoot:", popupRoot); // DEBUG

  if (!popupRoot) return null;

  return ReactDOM.createPortal(
    <div style={{ background: "yellow", padding: "20px" }}>
      <p>I am a popup</p>
      <button onClick={onClose}>Close</button>
    </div>,
    popupRoot
  );
};

export default Popup;
