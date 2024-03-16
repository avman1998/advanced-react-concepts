import React from "react";

const SmallBookListItem = ({ book }) => {
  const { title, genre } = book;
  return (
    <div>
      <p>{title}</p>
      <p>{genre}</p>
    </div>
  );
};

export default SmallBookListItem;
