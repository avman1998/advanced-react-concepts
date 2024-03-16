const RegularList = ({ data, sourceName, ListItemComponent }) => {
  return (
    <>
      {data?.map((item) => {
        var itemProp = { [sourceName]: item };
        return <ListItemComponent {...itemProp} />;
      })}
    </>
  );
};

export default RegularList;
