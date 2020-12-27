import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from 'firebase'

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch()

  const onSubmit = (data) => {
      db.collection("emails").add({
          to: data.to,
          subject: data.subject,
          message: data.message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

      dispatch(closeSendMessage())
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="closeIcon" onClick={() => dispatch(closeSendMessage())}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="to"
          placeholder="To"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required!</p>}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          ref={register({ required: true })}
        />
                {errors.to && <p className="sendMail__error">Subject is required!</p>}

        <input
          type="text"
          name="message"
          placeholder="Message"
          className="message__field"
          ref={register({ required: true })}
        />
                {errors.to && <p className="sendMail__error">Message is required!</p>}

        <div className="form__button">
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
