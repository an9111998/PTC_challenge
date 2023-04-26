Feature: Signup page


    Background:
        Given A web browser is at the demo home page

    Scenario: Success Login
        When A user navigate to signup page
        When A user enters the username "test_user_ptc", the email "test_emailptc@gmail.com", the password "test_password", and clicks on the signin button
        Then A user should access the home page successfully

