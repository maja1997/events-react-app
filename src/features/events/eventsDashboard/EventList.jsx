import React from 'react';
import EventListItem from './EventListItem';
import {useSelector} from 'react-redux';

export default function EventList({events}){
  return (
    <>
      {events.map((event)=>(
         <EventListItem key={event.id} event = {event} />
      ))}
    </>
  )
}