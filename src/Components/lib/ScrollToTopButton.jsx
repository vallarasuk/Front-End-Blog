import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';


const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="btn btn-primary"
      style={{ position: "fixed", bottom: "20px", right: "20px" }}
    >
      <button
        className="text-decoration-none bg-transparent border-0"
        onClick={handleScrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} size="lg" className="text-white" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
