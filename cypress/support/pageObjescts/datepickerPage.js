function selectDayFromCurrent(day){
    let date = new Date()
        date.setDate(date.getDate() + day)
        let futureDay = date.getDate()
        let futureMonth = date.toLocaleDateString('en-US',{month: 'short'})
        let futureYear = date.getFullYear()
        let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`

        cy.get('nb-calendar-navigation').invoke('attr','ng-reflect-date').then( dateAttribute =>{
        if(!dateAttribute.includes(futureMonth) || !dateToAssert.includes(futureYear)){
            cy.get('[data-name="chevron-right"]').click()
            selectDayFromCurrent(day)

        } else{
            cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
        }
    })
    return dateToAssert
}


export class DatepickerPage{

    selectDateCommonDatepicker(day){

        cy.contains('nb-card', 'Common Datepicker').then(datepicker =>{
            cy.wrap(datepicker).find('input').then(inputField=>{
                cy.wrap(inputField).click()
                const dateToAssert = selectDayFromCurrent(day)
                cy.wrap(inputField).invoke('prop','value').should('contains',dateToAssert)

                


            })

        })
        




    }



}

export const onDatepickerPage = new DatepickerPage()