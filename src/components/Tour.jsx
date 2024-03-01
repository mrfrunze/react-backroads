import React from 'react'

const Tour = ({image, date, title, text, location, day, price}) => {
    return(
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={image} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}e</h4>
          </div>
          <p>
            {text}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> {location}
            </p>
            <p>{day}</p>
            <p>{price}</p>
          </div>
        </div>
      </article>
    )
}

export default Tour