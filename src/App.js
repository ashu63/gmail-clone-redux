import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Header from "./Header";
import Login from "./Login";
import Mail from "./Mail";
import MailData from "./MailData";
import SendMail from "./SendMail";
import Sidebar from "./Sidebar";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  return (
    <Router>
      {!user ? (
        <Login/>
      ) : (
<div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/maildata">
              <MailData />
            </Route>
            <Route path="/">
              <Mail />
            </Route>
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
      
    </Router>
  );
}

export default App;
