
export class DialogPage{

    returnResultFromDialog(){

        const names = ['Cypre$$','4utomation','-es71ng']

        cy.contains('nb-card','Return Result From Dialog').then(dialogForm=>{
            names.forEach((name, index)=>{
                cy.wrap(dialogForm).find('button').click()
                cy.get('nb-dialog-container').find('input').type(name)
                cy.contains('button','Submit').click()
                cy.wrap(dialogForm).find(`li:nth-child(${index + 1})`).should('contain',name)

            })
            
                
            

           
        })




    }





}

export const onDialogPage = new DialogPage()