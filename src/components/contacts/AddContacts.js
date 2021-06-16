import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddContacts = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const createContact = (e) => {
    e.preventDefault();

    // data
    const new_contact = {
      id: shortid.generate(),
      name: user.name,
      phone: user.phone,
      email: user.email,
    };
    // push data to contacts object in store.js by ussing dispatch
    dispatch(addContact(new_contact));
    history.push("/");
  };

  const { name, phone, email } = user;

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
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
          <button className="btn btn-primary" type="submit">
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContacts;
