import React from "react";
export default function Cards({ data}) {
  return (
    <>
      <div
        key={data?.id}
        className="card"
        style={{ backgroundColor: data?.bgColor }}
      >
        
          <>
            <div className="card-icon">{data?.icon}</div>
            <h2 className="card-title">{data?.title}</h2>
            <p className="card-description">{data?.description}</p>
            <h3 className="card-count">{data?.count}</h3>
           
          </>
        
      </div>
    </>
  );
}
