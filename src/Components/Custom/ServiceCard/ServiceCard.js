import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceCard({icon , title ,description ,className = ""}) {
    return (
         <div className={`d-flex flex-column gap-2 align-items-start p-3 rounded ${className}`}>
      <div className={`icon-box p-2 rounded bg-light bg-opacity-25 `}>
        <FontAwesomeIcon icon={icon} size="lg" className="text-light" />
      </div>
      <div>

      <h6>{title}</h6>
      <p className="text-light small m-0">{description}</p>
      </div>
    </div>
    )
}

export default ServiceCard
