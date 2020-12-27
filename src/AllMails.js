import React from "react";
import "./AllMails.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { IconButton } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import {useHistory} from "react-router-dom"
import { useDispatch } from "react-redux";
import { selectedMail } from "./features/mailSlice";

function AllMails({id, title, subject, message, time }) {
    const history = useHistory();
    const dispatch = useDispatch()

    const openMail = () => {
      dispatch(
        selectedMail({
          id, title, subject, message, time,
        })

      )
      history.push('/mailData')
    }
  return (
    <div className="allMails" onClick={openMail} >
      <div className="allMails__icons">
        <IconButton>
          <CheckBoxOutlineBlankIcon className="firstIcon"/>
        </IconButton>
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className="allMails__title">
        <h4>{title}</h4>
      </div>
      <div className="allMails__subject">
        <h4>
          {subject} <span className="allMailsDescription"> {message}</span>{" "}
        </h4>
      </div>
      <div className="allMails__time">
        <p> {time}</p>
      </div>
    </div>
  );
}

export default AllMails;
