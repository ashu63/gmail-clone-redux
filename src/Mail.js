import React, { useEffect, useState } from "react";
import "./Mail.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReplayIcon from "@material-ui/icons/Replay";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button, IconButton } from "@material-ui/core";
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MailsSection from "./MailsSection";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AllMails from "./AllMails";
import { db } from "./firebase";


function Mail() {
  const[emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
      setEmails(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    ))
  }, [])
  return (
    <div className="mail">
        <div className="mail__main">
      <div className="mail__top">
        <div className="mail__topLeft">
          <IconButton>
            <CheckBoxOutlineBlankIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon  />
            </IconButton>

          <IconButton>
              <ReplayIcon />
            </IconButton>
            <IconButton>

            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__topRight">
        <Button>1-50 of 58</Button>
        <IconButton>
        <ChevronLeftIcon />
        </IconButton>
        <IconButton>
        <ChevronRightIcon />
        </IconButton>
        <IconButton>
        <KeyboardIcon />
        </IconButton>
      </div>
      </div>
      <div className="mail__sections">
      <MailsSection title="Primary" color="red" selected Icon={InboxIcon}/>
      <MailsSection title="Social" color="#1A73E8" Icon={PeopleIcon}/>
      <MailsSection title="Promotion" color="green" Icon={LocalOfferIcon}/>
      </div>
    <div className="mail__mails">
      {emails.map(({id, data: {to, subject, message, timestamp}}) => (
        <AllMails
        key={id}
        title={to}
        subject={subject}
        message={message}
        time={new Date(timestamp?.seconds * 1000).toUTCString()}
        />
      ))}
    </div>
    </div>
  );
}

export default Mail;
