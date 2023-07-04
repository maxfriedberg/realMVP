import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { XAxis, YAxis, ScatterChart, Scatter, ZAxis } from 'recharts';
import axios from "axios";
import { Switch, FormGroup, FormControlLabel, Typography, Button } from "@mui/material";

const baseURL = "http://localhost:3001/season/";

const Season = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const fullURL = baseURL.concat(parseInt(id));
  const [playerData, setPlayerData] = useState([]);
  const [hiddenPlayers, setHiddenPlayers] = useState([]);

  useEffect(() => {
    axios.get(fullURL).then((response) => {
      setPlayerData(response.data.players);
    });
  }, []);

  const dataSet = [];

  var dataMax = 0;

  playerData.map((player) => {
    if (player.ppg > dataMax){
      dataMax = player.ppg;
    }

    const p = {
      name: player.name,
      ppg: player.ppg,
      z: 400
    };
    dataSet.push(p);
  });

  const togglePlayerVisibility = (playerName) => {
    setHiddenPlayers((prevHiddenPlayers) => {
      if (prevHiddenPlayers.includes(playerName)) {
        return prevHiddenPlayers.filter((name) => name !== playerName);
      } else {
        return [...prevHiddenPlayers, playerName];
      }
    });
  };

  const renderSwitches = () => {
    return playerData.map((player) => {
      const isHidden = hiddenPlayers.includes(player.name);
      return (
        <FormControlLabel
          key={player.name}
          control={
            <Switch
              checked={!isHidden}
              onChange={() => togglePlayerVisibility(player.name)}
            />
          }
          label={player.name}
        />
      );
    });
  };

  const filteredData = dataSet.filter((player) => !hiddenPlayers.includes(player.name));

  return (
    <>
      <Typography variant="h1">Season: {id}</Typography>
      <br />
      <FormGroup>{renderSwitches()}</FormGroup>
      <br />
      <ScatterChart width={600} height={500} fill="black">
        <XAxis dataKey="name" />
        <YAxis type="number" dataKey="ppg" domain={[1, dataMax + 2]} reversed />
        <ZAxis type="number" dataKey="z" range={[400, 400]} />
        <Scatter data={filteredData} fill="blue" shape="square" />
      </ScatterChart>
      <br />
      <Button variant="contained" onClick={() => navigate(-1)}>Go Back</Button>
    </>
  );
};

export default Season;