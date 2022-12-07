import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import AddForm from "../components/AddForm";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <Layout>
      <Header />
      <AddForm />
      <TodoList />
    </Layout>
  );
};

export default Home;
