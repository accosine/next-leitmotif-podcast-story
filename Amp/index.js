import React from "react";
export const AmpImg = ({ alt, src, width, height, layout }) => (
  <amp-img
    alt={alt}
    src={src}
    width={width}
    height={height}
    layout={layout}
    role="img"
  />
);

export const AmpUserNotification = ({
  layout = "nodisplay",
  id = "amp-user-notification1",
  buttontext = "Yay cookies, nom nom nom",
  className = "",
  buttonClassName = "",
  children,
}) => {
  const taphandler = "tap:" + id + ".dismiss";
  return (
    <amp-user-notification className={className} layout={layout} id={id}>
      {children}
      <button className={buttonClassName} on={taphandler}>
        {buttontext}
      </button>
    </amp-user-notification>
  );
};

const AmpComponents = {
  AmpImg,
  AmpUserNotification,
};

export default AmpComponents;
