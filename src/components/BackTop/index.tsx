import { useScroll } from "../../hooks/useScroll";
import { scrollUp } from "../../pages/Home/utils";
import arrow from "../../assets/svg/arrow-up.svg";
import "./styles.css";

export const BackToTop = () => {
  const scrollState = useScroll();
  const handleScroll = () => {
    scrollUp();
  };

  return (
    <div className="back-to-top">
      {scrollState && (
        <button onClick={handleScroll}>
          <img src={arrow} alt="arrow-up" />
        </button>
      )}
    </div>
  );
};
