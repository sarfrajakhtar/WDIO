const { config } = require('./wdio.common')
exports.config = {
    ...config,
    ...{
        services: [
            ['chromedriver', {
                //logFileName: 'wdio-chromedriver.log', // default
                //outputDir: 'driver-logs', // overwrites the config.outputDir
                //args: ['--silent']
            }]
        ],

        capabilities: [{
            browserName: 'chrome'
        }]
    }
}
