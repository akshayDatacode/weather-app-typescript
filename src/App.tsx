import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Header from './Header'
import Latest from './Latest'
import History from './History'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container maxWidth="sm">
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Latest} />
            <Route path="/history" component={History} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}
