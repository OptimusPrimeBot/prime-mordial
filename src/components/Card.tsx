import React from 'react';

interface CardProps {
  title: string;
  complete: number;
  subText: string;
}

const Card: React.FC<CardProps> = ({ title, complete,subText }) => {
  // Define a CSS class based on the 'complete' prop
  let cardBgClass = '';

  if (complete === 0) {
    cardBgClass = 'bg-gray-200';
  } else if (complete === 1) {
    cardBgClass = 'bg-green-400';
  } else if (complete === 2) {
    cardBgClass = 'bg-orange-400';
  }

  return (
    <div className={`container mx-auto rounded-xl shadow border p-8 m-10 ${cardBgClass}`}>
      <h2 className="text-3xl text-gray-700 font-bold mb-5">{title}</h2>
      <p>{subText}</p>
    </div>
  );
};

export default Card;
