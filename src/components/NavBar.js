import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { Link } from 'react-router-dom';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';

import { onCreateCartItem } from '../graphql/subscriptions';

function NavBar({ currentUser=null, onSignOut }) {
  const [ itemCount, setItemCount ] = useState(0);

  useEffect(() => {
    if (!currentUser) { return; }

    const { username } = currentUser;

    const subscription = API.graphql(graphqlOperation(onCreateCartItem,
          { owner: username })).subscribe({
      next: (data) => {
        setItemCount(itemCount + 1);
      }
    });

    return () => {
      subscription.unsubscribe();
    } 
  }, [ currentUser, itemCount ]);


  return (
    <div>
      <Menu fixed='top' size='huge' pointing borderless>
        <Menu.Item header as={ Link } to='/'>
          <Icon name='book' />
          AWS AppSync Bookstore
        </Menu.Item>

        { currentUser ? (
          <Menu.Menu position='right'>
            <Menu.Item as={ Link } to='/cart'>
              <Icon name='cart'/>
              Cart ({ itemCount })
            </Menu.Item>
            <Dropdown item text={`Welcome, ${currentUser.username}`}>
              <Dropdown.Menu>
                <Dropdown.Item as={ Link } to='/orders'>
                  My Orders
                </Dropdown.Item>
                <Dropdown.Item onClick={ onSignOut }>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        ) : (
          <Menu.Menu position='right'>
            <Menu.Item as={ Link } to='/auth'>
              <Icon name='user'/>
              Login
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    </div>
  );
}

export default NavBar;
