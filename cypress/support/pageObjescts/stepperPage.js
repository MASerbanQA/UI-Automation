/// <reference types="cypress" />

export class StepperPage{

    completeStepperWithInput(){
        cy.get('nb-stepper').eq(1).then(myStepper =>{
            const steps = ['.step:eq(0)', '.step:eq(1)', '.step:eq(2)']
           steps.forEach((step,index)=>{
            cy.wrap(myStepper).find(step).then((currentStep)=>{
                cy.wrap(currentStep).should('not.have.class','completed')
                cy.wrap(myStepper).find('input').type('test')
                cy.wrap(myStepper).contains(/next|Confirm/).click()
                cy.wrap(currentStep).should('have.class','completed')
            })
           })
        
        })
        

        




    }




}

export const onStepperPage = new StepperPage()