export const elements={
    userInput:'[name="username"]',
    pwdInput:'[name="password"]',
    loginBtn:'[type="submit"]',
    hrmLogo:'.oxd-brand-banner > img',
    dropDown:".oxd-userdropdown-tab >.oxd-icon",
    logoutBtn:'//*[text()="Logout"]'
}

export const getUserNameInput=()=>{
return cy.get(elements.userInput);
};

export const getPasswordInput=()=>{
return cy.get(elements.pwdInput);
};
export const getLoginBtn=()=>{
return cy.get(elements.loginBtn);
 };

 export const hrmLogoShouldBeVisible =()=>{
    cy.get(elements.hrmLogo).should('be.visible');
 }

 export const shouldDisplayInputFiledsErrorMsgWithNoData =()=>{
    cy.contains('Required').should('be.visible');
 }
 export const loginShougNotHappenWithWrongCredentials =()=>{
    cy.contains('Invalid credentials').should('be.visible');
 }

 export const verifyLoginPageWithNoPwd =()=>{
    cy.fixture('testdata.json').then((data)=>{
        cy.launch();
        cy.get(elements.userInput).type(data.username);
        cy.get(elements.loginBtn).click();
    }) 
 }

 export const verifyLoginPageWithNoUser =()=>{
    cy.fixture('testdata.json').then((data)=>{
        cy.launch();
        cy.get(elements.pwdInput).type(data.pwd);
        cy.get(elements.loginBtn).click();
    }) 
 }