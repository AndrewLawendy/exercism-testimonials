describe('@exercism-ui-button: ExercismUiButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=exercismuibutton--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ExercismUiButton!');
  });
});
