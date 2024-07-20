import React from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";

import { DISCLAIMER } from "../data";

const Disclaimer = () => {
  return <MarkdownRenderer markdown={DISCLAIMER} />;
};

export default Disclaimer;
