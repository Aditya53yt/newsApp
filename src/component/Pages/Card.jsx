import React, { useContext } from "react";


const Card = ({news}) => {
  const{title,author,description,url,urlToImage}=news 
  
  return (
    <div
      className={"card mb-3 bg-light text-dark p-3" }
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={urlToImage}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" style={{color:"red"}}>{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-secondary">{author}</small>
               </p>
              <a
                href={url}
                target="_blank"
                className={
                  
                     "btn btn-secondary float-end"
                   
                }
              >
                Read More
              </a>
           
          </div>
        </div>
      </div>
    </div>
  );

            }
export default Card;
