// import "./App.css";
import SplitScreen, { Panel } from "./design-system/SplitScreen";
import NumberedList from "./design-system/NumberedList";
import { authors } from "./data/authors";
import { books } from "./data/books";
import SmallAuthorListItem from "./design-system/author/smallList";
import LargeAuthorListItem from "./design-system/author/largeList";
import SmallBookListItem from "./design-system/book/smallList";
import LargeBookListItem from "./design-system/book/largeList";
import RegularList from "./design-system/RegularList";
const Left = () => {
  return <Panel>This is left component.</Panel>;
};

const Right = () => {
  return <Panel>This is right component.</Panel>;
};
const items = ["Aman", "Kundan", "Tushar"];
function App() {
  return (
    <>
      {/* <SplitScreen
        leftWidth={1}
        leftBg={"orange"}
        rightBg={"yellow"}
        rightWidth={3}
      >
        <Left />
        <Right />
      </SplitScreen> */}

      <RegularList
        data={authors}
        sourceName={"author"}
        ListItemComponent={SmallAuthorListItem}
      />
      <RegularList
        data={authors}
        sourceName={"author"}
        ListItemComponent={LargeAuthorListItem}
      />

      <RegularList
        data={books}
        sourceName={"book"}
        ListItemComponent={SmallBookListItem}
      />
      <RegularList
        data={books}
        sourceName={"book"}
        ListItemComponent={LargeBookListItem}
      />
    </>
  );
}

export default App;
