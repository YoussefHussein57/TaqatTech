import "./Button.css";
import { Link } from "react-router-dom";

function Button({ path, children, className = "", variant = "filled"  , ...rest}) {
  const variantClass =
    variant === "outline" ? "start-btn-outline" : "start-btn";
  return (
    <Link
      to={path}
      state={rest.state}
      className={`${variantClass} start-btn  text-center text-decoration-none text-nowrap justify-content-center d-flex align-items-center ${className}`}
    {...rest}
    >
      {children}
    </Link>
  );
}

export default Button;
