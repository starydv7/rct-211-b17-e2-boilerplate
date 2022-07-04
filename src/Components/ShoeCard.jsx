import React from "react";

const ShoeCard = (shoesData) => {
  let shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <div>
        <img data-cy="shoe-card-image" src={shoesData.image} alt="shoes" />
      </div>
      <div>
        <div data-cy="shoe-name">{shoesData.name}</div>
        <div data-cy="shoe-category">{shoesData.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
