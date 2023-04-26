Feature: Wrong login


    Background:
        Given A web browser is at the demo home page

    Scenario: Success Login
        When A user navigate to sign in page
        When A user provides incorrect credentials, and clicks on the login button
            | email         | password     |
            | invalid@gmail | invalid_pass |
        Then The error message "email or password is invalid" is displayed

