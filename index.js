const puppeteer = require('puppeteer');
const { uniqueNamesGenerator, adjectives, colors, animals, NumberDictionary } = require('unique-names-generator');
const fs = require("fs");
const config = require("./config.json");



(async () => {

    const args = [
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream',
        '--no-sandbox',
        '--allow-file-access-from-files',
        '--allow-running-insecure-content',
        '--disable-web-security',
        '--ignore-certificate-errors',
        '--ignore-certificate-errors-spki-list ',
        '--auto-accept-camera-and-microphone-capture',
        '--disable-notifications',
    ]

    if (config.playvideo) {
        args.push('--use-file-for-fake-video-capture=' + __dirname + '/media/hacked.y4m');
    } else {
        args.push('--use-file-for-fake-video-capture=' + __dirname + '/media/black.y4m');
    }

    if (config.playaudio) {
        args.push('--use-file-for-fake-audio-capture=' + __dirname + '/media/siren.wav');
    } else {
        args.push('--use-file-for-fake-audio-capture=' + __dirname + '/media/blank.wav');
    }

    const browser = await puppeteer.launch({
        args: args,
        headless: true,
    });

    for (i = 0; i < config.numberofbots; i++) {

        await startUser(browser);

    }

    async function startUser(browser) {
        //Generate Random user Names

        randomName = uniqueNamesGenerator({ 
            dictionaries: [colors, adjectives, animals], 
            separator: "", 
            length: 2, 
            style: 'capital' 
        }) + NumberDictionary.generate({ min: 10, max: 9999 });

        // Open a new page for each bot

        const page = await browser.newPage();

        await browser.defaultBrowserContext().overridePermissions(config.url, ['camera', 'microphone', 'gyroscope', 'notifications', 'background-sync'])
        await page.goto(config.url);

        //Find User Name Textfield
        let textfield = await page.waitForSelector('div.premeeting-screen > div > div> div > div > div > div > input');

        //Clear Textfield From Previous Name
        await page.evaluate(() => {
            const field = document.querySelector('div.premeeting-screen > div > div> div > div > div > div > input');
            field.value = '';
        });

        //Type Bot Name
        config.userandomnames == true ? await textfield.type(randomName) : await textfield.type(config.customname);

        //Join Meeting
        await page.click('div[data-testid="prejoin.joinMeeting"]', { waitUntil: "networkidle2" });

        if (config.haspassword == true) {
            //Is Room Password Protected?

            await new Promise(resolve => setTimeout(resolve, 1000));
            await page.waitForSelector('input');
            await page.focus("input");
            await page.type("input", config.password, { waitUntil: "domcontentloaded" });
            page.keyboard.press('Enter');
        }

        if (config.raisehands == true) {
            await new Promise(resolve => setTimeout(resolve, 3000));
            //Raise Hands
            await page.click('div.toolbox-content-items > div.reactions-menu-popup-container > div.settings-button-container > div.toolbox-button', { waitUntil: "networkidle2" });
        }

        if (config.writemessage == true) {

            //Let Every Bot Write A Random Message

            await new Promise(resolve => setTimeout(resolve, 1000));
            await page.click('div.toolbox-content-items > div.toolbar-button-with-badge > div.toolbox-button', { waitUntil: "networkidle" });
            await page.waitForSelector('textarea', { waitUntil: "networkidle" }); // <-- wait until it exists

            //Focus Textarea 
            await page.focus("textarea", { waitUntil: "networkidle" });

            setInterval(async () => {
                await page.type("textarea", config.message);
                page.keyboard.press('Enter');
            }, 2000)
        }
    }
})();
