import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ServiceCard.css'

function ServiceCard({icon , title ,description ,className = "" , size = "sm" }) {
   const iconSizeClass = size === "lg" ? "icon-box-lg" : "icon-box-sm";
    return (
         <div className={`p-3 rounded  ${className}`}>
      <div className={`icon-box p-2 rounded  bg-opacity-25 d-flex align-items-center ${iconSizeClass} `}>
        <FontAwesomeIcon icon={icon} size="sm" className="iconSize text-light " />
      </div>
      <div>

      <h6>{title}</h6>
      <p className="text-light small m-0">{description}</p>
      </div>
    </div>
    )
}

export default ServiceCard
