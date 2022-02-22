describe('@exercism-ui-select: ExercismUiSelect component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=exercismuiselect--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ExercismUiSelect!');
  });
});
