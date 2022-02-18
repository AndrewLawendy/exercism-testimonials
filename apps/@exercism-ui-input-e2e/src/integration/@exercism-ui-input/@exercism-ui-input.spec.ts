describe('@exercism-ui-input: ExercismUiInput component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=exercismuiinput--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ExercismUiInput!');
  });
});
