Feature: duckduckgo.com
  Scenario: visting the frontpage
    When I visit duckduckgo.com
    Then I should see a search bar

  Scenario: DemoQA testing
    When I visit demoqa.com
    When I click Elements
    When I click Check Box section
    Then I click the checkbox
    Then A text should appear