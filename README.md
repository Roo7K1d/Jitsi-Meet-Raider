<img src="http://rootk1d.xyz/github/jitsi/banner.png">
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
<br>
<a href="https://discord.gg/QQaWvMkFbs"><img src="https://img.shields.io/discord/801802083757457418?logo=discord&label=discord"/></a>
</div>
<br>
<p align="center"><a href="https://github.com/roo7k1d/jitsi-meet-raider/issues">Report a Bug</a> | <a href="https://github.com/roo7k1d/jitsi-meet-raider/issues">Request a New Feature</a> | <a href="https://github.com/jitsi-meet-raider/pulls">Help Develop This Project</a> | <a href="https://ko-fi.com/RootK1d">Fund Me</a></p>
<p align="center"><i>Loved the project? Please consider giving a star</i> :)</p>

<hr>
<br>
WARNING: THIS IS FOR EDUCATIONAL PURPOSES ONLY! I AM NOT RESPONSIBLE FOR ANY DAMAGE OR DISTURBANCE RESULTING FROM THIS!
<br>
<br>
NOTE: THIS SCRIPT ONLY WORKS FOR <a href="https://meet.jit.si/">JITSI MEET</a> AND NO OTHER VIDEO CONFERENCE SOFTWARES LIKE ZOOM OR BIGBLUEBUTTON!
<br>

## Installation Guide
- Download the ZIP folder
- Download [NodeJS](https://nodejs.org/en/download/)
- Execute `npm i` in the downloaded folder
- In `config.json` you can adjust everything to your liking:
```
{
    "url": "YourJitsiMeetURL", //Your Jitsi Meet URL (e.g. "https://meet.jit.si/Test123Max12")
    "numberofbots": 5, //The number of bots you want to join
    "haspassword": false, //If Jitsi meeting uses password
    "password": "YourJitsiMeetPassword", //The meeting password if "haspassword" = true
    "message": "YourCustomMessage", //The custom message you want the bots to send
    "writemessage": true, //Should the bots send messages?
    "raisehands": true, //Should the bots raise their hands on join?
    "userandomnames": true, //Uses randomly generated bot usernames (if false - see "customname")
    "customname": "YourCustomBotsName", //The name you want the bots to have
    "playvideo": true, //Should the bots play the Welcome To The Game skull as spoofed cam?
    "playaudio": true //Should the bots play the Purge siren as spoofed mic?
}
```
- (If you download the source code: Download `hacked.y4m` from [here](http://rootk1d.xyz/github/jitsi/hacked.y4m) & `black.y4m` from [here](http://rootk1d.xyz/github/jitsi/black.y4m) and move them into the `media` folder)
- Execute `node index.js` to run the script
- Done!

<hr>

## Demo
[![Preview.png](http://rootk1d.xyz/github/jitsi/screenshot.png)](https://www.youtube.com/watch?v=HJ_AXiK7gyo)
<br>
<br>
Click on the image to watch the [YouTube video](https://www.youtube.com/watch?v=HJ_AXiK7gyo) i made on this project.

<hr>

## Support
I will not teach you how to code or edit basic JSON files. Just use Google if you need help with that.
<br>
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
- Better console logging

<hr>

## Contributing
You can help develop this project by doing some things of the todolist and making a pull request. If you have some even better ideas on how this project can be improved you can also make a pull request.

<hr>

## License
This repo is licensed under MIT. For more information see file "LICENSE".
