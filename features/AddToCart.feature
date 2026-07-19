Feature: AddToCart
Background:
  Given User launches the application2
  When User enters valid username and password2

    And User clicks on Sign in button2

    Then User should login successfully2

Scenario: Add item to cart

    Given User selects women category from the menu

    When User selects a product and add it to the cart

    Then Item should be added to the cart successfully


    