import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <Navbar />
      <Button />
      <Alert />
      <Card />
      <Footer />
    </>
  );
};

export default App;
