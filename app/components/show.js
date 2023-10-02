import React from "react";

function Show({ date, title, location }) {
  return (
    <div className="w-full md:w-1/3 flex border p-3 rounded-lg border-white justify-between align-middle">
      <div className="p-1 font-extrabold">{date}</div>
      <div className="p-1 ">{title}</div>
      <div className="p-1">{location}</div>
    </div>
  );
}

export default Show;
