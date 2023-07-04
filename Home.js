import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  AppBar,
  Toolbar,
  CssBaseline,
} from "@mui/material";
import logo from './logo.png';
import './Home.css';

function Home(props) {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <CssBaseline />

      <AppBar position="fixed" style={{ backgroundColor: '#add8e6', top: 0, zIndex: 999 }}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <img src={logo} alt="Logo" style={{ width: '100px' }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div style={{ paddingTop: '64px' }} />

      <Container style={{ marginTop: '20px' }} width="100%">
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h3" gutterBottom fontWeight="bold" fontFamily="sans-serif">
              Welcome to realMVP
            </Typography>
          </Grid>
          <Grid item xs={12} container direction="column" alignItems="center" justifyContent="center" width="100%">
            <div className="description-box">
              <Typography variant="body1" gutterBottom fontFamily="Courier, monospace">
                This is the description box that fills up most of the page width and less height-wise. It can contain a longer text that wraps to multiple lines if needed.
              </Typography>
            </div>
            <div style={{ marginTop: '32px' }} /> {/* Added a gap of 32px */}
            <Typography variant="h4" gutterBottom fontFamily="sans-serif">
              Features
            </Typography>
            <div style={{ width: '350px', height: '75px', backgroundColor: 'white', border: '1px solid grey', padding: "4px" }}>
            <Typography variant="body1" gutterBottom fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif" fontWeight="350">
                Desc. of season selector
              </Typography>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/seasons")}
              style={{ marginTop: '16px' }}
            >
              Season Selector
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
