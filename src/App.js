import Navbar from "./components/elements/Navbar";
import Contacts from "./components/contacts/Contacts";
import AddContacts from "./components/contacts/AddContacts";
import EditContact from "./components/contacts/EditContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/App.scss";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container py-3">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/contacts/add" component={AddContacts}></Route>
              <Route
                exact
                path="/contacts/edit/:id"
                component={EditContact}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
