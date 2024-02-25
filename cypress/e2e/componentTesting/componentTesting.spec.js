import { navigateTo } from "../../support/pageObjescts/navigationPage"
import { onStepperPage } from "../../support/pageObjescts/stepperPage"

describe('Test components of each page in the application',()=>{

    beforeEach(()=>{
        cy.visit('/')


    })

    it('Test the stepper with input fields from Layouts/Stepper page',()=>{
        navigateTo.layoutPages('Stepper')
        onStepperPage.completeStepperWithInput()


    })

})