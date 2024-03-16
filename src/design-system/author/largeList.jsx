import React from "react";

const LargeAuthorListItem = ({ author }) => {
  const { name, birth_year, country } = author;
  return (
    <div>
      <h1>{name}</h1>
      <p>{birth_year}</p>
      <p>{country}</p>
    </div>
  );
};

export default LargeAuthorListItem;
