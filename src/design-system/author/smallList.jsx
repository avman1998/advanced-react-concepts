import React from "react";

const SmallAuthorListItem = ({ author }) => {
  const { name, birth_year } = author;
  console.log("Author", author);
  return (
    <div>
      <p>{name}</p>
      <p>{birth_year}</p>
    </div>
  );
};

export default SmallAuthorListItem;
