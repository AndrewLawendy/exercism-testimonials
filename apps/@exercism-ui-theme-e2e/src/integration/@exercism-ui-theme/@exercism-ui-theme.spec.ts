describe('@exercism-ui-theme: ExercismUiTheme component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=exercismuitheme--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ExercismUiTheme!');
  });
});
