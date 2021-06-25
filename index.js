const puppeteer = require('puppeteer');
const { uniqueNamesGenerator, adjectives, colors, animals, NumberDictionary } = require('unique-names-generator');
const fs = require("fs");
const config = require("./config.json");



(async () => {


    const browser = await puppeteer.launch({
        args: [
            '--use-fake-ui-for-media-stream',
            '--use-file-for-fake-video-capture=' + __dirname + '/media/hacked.y4m',
            '--use-fake-device-for-media-stream',
            '--no-sandbox',
            '--allow-file-access-from-files',
            '--allow-running-insecure-content',
            '--disable-web-security',
            '--use-file-for-fake-audio-capture=' + __dirname + '/media/siren.wav',
            '--ignore-certificate-errors',
            '--ignore-certificate-errors-spki-list '
        ],
        //headless: false,
        //ignoreDefaultArgs: ['--mute-audio'],
    });

    for (i = 0; i < config.numberofbots; i++) {

        startUser(uniqueNamesGenerator, NumberDictionary, browser)

    }

    async function startUser(uniqueNamesGenerator, NumberDictionary, browser) {


        let randomNumber = await NumberDictionary.generate({ min: 10, max: 9999 });
        let randomName = await uniqueNamesGenerator({
            dictionaries: [colors, adjectives, animals],
            separator: "",
            length: 2,
            style: 'capital'
        })
        let generatedName = randomName + randomNumber;


        const page = await browser.newPage();

        await page.goto(config.url);

        if (config.playaudio == false) {

            const button = await page.$$('div.audio-preview > div.settings-button-container > div.toolbox-button', { waitUntil: "networkidle2" });

            await button[0].click();

        }


        if (config.userandomnames == true) {
            await page.type(".field", generatedName);
        } else {
            await page.type(".field", config.customname);
        }
        await page.keyboard.press('Enter');



        if (config.haspassword == true) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            await page.waitForSelector('input');
            await page.focus("input");
            await page.type("input", config.password, { waitUntil: "domcontentloaded"});
            page.keyboard.press('Enter');
        }

        if (config.disableallcameras == true) {
            await new Promise(resolve => setTimeout(resolve, 200));
            await page.click('div.toolbox-content-wrapper > div.toolbox-content-items > div.toolbox-button-wth-dialog', { waitUntil: "networkidle" });
            const button = await page.$$('ul.overflow-menu > li.overflow-menu-item', { waitUntil: "networkidle2" });

            await button[6].click();

            await new Promise(resolve => setTimeout(resolve, 500));

            await page.click('#modal-dialog-ok-button', { waitUntil: "networkidle" });
        }

        if (config.muteeveryone == true) {
            await new Promise(resolve => setTimeout(resolve, 200));
            await page.click('div.toolbox-content-wrapper > div.toolbox-content-items > div.toolbox-button-wth-dialog', { waitUntil: "networkidle" });
            const button = await page.$$('ul.overflow-menu > li.overflow-menu-item', { waitUntil: "networkidle2" });

            await button[5].click();

            await new Promise(resolve => setTimeout(resolve, 500));

            await page.click('#modal-dialog-ok-button', { waitUntil: "networkidle" });

        }

        if (config.raisehands == true && config.writemessage == false) {

            var time = Math.floor(Math.random() * config.maxtimebetweenmsg) + config.mintimebetweenmsg;
            console.log(time)
            await new Promise(resolve => setTimeout(resolve, time));

            for (i = 1; i > 0; i + 1) {
                const button = await page.$$('div.toolbox-content-items > div.toolbox-button', { waitUntil: "networkidle2" });

                await button[1].click();
                var time = Math.floor(Math.random() * (config.maxtimebetweenmsg - config.mintimebetweenmsg)) + config.mintimebetweenmsg;
                await new Promise(resolve => setTimeout(resolve, time));
            }
        }


        if (config.writemessage == true) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            await page.click('div.toolbox-content-items > div.toolbar-button-with-badge > div.toolbox-button', { waitUntil: "networkidle" });
            await page.waitForSelector('textarea', {waitUntil: "networkidle"}); // <-- wait until it exists
            await page.focus("textarea", {waitUntil: "networkidle"});

            var time = Math.floor(Math.random() * config.maxtimebetweenmsg) + config.mintimebetweenmsg;
            await new Promise(resolve => setTimeout(resolve, time));

            for (i = 1; i > 0; i + 1) {
                if (config.raisehands == true) {
                    const button = await page.$$('div.toolbox-content-items > div.toolbox-button', { waitUntil: "networkidle2" });

                    await button[1].click();
                    var time = Math.floor(Math.random() * (config.maxtimebetweenmsg + 1000 - config.mintimebetweenmsg)) + config.mintimebetweenmsg;
                    await new Promise(resolve => setTimeout(resolve, time));
                }
                await new Promise(resolve => setTimeout(resolve, 200));
                await page.type("textarea", config.message);
                page.keyboard.press('Enter');
                var time = Math.floor(Math.random() * (config.maxtimebetweenmsg - config.mintimebetweenmsg)) + config.mintimebetweenmsg;
                await new Promise(resolve => setTimeout(resolve, time));
            }
        }
    }
})();
