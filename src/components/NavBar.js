import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const numberOfLinks = links.map ( link => {
    return <a href={"#" +link} key={link}>{link}</a>
  })

  return <nav>{numberOfLinks}</nav>;
}

export default NavBar;
