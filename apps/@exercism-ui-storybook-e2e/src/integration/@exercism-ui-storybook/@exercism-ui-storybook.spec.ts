describe('@exercism-ui-storybook: ExercismUiStorybook component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=exercismuistorybook--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ExercismUiStorybook!');
  });
});
