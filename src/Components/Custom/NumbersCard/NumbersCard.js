import "./NumbersCard.css";
function NumbersCard({ title, txt, className = "" }) {
  return (
    <div className={`card__wrapper ${className} border-0 `}>
      <div className="d-flex flex-column justify-content-between h-100">
        <h5 className="title">{title}</h5>
        <p className="desc">{txt}</p>
      </div>
    </div>
  );
}

export default NumbersCard;
