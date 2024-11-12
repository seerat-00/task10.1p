import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
        <Menu.Item header>DEV@Deakin</Menu.Item>
        <div style={{ width: '300px' }}>
            <Menu.Item>
                    <Input icon='search' placeholder='Search...' fluid />
            </Menu.Item>
        </div>

        <Menu.Menu position='right'>
            <Menu.Item>
                <Button primary>Post</Button>
            </Menu.Item>
            <Menu.Item>
                <Button primary>Login</Button>
            </Menu.Item>
        </Menu.Menu>
  </Menu>
);

export default Navbar;
