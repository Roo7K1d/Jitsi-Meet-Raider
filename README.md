# Jitsi-Meet-Raider
This is a little Jitsi Meet Raider with features like siren earrape, chat spam, multiple bots etc.

WARNING: THIS IS FOR EDUCATIONAL PURPOSES ONLY! I AM NOT RESPONSIBLE FOR EVERY DAMAGE RESULTING FROM THIS!

## Support
For quick support you can join my [Discord](https://discord.gg/QQaWvMkFbs)

## Installation Guide
- Download the ZIP folder
- Download [NodeJS](https://nodejs.org/en/download/)
- Execute `npm i` in the downloaded folder
- In `config.json` you can adjust everything to your liking:
```
{
    "url": "YourJitsiMeetURL", //Your Jitsi Meet URL
    "numberofbots": "5", //The desired number of bots you want (WARNING: Currently the script is very computationally intensive, more bots will probably cause your pc to lag!)
    "haspassword": false, //Whether the meeting uses a password or not
    "password": "YourJitsiMeetPassword", //The password the meeting uses (if "haspassword" is true)
    "message": "YourCustomMessage", //The message you want the bots to send
    "writemessage": true, //Whether or not you want the bots to repeatedly send your custom message
    "raisehands": true, //Whether or not you want the bots to repeatedly raise their hands
    "userandomnames": true, //Whether or not you want the bots to have randomly generated usernames
    "customname": "YourCustomBotsName", //The name the bots will have if "userandomnames" is true
    "mintimebetweenmsg": 500, //The minimum time between sent messages in ms
    "maxtimebetweenmsg": 2000, //The maximum time between sent messages in ms
    "playaudio": true //Whether or not you want the bots siren sound to be repeatedly played
}
```
- Execute `node index.js` to run the script
- Done!

## Preview
A preview can be found here [here](http://youtube.com)


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

## Contributing
You can help develop this project by doing some things of the todolist and making a pull request. If you have some even better ideas on how this project can be improved you can also make a pull requrest.

