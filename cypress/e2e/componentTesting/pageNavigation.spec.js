/// <reference types="cypress" />

import { navigateTo } from "../../support/pageObjescts/navigationPage"

describe('Test the navigation across pages', () => {

  beforeEach(()=>{
    cy.visit('/')

  })


    it('navigate through Layout pages', () => {
      navigateTo.layoutPages('Stepper')
      navigateTo.layoutPages('Accordion')

    
    })

    it('navigate through Forms pages',()=>{

      navigateTo.formsPages('Form Layouts')
      navigateTo.formsPages('Datepicker')
    


    })

    it('navigate through Modal And Overlays pages',()=>{
      navigateTo.modalAndOverlays('Dialog')
      navigateTo.modalAndOverlays('Window')
      navigateTo.modalAndOverlays('Popover')
      navigateTo.modalAndOverlays('Toastr')
      navigateTo.modalAndOverlays('Tooltip')


    })
    it('navigate through Extra Components pages',()=>{
      navigateTo.extraComponents('Calendar')


    })

    it('Navigate through Tables and Data pages', ()=>{
        navigateTo.tablesAndData('Smart Table')
        navigateTo.tablesAndData('Tree Grid')
    })

    it('Navigat through authentification pages',()=>{
      navigateTo.authentification('Login')
      navigateTo.authentification('Register')
      navigateTo.authentification('Request Password')
      navigateTo.authentification('Reset Password')


    })


  })