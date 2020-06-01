import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import ApiCall from "../containers/apiCall";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div className="display-div">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <ApiCall />
  </div>
);

export default App;
