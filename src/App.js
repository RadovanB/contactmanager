import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch }  from 'react-router-dom';
import Contacts from './components/contact/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import About from './components/pages/About';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager Props"/>
            <div className="container">
                <Switch>
                  <Route exact path='/' component={Contacts} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/contact/add' component={AddContact} />
                  <Route exact path='/contact/edit/:id' component={EditContact} />
                  <Route exact path='/test' component={Test} />
                  <Route component={NotFound} />
                </Switch>
            </div>
          </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
