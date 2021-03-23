import React from "react";
export const Sidebar = ({ hamburger, podcasts }) => {
  const podcastNames = Object.keys(podcasts);
  return (
    <amp-sidebar id="sidebar1" layout="nodisplay">
      <ul>
        {!!hamburger &&
          hamburger.map((menuItem) => (
            <li key= {menuItem} >
              <a  className="sidebarfont capitalize" href={`/${menuItem}`}>
                {menuItem}
              </a>
            </li>
          ))}
        {!!podcastNames &&
          podcastNames.map((name) => (
            <li key={name} >
              <a className="sidebarfont" href={`${podcasts[name].show}`}>
                {podcasts[name].name} Podcasts
              </a>
            </li>
          ))}
      </ul>
    </amp-sidebar>
  );
};

export default Sidebar;
