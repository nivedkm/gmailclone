import React from "react";
import "./Mail.css";
import { IconButton } from "@mui/material";
import ErrorIcon from "@material-ui/icons/Error";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useNavigate } from "react-router-dom";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PrintIcon from "@material-ui/icons/Print";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

function Mail() {
  const history = useNavigate();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-toolsleft">
          <IconButton onClick={() => history("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail-toolsright">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-bodyheader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className="mail-important" />
          <p>{selectedMail?.title}</p>
          <p className="mail-time">{selectedMail?.time}</p>
        </div>
        <div className="mail-message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
