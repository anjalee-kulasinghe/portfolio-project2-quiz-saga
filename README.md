# Qize Saga

## Code Institute - Second Milestone Project: JavaScript Essentials Portfolio Project.

This website was developed to showcase my ability to design and create a static website. And to showcase my proficiency and understanding of JavaScript concepts and skills.

Quiz Saga is a multiple-choice online game that is engaging and educational. Players can test their knowledge in different areas while having fun. 

# Table of Contents
- [Anjalee Kulasinghe Online CV](#anjalee-kulasinghe-online-cv)
  - [Code Institute - First Milestone Project: User Centric Frontend Development.](#code-institute---first-milestone-project-user-centric-frontend-development)
- [Table of Contents](#table-of-contents)
  - [Demo](#demo)
    - [A live demo to the website can be found here](#a-live-demo-to-the-website-can-be-found-here)
  - [UX](#ux)
  - [User stories](#user-stories)
    - [Strategy](#strategy)
    - [Scope](#scope)
    - [Structure](#structure)
    - [Skeleton](#skeleton)
    - [Surface](#surface)
  - [Technologies](#technologies)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Bugs](#bugs)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgements](#acknowledgements)

## Demo

![Website look on different devices](assets/readme-assets/device_look.PNG)

### A live demo to the website can be found [here](https://anjalee-kulasinghe.github.io/portfolio-project2-quiz-saga/)


## UX
The users are the players who are interested in playing the quiz game. Players can be in any age group. Since Quiz Saga is a multiple-choice general knowledge game, players can improve their general knowledge since the correct answer is displayed.

## User stories
As the sole developer of this website, my goal is to develop an online game that is engaging and educational. Players can test their knowledge in different areas while having fun.
I came up with the following points, which are applicable to the users:

- As a user, I want to understand the purpose of this website quickly and easily.
- As a user, I want to easily navigate this website (by using a mouse, a keyboard, or a touch screen).
- As a user, I want interactive learning.
- As a user, I want to see questions with varied topics, which will make the quiz more interesting and improve knowledge.
- As a user, I want to have fun while learning, making the educational process enjoyable.
- As a user, I want the game to offer challenges that keep users engaged, motivated, and eager to learn.
- As a user, I want to receive instant feedback on their answers, helping them learn from their mistakes.
- As a user, I want the interface to be intuitive and user-friendly, ensuring a smooth and enjoyable experience.
- As a user, I want clear instructions on how to play the game and access resources.

### Strategy
The goal is to create a well-functioning online quiz website that not only meets users' needs but also keeps them engaged, informed, and entertained while learning.

### Scope
As the developer, I wanted to provide an engaging and interactive platform for players to test their knowledge on various subjects. By creating a user-friendly, visually appealing, and mobile-responsive interface that helps the user experience a seamless game, by offering a diverse range of quizzes to cater to diverse interests and skill levels, and by providing instant feedback to motivate continuous participation and learning.

### Structure
I followed the simple layout so the interface would be user-friendly. Game instructions are given before the quiz starts. All questions are multiple-choice questions, and there is only one answer. At the top of the quiz window, the current question answer is shown with the progress bar, score, and timer visible to the player, so the player can easily keep track.

**Website Sections:**
1. **_Home / Landing page:_** A welcome message to the Quiz Saga and let the user select a user name. A message will display along with the given user name by the player to make it a little bit personal to the player and explain the two buttons.
2. **_Game page:_** The page will display the quiz questions (five questions for a single quiz), and at the end of the quiz, the player can know the total score and decide whether to play again or go to the home page.
3. **_Footer:_** This is not the main section of the website but rather an ending to the website with social media links and copywriting information.

### Skeleton
The website is designed to be clear and simple. And the site has a simple structure with hierarchical flows from top to bottom.

**Wireframe**
The wireframe is designed using Balsamiq software. The first draft was edited with the guidance of the mentor. The site was built with two main pages, and the wireframe was designed to focus on each page. The game page focuses on the single question and the result.

My wireframe design in the [(pdf format)](assets/readme-assets/wireFrame.pdf)

### Surface
I have selected flat colors for the Quiz Saga website. The purpose of using flat colors for the website is to keep it simple, not to make the player disturbed by the background, but also to make it more user-friendly to the player.
The main colors include shades of white and blue, along with black for the text.

_Main color palette_

![Main color Palette](assets/readme-assets/Main_Color_Palette.png)

## Technologies
1. HTML - To create a basic site.
2. CSS - To create a nice, standout front-end and to give a great user experience.
3. JavaScript - To enabling the creation of dynamic, interactive, and feature-rich websites. 
4. Balsamiq - To create a wireframe.

## Features
### Existing Features
* **Home**
  - Used a flat background color. Included is the logo and a message to welcome you to the Quiz Saga page.
  - There is a text box for the user to enter the user name.
  - Submit button will guide you to the next page or section of the website.
  
![home_section](assets/readme-assets/Home-section.PNG)


* **Introduction**
  - In the introduction section, on the top logo, the same welcome message is displayed.
  - Below the welcome message, a greeting to the player is given with the user name entered by the player.
  - Below the greeting message, the purpose of the two buttons on the screen is explained to the user.
  - Start the quiz: will direct the player to the quiz.
  - How to play: give the user quiz instructions. How to play the quiz


![Introduction_section](assets/readme-assets/Introduction_page.PNG)


![How to play_Button](assets/readme-assets/Quiz_Instruction.PNG)

- **Start the quiz**
  - In the quiz section, on the top left side, the question progress bar is displayed. In the middle, the player's current score and the right timer for each question are given. The timer is set to 10 seconds.
  - Below the header area, a question is displayed along with the four answer choices. The player is allowed to select only one answer. After selecting the answer, the Next button will be displayed to the user.
  - Correct answer will be highlighted in green.
  - If the user selects the wrong answer, the wrong answer is highlighted in red, and at the same time, the correct answer is highlighted in green.
  - When the user selects an answer, the select option will be disabled. Accordingly, the question progress bar and the score will change, and the timer will reset to the next question.
  - If the user does not select an answer, it will automatically direct the player to the next question.

![Quiz_start](assets/readme-assets/quiz_window.PNG)

![Select_correct_answer](assets/readme-assets/correct.PNG)

![Select_wrong_answer](assets/readme-assets/wrong.PNG)


- **End the quiz**
  - At the end of the game, the player can see the total score he or she has scored and two buttons.
  - _Play again:_ Direct the player to play the quiz again. Will provide five new questions for the user.
  - _Go to Start:_ Go to the start page, where users can start the game as new users.


![End of qize](assets/readme-assets/endQuiz.png)


- **Footer**
  - This section includes the social media links through which players can reach me. Below is copywriting information for the Quiz Saga website of Anjalee Kulasinghe.

![contact_section](./assets/readme-assets/Footer.PNG)


### Features Left to Implement
In the future, 
* I would like to make the quiz a little longer.
* I would like to add the categories and let the player select the category they would like to play in.
* I would like to give the player the total time it took them to complete the quiz.
* I would like to develop the feature to store the scores of the players and let the players do a comparison of where they are with the score.


## Testing
* I tested the site, and it works in different web browsers: Chrome, Firefox, and Microsoft Edge.
* On mobile devices, I tested the my site on a Samsung Galaxy S23 Ultra with the Samsung browser and an iPhone SE with the Safari browser.
* I confirmed that the site is responsive and functions on different screen sizes using the devtools device toolbar.
* I confirmed that the navigation and the sections Home, Experience, Education, Skills, and Contact are readable and easy to understand.
* I confirmed that the form works: it requires entries in every field, only accepts an email in the email field, and both the submit and reset buttons work.
* I confirmed that the Download CV link will download the pdf copy of the traditional CV to the device on which the site is open.

### Validator Testing
* **HTML**
  No errors were returned when passing through the official [W3C validator](./assets/readme-assets/validator_result_html.PNG)

* **CSS**
  No errors were found when passing through the official [(Jigsaw) validator](./assets/readme-assets/css-validator_result.PNG)
  
* **Accessibility**
  I confirmed that the colors and fonts chosen are easy to read and accessible by running it through [Lighthouse DevTools](./assets/readme-assets/site_accessibility.PNG)

### Bugs
* **Solved bugs**
  * When I deployed my project to GitHub pages, I found that my project was broken; the links to the other files (CSS and images) did not work.
  * My mentor showed me this had happened since I have used the file paths in the following way:
        `<link rel="stylesheet" href="/assets/css/style.css">` 
  * Adding a '.' to the start of the file path fixed the problem.
        `<link rel="stylesheet" href="./assets/css/style.css">`

  * When I was fixing my site to be responsive, I found out that in the 'Contact Me' section, the contact form does not go below the screen when the screen is small. 
  * This has happened since I have used `<display: flex;>`. 
  * Changing flex to block fixed the problem `<display: block;>`.
  
  
* **Unfixed Bugs**

When I checked my site on a Samsung Galaxy S23 Ultra with the Samsung browser, I found out that the navigation was not responsive properly. Even though the navigation is fixed to the top, it is sometimes hidden in the address bar. I have to pull it down when I need to use the navigation bar.


## Deployment
* The site was deployed to Git Hub pages using the following steps:
  * In the Github repository, the Stetting tab.
  * Under General, navigate to Code and Automation and select 'Pages'.
  * In the Build and Deployment section for Source, select 'Deploy from a branch' from the drop-down list.
  * For Branch, select 'main' from the drop-down list and Save.
  * On the top of the page, the link to the complete website is provided.
  
  - The deployed site will update automatically upon new commits to the master branch.


## Credits
### Content
* The progress bar code was taken from [WeiChiaChang](<https://gist.github.com/WeiChiaChang/abe92ca2e8da86ef69560b63903e8764>).
* The code for the two column responsive [layout](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_two_columns_responsive) and [fixed navigation](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_two_columns_responsive) from www.w3schools.com.
- To add the overlay to the home page, I took the idea from the [dcode](https://www.youtube.com/watch?v=exb2ab72Xhs) YouTude vedio.
* Animation added to the home text is taken from the Code Institute's [Love Running](https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode/tree/main) project.

### Media
The imge used as a background image is taken from [Pixabay].

### Acknowledgements
* Inspirational support from [Karina Finegan](https://kairosity.github.io/milestone-project-1-cv-website/?#home-section) project.
* Ideas were taken from the Code Institute's Coffee House and Love Running projects.
* The the Code Institute tutor support team for helping me with the correct guidance.
* My mentor, Medale Oluwafemi, for his invaluable guidance.