import React from "react";

const LargeBookListItem = ({ book }) => {
  const { title, publication_year, genre } = book;
  return (
    <div>
      <h1>{title}</h1>
      <p>{publication_year}</p>
      <p>{genre}</p>
    </div>
  );
};

export default LargeBookListItem;
