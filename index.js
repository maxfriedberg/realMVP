const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const cors = require('cors');


app.use(cors());
app.set('view engine', 'ejs');


const playersSchema = new mongoose.Schema({
    name: {
        type: String
    },
    ppg: {
        type: Number
    },
    per: {
        type: Number
    },
    vorp: {
        type: Number
    },
    ws48: {
        type: Number
    },
    wins: {
        type: Number
    },
    place: {
        type: Number
    }
});

mongoose.connect("mongodb+srv://maxfried:maxfried@mernapp.ew85qwr.mongodb.net/realMVP?retryWrites=true&w=majority");

app.get("/", async (req, res) => {
    res.sendFile(__dirname + "/templates/index.html");
});

app.get("/season", async (req, res) => {
    res.sendFile(__dirname + "/templates/seasonselector.html");
});

app.get("/season/:id", async (req, res) => {
    try{
        let season = req.params.id;
        let prefix = "players";
        let coll = prefix.concat(season);

        const playersModel = mongoose.model(coll, playersSchema);

        const players = await playersModel.find({});

        const playersList = [];

        for (let i = 0; i < players.length; i++){
            var playerDict = {
                name: players[i].name,
                ppg: players[i].ppg,
                per: players[i].per,
                vorp: players[i].vorp,
                ws48: players[i].ws48,
                wins: players[i].wins,
                place: players[i].place
            };
            playersList[i] = playerDict;
        }
        res.json({
            season: season,
            players: playersList
        });
        //res.render('season.ejs', {
          //  season: season,
          //  players: playersList
        //});
    } catch (err){
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log("Server running...");
});