describe('@exercism-ui-table: ExercismUiTable component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=exercismuitable--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ExercismUiTable!');
  });
});
