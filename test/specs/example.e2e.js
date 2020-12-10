const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.logMessage("starwar")
        console.log("Running first suite................");
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        LoginPage.logMessage("Avengger")
        expect(SecurePage.flashAlert).toBeExisting();
        LoginPage.logMessage("Endgame")
        expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });
});


