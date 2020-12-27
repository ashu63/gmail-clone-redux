import React from "react";
import "./MailData.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import InfoIcon from "@material-ui/icons/Info";
import DeleteIcon from "@material-ui/icons/Delete";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import MailIcon from "@material-ui/icons/Mail";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import LabelIcon from "@material-ui/icons/Label";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { Button, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

function MailData() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail)
  return (
    <div className="mailData">
      <div className="mailData__topIcons">
        <div className="mailData__left">
          <IconButton>
            <ArrowBackIcon onClick={() => history.push("/")} />
          </IconButton>
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton>
            <InfoIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <MailIcon />
          </IconButton>
          <IconButton>
            <PlaylistAddIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <LabelIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mailData__right">
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
      <div className="mailData__body">
        <div className="mailData__bodyHeader">
          <h4>{selectedMail?.subject}</h4>
          <LabelImportantIcon className="labelImportant" />
          <p>{selectedMail?.title}</p>
          <div className="time">
            <p>{selectedMail?.time}</p>
          </div>
        </div>
        <div className="mailData__bodyMessage">
          <p>{selectedMail?.message}</p>
        </div>
      </div>
    </div>
  );
}

export default MailData;
