import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { signOutUser } from '../auth/authActions';
import {useHistory} from 'react-router'

export default function SignedInMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {currentUser} = useSelector(state => state.auth)
  return(
    <Menu.Item position='right'>
      <Image avatar spaced='right' src={currentUser.photoURL || '/assets/user/png'}/>
      <Dropdown pointing='top left' text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus'/>
          <Dropdown.Item text='My profile' icon='user'/>
          <Dropdown.Item 
          onClick={() => {
            dispatch(signOutUser());
            history.push('/');
          } } 
          text='Sign out' 
          icon='power'/>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )

}