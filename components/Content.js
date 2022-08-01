//Content.js
// import React from "react";
// import './content.scss';
const Content = () => {
  const data = (
    <div className="h-screen m-4 bg-blue-300">
      <h2>My div content </h2>
    </div>
  );
  return (
    <main className="">
      {data}
      {data}
      {data}
      {data}
      {data}
    </main>
  );
};
export default Content;
