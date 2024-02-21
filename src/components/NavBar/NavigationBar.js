import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, InputBase } from '@material-ui/core';
import { ShoppingCart, Search } from '@material-ui/icons';

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSignIn = () => {
    // Perform API call to log in the user using /auth endpoint
    // Upon successful login, set isLoggedIn to true and redirect to products page
    setIsLoggedIn(true);
    history.push('/products');
  };

  const handleSignUp = () => {
    // Perform API call to register the user using /users endpoint
    // Upon successful registration, set isLoggedIn to true and redirect to products page
    setIsLoggedIn(true);
    history.push('/products');
  };

  const handleLogout = () => {
    // Perform logout logic
    setIsLoggedIn(false);
    setIsAdmin(false);
    history.push('/');
  };

  const handleSearch = () => {
    // Perform search logic using /products endpoint
    console.log('Search for:', searchQuery);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="upGrad Eshop">
          <ShoppingCart />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          upGrad Eshop
        </Typography>
        {isLoggedIn ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <InputBase
                placeholder="Search…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
                style={{ marginRight: '10px' }}
              />
              <IconButton color="inherit" onClick={handleSearch}>
                <Search />
              </IconButton>
            </div>
            <Button color="inherit" component={Link} to="/products">
              Home
            </Button>
            {isAdmin && (
              <Button color="inherit" component={Link} to="/add-products">
                Add Products
              </Button>
            )}
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
