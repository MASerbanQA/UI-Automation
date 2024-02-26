function collapseWindow(){
    cy.get('nb-window').should('be.visible').as('myWindow')
    cy.get('@myWindow').invoke('attr', 'class').then(windowClass => {
        expect(windowClass).to.include('full-screen')
        cy.get('[icon="collapse-outline"]').find('[fill="currentColor"] g g')
        .invoke('attr','data-name').then(windowState=>{
            if(windowState.includes('collapse')){
                cy.get('@myWindow').find('button').eq(1).click()
                
            }
            
        })
        cy.get('@myWindow').invoke('attr', 'class').then(windowClass => {
            expect(windowClass).to.include('maximized')
        })

    })

}


export class WindowPage{

    windowWithForm(subject,text){
        cy.contains('Open window form').click()
        
        cy.get('nb-window').should('be.visible').as('myWindow')
        cy.get('@myWindow').invoke('attr', 'class').then(windowClass => {
            expect(windowClass).to.include('full-screen')
            cy.get('@myWindow').within(()=>{
                cy.get('#subject').type(subject)
                cy.get('#text').type(text)
                cy.get('button').eq(0).click()
                
            })
            cy.get('@myWindow').invoke('attr', 'class').then(windowClass => {
                expect(windowClass).to.include('minimized')
                cy.get('@myWindow').within(() => {
                    cy.get('button').eq(0).click()
                })
                cy.get('@myWindow').invoke('attr', 'class').then(windowClass => {
                    expect(windowClass).to.include('full-screen')
                })
            })
            collapseWindow()

            cy.get('@myWindow').find('[icon="close-outline"]').click()
            cy.get('nb-window').should('not.exist')
            
        })
        

    }



}

export const onWindowPage = new WindowPage()