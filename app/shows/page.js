import React from "react";
import Show from "../components/show";

function Shows() {
  return (
    <div className="flex flex-col items-center m-10 space-y-10">
      <Show
        date={"SEP 03"}
        title={"Paper tiger show"}
        location={"San antonio TX"}
      />
      <Show
        date={"SEP 03"}
        title={"Paper tiger show"}
        location={"San antonio TX"}
      />
      <Show
        date={"SEP 03"}
        title={"Paper tiger show"}
        location={"San antonio TX"}
      />
      <Show
        date={"SEP 03"}
        title={"Paper tiger show"}
        location={"San antonio TX"}
      />
    </div>
  );
}

export default Shows;
