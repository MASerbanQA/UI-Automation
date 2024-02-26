
export class PopoverPage{
    popoverWithTabs(){
    const tabValues = ["Such a wonderful day!","Indeed!"]

    cy.contains('nb-card','Component Popovers').find('button').eq(0).click()
    cy.get('nb-popover').then(myPopover =>{
        tabValues.forEach((tab,index)=>{
            cy.wrap(myPopover).find('nb-tab').then(tabs=>{
                cy.wrap(myPopover).find('ul li').eq(index).click().invoke('attr','class').then(tabClass =>{
                    cy.wrap(tabClass).should('include','active')
                    cy.wrap(tabs).eq(index).should('contain', tab)
                    
            })
            
            })
            
        })


    })
    

    

    }
}

export const onPopoverPage = new PopoverPage()