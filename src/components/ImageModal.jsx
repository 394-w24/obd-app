import "./ImageModal.css";

const ImageModal = ({ isOpen, onClose, images }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
        <h2 className="centered-text">Repair Guide</h2>
        <span className="close-modal" onClick={onClose}>&times;</span>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} className="modal-image"/>
          ))}
        </div>
      </div>
    );
  };
  

  export default ImageModal;