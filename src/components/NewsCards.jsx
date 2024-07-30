import React from 'react';
import backgroundImage from '../assets/beams-basic.png';

function NewsCards(props) {
  let { sourceName, newsUrl, imageUrl, title, authorName, publishedAt } = props;
  
  return (
    <div className="card mx-auto my-3" 
      style={{ 
        maxWidth: '20rem', 
        minHeight: '27rem', 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <img 
        src={imageUrl} 
        style={{ 
          minHeight: '10rem', 
          maxWidth: '100%', 
          maxHeight: '15rem', 
          objectFit: 'cover' 
        }} 
        className="card-img-top border" 
        alt="image" 
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Source: {sourceName} <br />
            Author: {authorName} <br />
            Published At: {publishedAt}
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <a href={newsUrl} target='_blank' className="btn btn-outline-dark" style={{ width: '8rem' }}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCards;
