describe("My Profile", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
    afterEach(() => {
      // For video to better capture what happened
    //   cy.wait(1000);
    });

    it('should test add todo', () => {
        // expect(true).to.be.true
        cy.get('[placeholder="Name"]').type('aaa')
        cy.get('[placeholder="Description"]').type('bbb')
        cy.get('button').click()
        cy.get('p').contains('aaa').should('be.visible')
    })
})