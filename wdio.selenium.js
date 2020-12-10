const { config } = require('./wdio.common')
exports.config = {
    ...config,
    ...{
        services: ['selenium-standalone'],

        capabilities: [
            {
                maxInstances: 1,
                //port: 5555,
                browserName: 'chrome',
                'goog:chromeOptions': {
                    //headless: true
                }
            },
            // {
            //     maxInstances: 1,
            //     //port: 5555,
            //     browserName: 'firefox',
            //     "moz:firefoxOptions": {
            //         //args: ['-headless']
            //     }
            // },
            // {
            //     maxInstances: 1,
            //     //port: 5555,
            //     browserName: 'MicrosoftEdge',
            // },
            // {
            //     maxInstances: 1,
            //     //port: 5555,
            //     browserName: 'safari',
            // }
        ]
    }

}
