import { CREATE_CONTACT } from "../constant/types";
import { GET_CONTACT } from "../constant/types";
import { UPDATE_CONTACT } from "../constant/types";

//add a contact
export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

//get a contact
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id
});


//update a contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact
});
