export class SmartTablePage{

    addNewUserInTable(){
        const inputs = {
            'ID': '001',
            'firstName': 'Cypress',
            'lastName': 'Testing',
            'username': 'Automation',
            'email':'forComponent@testing.www',
            'age': '0'

        };
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').last().then(actionRow =>{
            Object.keys(inputs).forEach((key,index) =>{
                cy.wrap(actionRow).find('input').eq(index).type(inputs[key])
            })
                cy.get('.nb-checkmark').click()
                cy.get('tbody').find('tr').first().then(newUser=>{
                   cy.wrap(newUser).find('td').filter((index) => index !== 0).each((detail, index)=>{
                    cy.wrap(detail).should('contain', Object.values(inputs)[index])
                   })
                })
            })
        


    }

}

export const onSmartTablePage = new SmartTablePage()