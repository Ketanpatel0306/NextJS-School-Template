import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import Style from "../styles/toTop.module.css";
export const ToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showBtn && (
        <div className={Style.topDiv}>
          <FaAngleUp className={Style.reactIcon} onClick={() => goToTop()} />
        </div>
      )}
    </div>
  );
};
