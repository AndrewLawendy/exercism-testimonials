describe('@exercism-ui-radio-button: ExercismUiRadioButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=exercismuiradiobutton--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ExercismUiRadioButton!');
  });
});
