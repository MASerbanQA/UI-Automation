/// <reference types="cypress" />


function clickOnMenuItem(menuGroup){
    cy.contains('a',menuGroup).then(menuHeader=>{
        cy.wrap(menuHeader).find('.expand-state g g')
        .invoke('attr','data-name')
        .then(headerState =>{
            if(headerState.includes('left')){
                cy.wrap(menuHeader).click()
            }
        })
    })

}

function navigateToPage(menuGroup, page) {
    clickOnMenuItem(menuGroup)
    cy.contains(page).click()
}


function verifyPageUrl(page){
    cy.url().should('contain',page.toLowerCase())
}

export class NavigationPage{

    layoutPages(page){
        
        navigateToPage('Layout',page)
        verifyPageUrl(page)




    }

    formsPages(page){
        navigateToPage('Forms', page)
        
    }

    modalAndOverlays(page){
        navigateToPage('Modal & Overlays', page)
        verifyPageUrl(page)


    }

    extraComponents(page){
        navigateToPage('Extra Components',page)
        verifyPageUrl(page)

    }

    tablesAndData(page){
        navigateToPage('Tables & Data',page)
        cy.url().should('contain',page.toLowerCase().replace(/\s/g, '-'))


    }

    authentification(page){
        navigateToPage('Auth',page)
        if(page === 'Login' || page === 'Register'){
            verifyPageUrl(page)
        }else{
            cy.url().should('contain',page.toLowerCase().replace(/\s/g, '-'))
        }
        cy.get('nav').find('nb-icon').click()
        

    }



}

export const navigateTo = new NavigationPage()