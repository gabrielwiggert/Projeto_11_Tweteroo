import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tweets = [];

app.post('/sign-up', (req, res) => {
  let user = req.body;
  users.push(user);
  res.send("OK");
});

app.post('/tweets', (req, res) => {
    let response = req.body;
    let username = response.username;
    let tweet = response.tweet;
    let correspondingUser = users.find(user => user.username === response.username);
    let avatar = correspondingUser.avatar;
    let fullTweet = {
        username,
		avatar,
	    tweet
    }
    tweets.push(fullTweet);
    res.send("OK");
  });

app.get("/tweets", (req, res) => {
    res.send(tweets);
});

app.listen(5000);