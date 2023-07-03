import * as loginPage from "../../pages/loginpage";
describe('verify login page elements',()=>{

    it('verify name ,password input fileds and login button shoud exists',()=>{
        cy.launch();
        loginPage.getUserNameInput().should('be.visible');
        loginPage.getPasswordInput().should('be.visible');
        loginPage.getLoginBtn().should('be.visible');
    })
    it("verify login",()=>{
        cy.fixture('testdata.json').then((data)=>{
            cy.login(data.username,data.pwd);
            loginPage.hrmLogoShouldBeVisible();
        })
    })
   it('verify login with worng password',()=>{
    cy.fixture('testdata.json').then((data)=>{
        cy.login(data.username,data.wrongPwd);
       loginPage.loginShougNotHappenWithWrongCredentials() 
    })
})
it('verify login with worng username',()=>{
    cy.fixture('testdata.json').then((data)=>{
        cy.login(data.wrongUser,data.pwd);
       loginPage.loginShougNotHappenWithWrongCredentials();
    })
})
it('verify error msg of login with no password',()=>{
    loginPage.verifyLoginPageWithNoPwd();
    loginPage.shouldDisplayInputFiledsErrorMsgWithNoData();
})
it('verify error msg of login with no user',()=>{
    loginPage.verifyLoginPageWithNoUser();
    loginPage.shouldDisplayInputFiledsErrorMsgWithNoData();
})
it('verify logout',()=>{
    cy.fixture('testdata.json').then((data)=>{
        cy.login(data.username,data.pwd);
        loginPage.hrmLogoShouldBeVisible();
    })
    cy.wait(2000);
    cy.logout();
})
})