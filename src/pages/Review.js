import React from 'react';

const Review = ({ item }) => {
  const { name, img, description, ratings } = item;
  return (
    <div class="card flex lg:card-side bg-base-100 shadow-xl">
      <div class="avatar">
        <div class="h-16 w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} alt="avatar" />
        </div>
      </div>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p> <span class='font-bold'>Ratings:</span> {ratings} out of 5</p>
      </div>
    </div>
  );
};

export default Review;