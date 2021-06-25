# Jitsi-Meet-Raider
<img alt="GitHub" src="https://img.shields.io/github/license/roo7k1d/d0x-k1t-v2">
<img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/roo7k1d/d0x-k1t-v2">


This is a little Jitsi Meet Raider with features like siren earrape, chat spam, multiple bots etc.

WARNING: THIS IS FOR EDUCATIONAL PURPOSES ONLY! I AM NOT RESPONSIBLE FOR EVERY DAMAGE RESULTING FROM THIS!

## Preview
[![Preview.png](https://img.youtube.com/vi/HJ_AXiK7gyo/0.jpg)](https://www.youtube.com/watch?v=HJ_AXiK7gyo)

## Support
For quick support you can join my [Discord](https://discord.gg/QQaWvMkFbs)

## Installation Guide
- Download the ZIP folder
- Download [NodeJS](https://nodejs.org/en/download/)
- Execute `npm i` in the downloaded folder
- In `config.json` you can adjust everything to your liking:
```
{
    "url": "YourRoomURL", //Your Jitsi Meet URL
    "numberofbots": "YourBotAmount", //The desired number of bots you want (WARNING: Currently the script is very computationally intensive, more bots will probably cause your pc to lag!)
    "haspassword": false, //Whether the meeting uses a password or not
    "password": "YourRoomPassword", //The password the meeting uses (if "haspassword" is true)
    "message": "YourMessage", //The message you want the bots to send
    "writemessage": true, //Whether or not you want every bot to repeatedly send your custom message
    "raisehands": true, //Whether or not you want every bot to repeatedly raise their hands
    "userandomnames": true, //Whether or not you want the bots to have randomly generated usernames
    "customname": "YourCustomBotsName", //The name the bots will have if "userandomnames" is true
    "mintimebetweenmsg": 500, //The minimum time between sent messages in ms
    "maxtimebetweenmsg": 2000, //The maximum time between sent messages in ms
    "muteeveryone": true, //Mute everyone in the call?
    "disableallcameras": false, //Disable all active camera feeds in call?
    "playaudio": true //Whether or not you want the bots siren sound to be repeatedly played
}
```
- (If you download the source code: Download `hacked.y4m` from [here](https://anonfiles.com/X4z3D0w5u5/hacked_y4m) and move it into the `media` folder)
- Execute `node index.js` to run the script
- Done!

## Features
- Join a Jitsi Meeting with multiple bots
- Spam the text chat
- Siren sound voice chat spam
- "Come forward" button spam
- "Welcome to the Game" skull fake camera

## Feedback
Feedback is great! If you have a suggestion or request, create an issue! Similarly, if you have any issues, use the issue tab to let us know.

## Todo
- Ability to use proxies
- Direct message spam
- Ability to turn off fake cam
- Make script less resource intensive
- Better console logging

## Contributing
You can help develop this project by doing some things of the todolist and making a pull request. If you have some even better ideas on how this project can be improved you can also make a pull requrest.
