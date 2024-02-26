function popToast(title,content){
    cy.contains('label','Position:').parent().find('button').then(toastPosition =>{
        cy.wrap(toastPosition).click()
        cy.get('.options-list').contains('top-left').click()
        cy.wrap(toastPosition).should('contain','top-left')

    })
    cy.get('[name="title"]').clear().type(title)
    cy.get('[name="content"]').clear().type(content)
    cy.get('[name="timeout"]').clear().type('700')
    cy.contains('button','Show toast').click()
    

}

function assertToast(name){
    cy.get('nb-toast').each((toastClass, index)=>{
        cy.wrap(toastClass).eq(index).invoke('attr','class').should('contain',name)
    })

}


export class ToastrPage{

    testTypesOfToast(){

        cy.contains('label','Toast type:').parent().find('button').then(selectType=>{
            cy.wrap(selectType).click()
            cy.get('.options-list').find('nb-option').each((type,index)=>{
                const typeName = type.text()
                cy.get('.options-list').find('nb-option').eq(index).click()
                popToast('Test toast with Cypress','Boo')
                assertToast(typeName)
                cy.wrap(selectType).should('contain',typeName).click()
                
    
    
    
            })
    


        })
       
    }



}

export const onToastrPage = new ToastrPage()