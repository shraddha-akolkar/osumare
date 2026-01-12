import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import Productivity from "./components/Productivity";
import Testimonials from "./components/Testimonials";
import Organizing from "./components/Organizing";
import Footer from "./components/Footer";
import Form from "./components/Form";
import SuccessPopup from "./components/SuccessPopup";
import Table from "./components/Table";

function App() {
  const [open, setOpen] = useState(false);
  const [showSuccess,setSuccess] = useState(false);
  const [users,setUsers] = useState([]);

  const handleForm = (data) => {
    setUsers(prev => [...prev,data]);
    setOpen(false);
    setSuccess(true);
  };

  return (
    <>
    <Navbar />
      <div className={(open || showSuccess) ? "blur-sm pointer-events-none" : ""}>
        
        <Hero openForm={() => setOpen(true)} />
        <CardSection/>
        <Productivity />
        <Testimonials />
        <Organizing />
       <Table users ={users}/>
      </div>

    {open && <Form close ={() => setOpen(false)} onSubmit={handleForm} />}
      {showSuccess && <SuccessPopup close={() => setSuccess(false)} />}
         <Footer />
    </>
  );
}

export default App;
