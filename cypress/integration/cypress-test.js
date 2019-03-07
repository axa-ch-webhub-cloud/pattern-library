describe('Button', function() {
  it('Should check button for various states', function() {
    // Server has to be running already (obviously)
    cy.visit('http://localhost:9001');

    cy.contains('Demo').click();
    cy.contains('Button').click();
    cy.contains('Button React').click();

    cy.get('ul')
      .find('[href = "?selectedKind=Demo&selectedStory=Button%20React&full=0&addons=1&stories=1&panelRight=0"]')
      .click();

    // Sadly, the next line is needed for getting into iframes, which storybooks uses
    cy.get('#storybook-preview-iframe').then(function($iframe) {
      const $jbody = $iframe.contents().find('body');
      const $body = $jbody[0];

      // Go for hard attributes
      cy.wrap($body)
        .find('axa-button')
        .contains("I'm disabled")
        .and('have.attr', 'disabled');

      // Go for purpose, here, visibility and not clickable
      cy.wrap($body)
        .find('axa-button')
        .contains("I'm disabled")
        .and('be.visible');

      // Test the axa-button itself without its shadow root
      cy.wrap($body)
        .find('axa-button')
        .contains("I'm clickable")
        .and('have.attr', 'color', 'red');

      // The following line would take a screenshot of the current screen
      // cy.screenshot();

      cy.wrap($body)
        .find('axa-button')
        .contains("I'm clickable")
        .shadowFind('button')
        .shadowShould('have.attr', 'type', 'button')
        .shadowShould('have.css', 'background-color', 'rgb(240, 118, 98)');
    });
  });
});
