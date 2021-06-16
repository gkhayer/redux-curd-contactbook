import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getContact, updateContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory, useParams } from "react-router-dom";

const EditContact = () => {
  let history = useHistory();
  let { id } = useParams();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contactsAnyname.contact); // initial value of contact (2nd item is initialstate) that is null
  console.log("first time")
  console.log(contact)
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    // display data to input fields
    if (contact !== null) {
        setUser(contact)
    }

    // pass id to the reducer so that it coud match with its initialState array list and return 
    dispatch(getContact(id));
  }, [contact]);

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onUpdate = (e) => {
      e.preventDefault();

      const update_Contact = Object.assign(contact, {name: name, phone: phone, email:email})
      dispatch(updateContact(update_Contact));
      history.push('/')
  };

  const { name, phone, email } = user;

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdate(e)}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter your phone"
              name="phone"
              value={phone}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <button className="btn btn-danger" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
