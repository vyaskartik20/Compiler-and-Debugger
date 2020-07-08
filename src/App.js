import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Background from './images/coding17.jpg'

// https://source.unsplash.com/random

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://picsum.photos/1500)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor:'black'
  },
  other: {
    backgroundColor:'rgb(36,2,11)',
    // backgroundImage: require('./coding.jpg')
    // <img src={'./coding.jpg'} />
    // color:'white'
    // backgroundImage: `url(${Background})`
  }
}));


// rgb(36,2,11)
// 82, 255, 128
// 255, 122, 235
// 82, 17, 72
// 26, 4, 22


export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} className={classes.other} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
           */}
          <AppBar position="static"  style={{ background: 'inherit' }} >
            <Toolbar>
              <Typography variant="h3" style={{color:'rgb(26,80,22)'}} >
                Pacify 
              </Typography>
            </Toolbar>
          </AppBar>
          <div style={{ marginTop:'18%', marginBottom:'6%' ,width: '40%' }} >
            <Button variant="contained" size="large" style={{width: '100%',color:'red', backgroundColor:'white'}} href="#contained-buttons">
              Compiler
            </Button>
          </div>
          <div style={{margin:'6%',width: '40%' }}>
            <Button variant="contained" size="large" style={{width: '100%',color:'red', backgroundColor:'white'}} href="#contained-buttons">
              Test Case Genreator
            </Button>
          </div>
          <div style={{margin:'6%',width: '40%'}}>
            <Button variant="contained" size="large" style={{width: '100%' ,color:'red', backgroundColor:'white'}}  href="#contained-buttons">
              Debugger
            </Button>
          </div>
          {/* <div></div> */}
          <div style={{alignSelf:'flex-end', justifyContent:'space-between', marginTop:'6%'}}>
            <h3 style={{color:'white'}}>
              Developed by Aditya and Kartik
            </h3>
          </div>
        </div>
      </Grid>
      {/* <Grid item xs={false} sm={4} md={4} className={classes.image} /> */}
    </Grid>
  );
}


// rgb(255,0,100)







// import React, { Component } from 'react';
// import AceEditor from 'react-ace';
// import 'brace/mode/c_cpp'
// import 'brace/theme/monokai'
// // import 'acemodes'

// export default class Main extends Component {
//   render() {
//     return (
//     <div >
//       <AceEditor 
//         mode="c_cpp" 
//         theme="monokai"
//         setOptions={{
//           enableBasicAutocompletion: true,
//           enableLiveAutocompletion: true,
//           enableSnippets: true
//         }}
//         placeholder="Happy Coding ):) "
//       />
//     </div>
//     );
//   }
// }












// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React 
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
