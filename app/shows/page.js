import React from "react";
import Show from "../components/show";

function Shows() {
  return (
    <div className="flex flex-col items-center m-10 space-y-10">
      <Show title={"No scheduled shows"} />
    </div>
  );
}

export default Shows;
