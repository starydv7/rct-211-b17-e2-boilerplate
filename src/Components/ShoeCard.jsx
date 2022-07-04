import React from "react";

const ShoeCard = ({shoes}) => {
  let shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <div>
        <img data-cy="shoe-card-image" src={shoes.image} width="100%" alt="" />
      </div>
      <div>
        <div data-cy="shoe-name">{shoes.name}</div>
        <div data-cy="shoe-category">{shoes.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
