import React from "react";

import Github from "./Github";
import LinkedIn from "./oldLinkedIn";
import Twitter from ".";

const Icon = ({name}) => {
  switch (name.toLowerCase()) {
    case "github":
      return <Github color={'#181717'} />
    case "linkedin":
      return <LinkedIn color={'#0A66C2'} />
    case "twitter":
      return <Twitter color={'#1DA1F2'} />
    default:
      return null;
  }
}

export default Icon