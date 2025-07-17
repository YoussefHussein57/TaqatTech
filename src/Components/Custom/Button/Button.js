import './Button.css'
import { Link } from 'react-router-dom'

function Button({path , children ,className="" ,variant="filled"}) {
  const variantClass = variant === "outline"? "start-btn-outline" : "start-btn";
    return (
    
            <Link
              to={path}
              className={`${variantClass} start-btn  text-center text-decoration-none text-nowrap justify-content-center d-flex align-items-center ${className}`}
            >
              {children}
            </Link> 
        
    )
}

export default Button
