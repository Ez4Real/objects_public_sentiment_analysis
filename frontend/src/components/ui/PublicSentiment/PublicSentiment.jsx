import React from 'react';
import './PublicSentiment.css'; // Переконайтеся, що імпортуєте ваш файл CSS

const PublicSentiment = ({ moodIcon, moodRating, summary }) => {
  return (
    <div className="sentiment-container">
      <img className="mood-icon" src={moodIcon} alt="Mood Icon" />
      <div className='sentiment-result-cont'>
        <h1 className="sentiment-rating">Оцінка: {moodRating}</h1>
        <p className="sentiment-summary">{summary}</p>
      </div>
      
    </div>
  );
};

export default PublicSentiment;