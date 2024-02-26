

export class FormLayoutsPage{

    fillBlockForm(firstName, lastName, email, website){
        cy.contains('Block form').parent().within(()=>{
            cy.get('[placeholder="First Name"]').type(firstName)
            cy.get('[placeholder="Last Name"]').type(lastName)
            cy.get('[placeholder="Email"]').type(email)
            cy.get('[placeholder="Website"]').type(website)
            cy.contains('Submit').click()

        })
    }




}

export const onFormLayoutsPage = new FormLayoutsPage()