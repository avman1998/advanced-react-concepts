const NumberedList = ({ items }) => {
  console.log("Items", items);
  return (
    <ol>
      {items?.map((item, index) => {
        return <li>{item}</li>;
      })}
    </ol>
  );
};

export default NumberedList;
