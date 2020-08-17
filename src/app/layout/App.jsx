import React, {useState} from 'react';
import './styles.css';
import EventDashboard from '../../features/events/eventsDashboard/EventsDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>
        <EventDashboard setFormOpen={setFormOpen} formOpen={formOpen}/>
      </Container>     
    </>
  );
}

export default App;
