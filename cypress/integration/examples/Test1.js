//cypress-spec
describe('My first test',() => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        
        cy.get('.products').find('.product').each(($el, index, $list)=>{
            const valAux = $el.find('h4.product-name').text();

            if(valAux.includes('Cashews')){
                cy.wrap($el).find('button').click();
            }

        })


    })
})