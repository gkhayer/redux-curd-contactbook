import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const SingleContact = ({ contact }) => {
  // {contact} is prop coming from contacts

  const { name, phone, email , id} = contact;
  return (
    <tr>
      <td scope="col">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="40" round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <Link to = {`contacts/edit/${id}`}>
          <span className="material-icons">edit</span>
        </Link>
        <Link to="#">
          <span className="material-icons">remove_circle</span>
        </Link>
      </td>
    </tr>
  );
};

export default SingleContact;
