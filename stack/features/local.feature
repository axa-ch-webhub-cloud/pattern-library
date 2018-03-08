Feature: BrowserStack Local Testing

  Scenario: Can check tunnel working
    When I open health check
    Then I should see "Up and running"
