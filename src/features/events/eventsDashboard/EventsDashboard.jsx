import React, {useEffect} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import {useSelector, useDispatch} from 'react-redux'
import EventListItemPlaceholder from './EventListPlaceholder';
import EventFilters from './EventFilters';
import { listenToEventsFromFirestore, getEventsFromFirestore, dataFromSnaphot } from '../../../app/firestore/firestoreService';
import { listenToEvents } from '../eventActions';
import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection';


export default function EventDashboard(){
  const {events} = useSelector((state) => state.event);
  const {loading} = useSelector((state) => state.async);
  const dispatch = useDispatch();


 /* useEffect(() => {
    const unsubscribe = getEventsFromFirestore({
      next: snapshot => console.log(snapshot.docs.map(docSnapshot => dataFromSnaphot(docSnapshot))),
      error: error => console.log(error)
    })
    return unsubscribe;
  })*/
  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: events => dispatch(listenToEvents(events)),
    deps: [dispatch]
  })

  return(
    <Grid>
      <Grid.Column width={10}>
        {loading &&
        <>
        <EventListItemPlaceholder/>
        <EventListItemPlaceholder/>
        </>
        }
        <EventList events={events}/>
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters/>        
      </Grid.Column>
    </Grid>
  )
}