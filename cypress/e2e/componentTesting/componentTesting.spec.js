import { onDatepickerPage } from "../../support/pageObjescts/datepickerPage"
import { onDialogPage } from "../../support/pageObjescts/dialogPage"
import { onFormLayoutsPage } from "../../support/pageObjescts/formLayoutsPage"
import { navigateTo } from "../../support/pageObjescts/navigationPage"
import { onPopoverPage } from "../../support/pageObjescts/popoverPage"
import { onSmartTablePage } from "../../support/pageObjescts/smartTablePage"
import { onStepperPage } from "../../support/pageObjescts/stepperPage"
import { onToastrPage } from "../../support/pageObjescts/toastrPage"
import { onWindowPage } from "../../support/pageObjescts/windowPage"

describe('Test components of each page in the application',()=>{

    beforeEach(()=>{
        cy.visit('/')


    })

    it('Test the stepper with input fields from Layouts/Stepper page',()=>{
        navigateTo.layoutPages('Stepper')
        onStepperPage.completeStepperWithInput()


    })

    it('Test the Block Form from Forms/Layouts page',()=>{
        navigateTo.formsPages('Form Layouts')
        onFormLayoutsPage.fillBlockForm('Cypress','Automation','Testing@test.tst','www.com')





    })
    it('Test the Common datepicker component',()=>{
        navigateTo.formsPages('Datepicker')
        onDatepickerPage.selectDateCommonDatepicker(66)


    })

    it('Test the dialog with input field and assert the list of names',()=>{

        navigateTo.modalAndOverlays('Dialog')
        onDialogPage.returnResultFromDialog()



    })

    it('Test all the states of the window that contains form',()=>{
        navigateTo.modalAndOverlays('Window')
        onWindowPage.windowWithForm('Testing','Testing with Cypress')



    })

    it('Test the popover with tabs component',()=>{

        navigateTo.modalAndOverlays('Popover')
        onPopoverPage.popoverWithTabs()


    })

    it('Test all types of toasts in the Toastr page',()=>{
        navigateTo.modalAndOverlays('Toastr')
        onToastrPage.testTypesOfToast()


    })

    it('Add user in the smart table',()=>{
        navigateTo.tablesAndData('Smart Table')
        onSmartTablePage.addNewUserInTable()
        


    })

    it('Edit existing user details',()=>{
        navigateTo.tablesAndData('Smart Table')
        onSmartTablePage.editExistingUserDetails()  


    })
    it.only('Testing the filter component of the Smart Table',()=>{
        navigateTo.tablesAndData('Smart Table')
        onSmartTablePage.filterById()
    })

})