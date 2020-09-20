import React from 'react';
import Home from './pages/Home';
import MessengerCustomerChat from 'react-messenger-customer-chat';
//token EAAhtQCA7ZAykBACPo6N0xbBLwN8ylZAF2emowXQX7d14iwSZCREGUFd7wAqR9nRdTznx7ZAliafMLRl68uoZC3mH45Hh411ZCckZArStBw0PUzj7noLsUYptcZAZAZBUawsf8Th7zZCY2pbOFF1GIBgnbqxkRZCPUpcZCpQOnapQVPXzfxKfbAOtZC83YUCkRG3JSIwU8ZD
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Home />
      <MessengerCustomerChat
        pageId='119546696561154'
        appId='2371921999783721'
      />
    </div>
  );
}

export default App;
