import React, {useState} from 'react';
import './styles.css';
import EventDashboard from '../../features/events/eventsDashboard/EventsDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);

  }
  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen}/>
      <Container className='main'>
        <EventDashboard 
        setFormOpen={setFormOpen} 
        formOpen={formOpen}
        selectEvent={handleSelectEvent}
        selectedEvent={selectedEvent}
        />
      </Container>     
    </>
  );
}

export default App;
