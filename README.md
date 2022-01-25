<img src="https://cdn.discordapp.com/attachments/820416224005586945/886620544122908762/jitsi-meet-raider.png">
<p align="center"><i>For raiding Jitsi Meet conferences with bots with features like earrape, chat spam and synced spoofed camera feed.</i></p>
<div align="center">
  <a href="https://github.com/roo7k1d/jitsi-meet-raider/stargazers"><img src="https://img.shields.io/github/stars/roo7k1d/jitsi-meet-raider?color=yellow" alt="Stars Badge"/></a>
<a href="https://github.com/roo7k1d/jitsi-meet-raider/network/members"><img src="https://img.shields.io/github/forks/roo7k1d/jitsi-meet-raider?color=orange" alt="Forks Badge"/></a>
<a href="https://github.com/roo7k1d/jitsi-meet-raider/pulls"><img src="https://img.shields.io/github/issues-pr/roo7k1d/jitsi-meet-raider" alt="Pull Requests Badge"/></a>
<a href="https://github.com/roo7k1d/jitsi-meet-raider/issues"><img src="https://img.shields.io/github/issues/roo7k1d/jitsi-meet-raider" alt="Issues Badge"/></a>
<a href="https://github.com/roo7k1d/jitsi-meet-raider/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/roo7k1d/jitsi-meet-raider?color=2b9348"></a>
<a href="https://github.com/roo7k1d/jitsi-meet-raider/blob/master/LICENSE"><img src="https://img.shields.io/github/license/roo7k1d/jitsi-meet-raider?color=2b9348" alt="License Badge"/></a>
<br>
<a href="https://github.com/roo7k1d/jitsi-meet-raider/"><img src="https://img.shields.io/github/repo-size/roo7k1d/jitsi-meet-raider?color=important" alt="License Badge"/></a>
<a href="https://github.com/roo7k1d/jitsi-meet-raider/"><img src="https://img.shields.io/tokei/lines/github/roo7k1d/jitsi-meet-raider?color=yellowgreen" alt="License Badge"/></a>
<a href="https://github.com/roo7k1d/jitsi-meet-raider/releases"><img src="https://img.shields.io/github/v/release/roo7k1d/jitsi-meet-raider?color=success" alt="License Badge"/></a>
<a href="https://github.com/roo7k1d/jitsi-meet-raider/commits"><img src="https://img.shields.io/github/last-commit/roo7k1d/jitsi-meet-raider" alt="License Badge"/></a>
</div>
<br>
<p align="center"><a href="https://github.com/roo7k1d/jitsi-meet-raider/issues">Report a Bug</a> | <a href="https://github.com/roo7k1d/jitsi-meet-raider/issues">Request a New Feature</a> | <a href="https://github.com/jitsi-meet-raider/pulls">Help Develop This Project</a> | <a href="https://ko-fi.com/RootK1d">Fund Me</a></p>
<p align="center"><i>Loved the project? Please consider giving a star</i> :)</p>

<hr>
<br>
WARNING: THIS IS FOR EDUCATIONAL PURPOSES ONLY! I AM NOT RESPONSIBLE FOR ANY DAMAGE OR DISTURBANCE RESULTING FROM THIS!
<br>
NOTE: THIS SCRIPT ONLY WORKS FOR [JITSI MEET](https://meet.jit.si/) AND NO OTHER VIDEO CONFERENCE SOFTWARES LIKE ZOOM OR BIGBLUEBUTTON!
<br>

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

<hr>

## Demo
[![Preview.png](https://cdn.discordapp.com/attachments/820416224005586945/886622989947371651/unknown.png)](https://www.youtube.com/watch?v=HJ_AXiK7gyo)
<br>
<br>
Click on the image to watch the [YouTube video](https://www.youtube.com/watch?v=HJ_AXiK7gyo) i made on this project.

<hr>

## Support
For support you can create an issue [here on GitHub](https://github.com/rootk1d/jitsi-meet-raider/issues) or you can join my [Discord](https://discord.gg/QQaWvMkFbs).

<hr>

## Features
- Join a Jitsi Meeting with multiple bots
- Spam the text chat
- Siren sound voice chat spam
- "Come forward" button spam
- "Welcome to the Game" skull fake camera

<hr>

## Feedback
Feedback is great! If you have a suggestion or request, create an issue! Smilarly, if you have any issues, use the issue tab to let us know.

<hr>

## Copyright
You are not allowed to remove any part of the footer. That includes all of the info about the copyright. If you wish to remove that info feel free to contact me on my [Discord](https://discord.gg/QQaWvMkFbs)

<hr>

## Todo (See Issues with tag "help wanted")
- Ability to use proxies
- Direct message spam
- Ability to turn off fake cam
- Make script less resource intensive
- Better console logging

<hr>

## Contributing
You can help develop this project by doing some things of the todolist and making a pull request. If you have some even better ideas on how this project can be improved you can also make a pull request.

<hr>

## License
This repo is licensed under MIT. For more information see file "LICENSE".
