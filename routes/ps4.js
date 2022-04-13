const express = require('express');
const fetch = require('node-fetch');

const {response} = require("express");
const config = require("../config.js");


const router = express.Router();
const request = require('request');


// redis
const redis = require('redis');
const client = redis.createClient();

client.on("error", function (error) {
    console.error(error);
});

let url_pre = config["endpoint"] + config["token"];

// GET Home - Promise
router.post('/promise', function (req, res, next) {

    let url = url_pre + req.body.city;
    const cached_key = req.body.city;

    client.get(cached_key, (err, result) => {
        if (result){
            res.json({
                humidity: data.main.humidity,
                temperature: data.main.temp
            });
        }else{
            // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
            fetch(url).then((resp) => resp.json()).then((body) => {
                client.set(cached_key, JSON.stringify(body));
                client.expire(cached_key, 15);
                res.json({
                    humidity: data.main.humidity,
                    temperature: data.main.temp
                })
            })
        }
    }

});

// ASYNC
router.post("/async", async function (req, res, next) {
    let url = url_pre + req.body.city;
    const response = await fetch(url);
    const data = await response.json();
    console.log(console.log(data));
    res.render("ps4", {
        humidity: data.main.humidity,
        temperature: data.main.temp
    });
});


// CALLBACK
router.post("/callback", function (req, res) {
    let url = url_pre + req.body.city;
    request(url, function (error, response, body) {
        if (error) {
            console.error("error:", error);
        }
        const data = JSON.parse(body);
        console.log(console.log(data));
        res.render("ps4", {
            humidity: data.main.humidity,
            temperature: data.main.temp
        });
    });
});



router.get("/", function (req, res) {
    res.render("form");
});

module.exports = router;