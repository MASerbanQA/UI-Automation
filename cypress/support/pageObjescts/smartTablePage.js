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


    editExistingUserDetails(){
        cy.get('tbody').find('tr').first().then(userToEdit =>{
            cy.wrap(userToEdit).invoke('text').then(userDetails =>{
                cy.wrap(userToEdit).find('.nb-edit').click()
                cy.wrap(userToEdit).find('input').each(detail=>{
                    cy.wrap(detail).clear().type('edited')
                })
                cy.get('.nb-checkmark').click()
                cy.get('tbody').find('tr').first().invoke('text').then(newUserDetails=>{
                    expect(userDetails).to.not.equal(newUserDetails)
                })
            })
        })



    }
    

    filterById(){
        cy.get('tbody').find('td:nth-child(2)').then(results=>{
            cy.get('thead').find('[placeholder="ID"]').type('/').clear().type('1{enter}')
            cy.wait(1000)
            const checkAndNavigateNextPage = () => {
                cy.get('tbody').find('td:nth-child(2)').each(id => {
                    cy.wrap(id).should('contain.text', '1');
                });
                cy.get('[aria-label="Next"]').parent().then(nextButton => {
                    cy.wrap(nextButton).invoke('attr','class').then(buttonClass=>{
                        if (!buttonClass.includes('disabled')) {
                            cy.wrap(nextButton).click();
                            cy.wait(1000)
                            checkAndNavigateNextPage()
                        }
                    })
                    
                })
            }
            checkAndNavigateNextPage();//aici trebuie sa mai lucrezi
            
            
        })
        
    }

}

export const onSmartTablePage = new SmartTablePage()