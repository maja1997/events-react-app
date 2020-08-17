import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Button } from 'semantic-ui-react';
import { INREMENT_COUNTER, DECREMENT_COUNTER } from './testReducer';

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.test.data)
  return (
    <>
      <h1>Testing</h1>
      <h2>The data is: {data}</h2>
      <Button onClick={() => dispatch({type: INREMENT_COUNTER})} content='Increment' color='green' />
      <Button onClick={() => dispatch({type: DECREMENT_COUNTER})} content='Decrement' color='red' />

    </>
  )
}