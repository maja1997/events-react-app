import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux'
import {useHistory} from 'react-router'
import { toast } from 'react-toastify';
import { signOutFirebase } from '../../app/firestore/firebaseService';

export default function SignedInMenu() {
  const history = useHistory();
  const {currentUser} = useSelector(state => state.auth)

  async function handleSignOut() {
    try {
      history.push('/');
      await signOutFirebase();

    }catch(error){
      toast.error(error.message)
    }
  }
  return(
    <Menu.Item position='right'>
      <Image avatar spaced='right' src={currentUser.photoURL || '/assets/user.png'}/>
      <Dropdown pointing='top left' text={currentUser.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item text='My profile' icon='user'/>
          <Dropdown.Item as={Link} to ='/account' text='My account' icon='settings'/>

          <Dropdown.Item 
          onClick={handleSignOut } 
          text='Sign out' 
          icon='power'/>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )

}