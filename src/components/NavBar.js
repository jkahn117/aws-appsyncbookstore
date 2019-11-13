import React from 'react';

import { Link } from 'react-router-dom';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';

function NavBar({ currentUser=null, onSignOut }) {
  return (
    <div>
      <Menu fixed='top' pointing borderless>
        
        <Menu.Item header as={ Link } to='/'>
          <Icon name='book' />
          AppSync Bookstore
        </Menu.Item>

        { currentUser ? (
          <Menu.Menu position='right'>
            <Menu.Item as={ Link } to='/cart'>
              <Icon name='cart'/>
              Cart
            </Menu.Item>
            <Dropdown item text={`Welcome, ${currentUser.username}`}>
              <Dropdown.Menu>
                <Dropdown.Item>Profile</Dropdown.Item>
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
