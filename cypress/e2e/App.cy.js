/* globals cy */
    
describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('show repair', () => {
    cy.visit ('/navpage');
    cy.get('[data-cy=repair]').should('contain', 'Repair');
  });

  it('shows repair instructions', () => {
    cy.visit ('/navpage');
    cy.get('[data-cy=repair]').click();
    cy.get('[data-cy=VINnumber]').should('contain' ,'VIN number');
  });
});