import React from 'react';
import './styles.css';
import EventDashboard from '../../features/events/eventsDashboard/EventsDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <>
      <NavBar/>
      <Container className='main'>
        <EventDashboard/>
      </Container>     
    </>
  );
}

export default App;
