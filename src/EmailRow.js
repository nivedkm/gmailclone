import React from "react";
import "./EmailRow.css";
import CheckBox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const history = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({ id, title, subject, description, time }));
    history("/mail");
  };
  return (
    <div onClick={openMail} className="emailrow">
      <div className="emailrow-options">
        <CheckBox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailrow-title">{title}</h3>
      <div className="emailrow-message">
        <h4>
          {subject} <span className="emailrow-description">-{description}</span>
        </h4>
      </div>
      <div className="emailrow-time">{time}</div>
    </div>
  );
}

export default EmailRow;
