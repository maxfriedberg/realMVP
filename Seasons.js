import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Box, Slider, Grid } from "@mui/material";

const Seasons = (props) => {
  const navigate = useNavigate();
  const seasons = [
    { year: "2013 - 2014", id: "14" },
    { year: "2014 - 2015", id: "15" },
    { year: "2015 - 2016", id: "16" },
    { year: "2016 - 2017", id: "17" },
    { year: "2017 - 2018", id: "18" },
    { year: "2018 - 2019", id: "19" },
    { year: "2019 - 2020", id: "20" },
    { year: "2020 - 2021", id: "21" },
    { year: "2021 - 2022", id: "22" },
    { year: "2022 - 2023", id: "23" },
  ];

  const [selectedYear, setSelectedYear] = useState("");

  const handleSliderChange = (event, value) => {
    setSelectedYear(value);
  };

  const handleGoButtonClick = () => {
    navigate(`/seasons/${selectedYear}`);
  };

  return (
    <>
      <Typography variant="h1">Season Selector</Typography>
      <Slider
        min={14}
        max={23}
        step={1}
        value={selectedYear}
        onChange={handleSliderChange}
        marks={seasons.map((season) => ({ value: parseInt(season.id), label: season.year }))}
      />
      <Box display="flex" justifyContent="center">
        <Button variant="contained" onClick={handleGoButtonClick} disabled={!selectedYear}>
          Go
        </Button>
      </Box>
      <br />
      <Button variant="contained" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </>
  );
};

export default Seasons;
