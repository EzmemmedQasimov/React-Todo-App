import Header from "./components/Header";
import Input from "./components/Input";
import ListContent from "./components/ListContent";
import {useSelector} from "react-redux";

function App() {
    const {todoList,todoFilter} = useSelector(state => state.todo)
    console.log(todoList,todoFilter)
  return (
    <div className="md:container md:mx-auto">
      <Header>
          <Input />
          <ListContent />
      </Header>
    </div>
  );
}

export default App;
