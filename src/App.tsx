import React from "react";
import "./App.css";
import Route from "./components/Route";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/navigator?tab=0">
        <Table filterSign="income" />
      </Route>
      <Route path="/navigator?tab=1">
        <Table filterSign="outcome" />
      </Route>
      <Route path="/navigator?tab=2">
        <Table filterSign="loan" />
      </Route>
      <Route path="/navigator?tab=3">
        <Table filterSign="investment" />
      </Route>
    </div>
  );
}

export default App;
