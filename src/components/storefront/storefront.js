import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


import store from '../../store/'
import {Provider} from 'react-redux';
import Categories from './categories.js'
import CurrentCategory from './current-category.js'
import Products from './products.js'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },

}));

function StoreFront() {
  const classes = useStyles();


   return (
    <Provider store={store}>

       {/*  what happens when maxWidth is set to xs, xl? */}
       <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Page Header
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Here's some really cool things you can do
        </Typography>
      </Container>
      <CurrentCategory />
      <Categories />
      <Products />
    </Provider>
   )
}

export default StoreFront;
