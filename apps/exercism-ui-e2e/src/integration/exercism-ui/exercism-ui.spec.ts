describe('exercism-ui: ExercismUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=exercismui--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ExercismUi!');
  });
});
