import "./NumbersCard.css";
import CountUp from "react-countup";
import { useInView } from "../../../Hooks/useInView";

function NumbersCard({ txt, className = "", end, suffix }) {
  const [ref, inView] = useInView({ threshold: 0.6 });
  return (
    <div ref={ref} className={`card__wrapper ${className} border-0 `}>
      <div className="d-flex flex-column justify-content-between h-100 gap-3 gap-lg-5">
        <h5 className="title">
          {inView ? <CountUp start={0} redraw={true} end={end} duration={2} /> : 0}{" "}
          {suffix}
        </h5>
        <p className="desc">{txt}</p>
      </div>
    </div>
  );
}

export default NumbersCard;
