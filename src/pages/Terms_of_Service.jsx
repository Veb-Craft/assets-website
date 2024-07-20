import React from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";

import { TERMS_OF_SERVICE } from "../data";

const Terms_of_Service = () => {
  return <MarkdownRenderer markdown={TERMS_OF_SERVICE} />;
};

export default Terms_of_Service;
