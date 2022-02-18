describe('@exercism-ui-avatar: ExercismUiAvatar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=exercismuiavatar--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ExercismUiAvatar!');
  });
});
