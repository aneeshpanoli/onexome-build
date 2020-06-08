import React from 'react';
import { mainPalette } from '../components/themes'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Navbar from '../navigation/navbar'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useDispatch } from 'reactive-react-redux';

const theme = createMuiTheme(mainPalette);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function homePage (){
    return (
        <div>
        <Navbar />
        <Hero />
        <Footer />
        </div>
    );
}
