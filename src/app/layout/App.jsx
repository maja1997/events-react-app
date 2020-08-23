import React from 'react';
import './styles.css';
import EventDashboard from '../../features/events/eventsDashboard/EventsDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import {Route, useLocation} from 'react-router-dom'
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import ModalManager from '../common/modals/ModalManager';
import { ToastContainer } from 'react-toastify';
import ErrorComponent from '../common/errors/ErrorComponent';
import AccountPage from '../../features/auth/AccountPage';
import { useSelector } from 'react-redux';
import LoadingComponent from './LoadingComponent';
import ProfilePage from '../../features/profiles/profilePage/ProfilePage';

function App() {
  const {key} = useLocation();
  const {initialized} = useSelector( state => state.async);

  if(!initialized) return <LoadingComponent content='Loading app..' />

  return (
    <>
      <Route exact path='/' component={HomePage}/>
      <Route path={'/(.+)'} 
      render={() => (
        <>
        <ModalManager />
        <ToastContainer position='bottom-right'/>
        <NavBar/>
        <Container className='main'>
          <Route exact path='/events' component={EventDashboard}/>
          <Route path='/events/:id' component={EventDetailedPage}/>
          <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key}/>
          <Route path='/account' component={AccountPage} />
          <Route path='/profile/:id' component={ProfilePage} />
          
          <Route path='/error' component={ErrorComponent} />

        </Container>  
        </>
      )}/>
   
    </>
  );
}

export default App;
