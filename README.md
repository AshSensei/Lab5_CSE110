# Lab 5 - Starter
[Expose Page](https://ashsensei.github.io/Lab5_CSE110/expose)
[Explore Page](https://ashsensei.github.io/Lab5_CSE110/explore)
## Lab Participant
Ashton Simbol (*no other partner*)

## Part 3 Questions
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    No, you would not use a unit test to test the message feature. Since unit tests are encapsulated within a finite area such as the message feature itself, it couldn't test how it interacts with other features or applications and could not test that. It could however ensure that the logic within the message feature is sound such as making sure specific functions within this feature work and input is valid.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    Yes, you could write a unit test to test the max message length. This is a small aspect that is straightforward and can be verified in a a unit test to cover all the test cases such as if messages are more than 80, equal to 80, or less than 80 to make sure it works properly.