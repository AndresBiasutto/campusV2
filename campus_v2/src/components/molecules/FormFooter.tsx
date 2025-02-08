import React from "react";
import { Link } from "react-router-dom";

interface FormFooterProps {
  legend: string;
  linkTo: string;
  btnName: string;
}

const FormFooter: React.FC<FormFooterProps> = ({legend, linkTo, btnName}) => {
  return (
    <div>
      <p>
        {legend}{" "}
        <Link
          to={linkTo}
          className="text-light-accent dark:text-dark-accent"
        >
          {btnName}
        </Link>
      </p>
    </div>
  );
};

export default FormFooter;
