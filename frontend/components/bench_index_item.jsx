import React from "react";

const BenchIndexItem = ({bench}) => (
  <li key={bench.id}>
    {bench.description}
  </li>
);

export default BenchIndexItem;
