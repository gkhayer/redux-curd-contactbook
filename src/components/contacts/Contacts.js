import React from "react";
import { useSelector } from "react-redux";
import SingleContact from "./SingleContact";

const Contacts = () => {
  const contacts = useSelector((state) => state.contactsAnyname.contacts);  //contactsAnyname coming from reducer index.js
  return (
    <div>
      <table className="table table-shadow table-striped">
        <thead className="bg-lightPink text-white">
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div>
            </th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
           <SingleContact key={contact.id} contact={contact}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
