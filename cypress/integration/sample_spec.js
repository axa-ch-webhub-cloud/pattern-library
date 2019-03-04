describe('My First Test', function() {
  it('Check button vor various states', function() {
    cy.visit('http://localhost:9001');

    cy.contains('Demo').click();
    cy.contains('Button').click();
    cy.contains('Button React').click();

    cy.get('ul')
      .find('[href = "?selectedKind=Demo&selectedStory=Button%20React&full=0&addons=1&stories=1&panelRight=0"]')
      .click();

    // Sadly, this workaround is needed for iframes, which storybooks uses
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
      // This does not work, probably because of shadow dom
      // .and('be.disabled');

      cy.wrap($body)
        .find('axa-button')
        .contains("I'm clickable");
    });
  });
});
