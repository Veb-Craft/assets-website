import React from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";

import { PRIVACY_POLICY } from "../data";

const Privacy_Policy = () => {
  return <MarkdownRenderer markdown={PRIVACY_POLICY} />;
};

export default Privacy_Policy;
