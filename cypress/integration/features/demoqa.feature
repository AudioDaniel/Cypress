Feature: DemoQA features

  # Scenario: DemoQA testing
  #   When I visit demoqa.com
  #   When I click Elements
  #   When I click Check Box section
  #   Then I click the checkbox
  #   Then A text should appear

  # Scenario: DemoQA form testing
  #   When I visit demoqa.com
  #   Then I click forms
  #   Then I click practice forms
  #   Then I input data onto the form

    # Examples:
    #     | Name | LastName | Header 3 |
    #     | Value 1  | Value 2  | Value 3  |

  Scenario: DemoQA form testing with clicks
    When I visit demoqa.com
    Then I click forms
    Then I click practice forms
    Then I input data onto the form by clicking
    