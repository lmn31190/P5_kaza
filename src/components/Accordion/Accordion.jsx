import { useRef, useState } from "react";
import "./accordion.scss";
import arrow from "../../assets/images/arrow.svg";

const Accordion = ({ data, title, children }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef()

  const close = () => {
    setOpen(!open);
  };
  return (
    <div className="accordion">
      <div className="accordionTitle">
        <p>{title}</p>
        <button>
          <img
            src={arrow}
            className={open ? "arrow open" : "arrow"}
            alt="Dérouler"
            onClick={close}
          />
        </button>
      </div>

      <div
        id="collapse-parent"
        className={open ? "collapse-parent show" : "collapse-parent hide"}
        ref={ref}
        style={
          open
            ? { height: ref.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="collapse-content">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
