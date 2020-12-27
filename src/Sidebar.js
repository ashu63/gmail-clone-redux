import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import SnoozeIcon from "@material-ui/icons/Snooze";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideocamIcon from "@material-ui/icons/Videocam";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
function Sidebar() {

  const dispatch = useDispatch()

  return (
    <div className="sidebar">
      <div className="compose">
        <Button variant="outlined" onClick={() => dispatch(openSendMessage())}> <AddIcon className="plus" /> Compose</Button>        
      </div>
      <div className="sidebar__rows">

      <SidebarRow title = "Inbox" Icon={InboxIcon} selected noOfMails="1,955" />
      <SidebarRow title = "Starred" Icon={StarIcon}/>
      <SidebarRow title = "Snoozed" Icon={SnoozeIcon}/>
      <SidebarRow title = "Sent" Icon={SendIcon}/>
      <SidebarRow title = "Drafts" Icon={DraftsIcon}/>
      <SidebarRow title = "More" Icon={ExpandMoreIcon}/>
      </div>
      <div className="sidebar__rowsBottom">
    <h4>Meet</h4>
      <SidebarRow title = "New Meeting" Icon={VideocamIcon}/>
      <SidebarRow title = "Join a Meeting" Icon={CalendarTodayIcon}/>
      </div>


    </div>
  )
}

export default Sidebar
