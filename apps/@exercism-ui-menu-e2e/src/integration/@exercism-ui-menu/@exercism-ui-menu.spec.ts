describe('@exercism-ui-menu: ExercismUiMenu component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=exercismuimenu--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ExercismUiMenu!');
  });
});
