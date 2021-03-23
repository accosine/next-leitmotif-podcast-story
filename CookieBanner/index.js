import React from "react";
import { AmpUserNotification } from "../Amp";

const CookieBanner = ({
  layout,
  id,
  buttontext,
  children,
  className,
  buttonClassName,
}) => {
  return (
    <AmpUserNotification
      layout={layout}
      id={id}
      buttontext={buttontext}
      className={className}
      buttonClassName={buttonClassName}
    >
      {children}
    </AmpUserNotification>
  );
};

export default CookieBanner;
