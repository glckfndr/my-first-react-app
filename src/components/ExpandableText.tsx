import React, { useState } from "react";
interface Props {
  children: string;
  maxChars?: number;
}

function ExpandableText({ children, maxChars = 80 }: Props) {
  const [isTruncated, setIsTruncated] = useState(children.length > maxChars);
  if (children.length <= maxChars) return <p>children</p>;
  const text = isTruncated ? children.substring(0, maxChars) + "..." : children;
  return (
    <>
      {text}{" "}
      <button onClick={() => setIsTruncated(!isTruncated)}>
        {isTruncated ? "More" : "Less"}
      </button>
    </>
  );
}

export default ExpandableText;
