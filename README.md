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
The website is designed to be clear and simple. And the site has a simple tree structure with hierarchical flows from top to bottom.

**Wireframe**
The wireframe is designed using Balsamiq software. The first draft was edited with the guidance of the mentor. Although the site was built as a single-page scrolling website, the wireframe was designed to focus on each and every section as a single page and connect them using the navigation.

My wireframe design in the [(pdf format)](./assets/readme-assets/wireFrame.pdf)

### Surface
I have selected a plain color for the main background color. But I also used a background image with bubbles in two sections. I have started the Diploma in Fullstack Development at Code Institute, which is the beginning of a new chapter of my life. The bubble background represents the meaning of change and transformation. I have selected the color theme that goes with the background image I have selected.

_Background image and the colors_
![Background image used](./assets/readme-assets/Background_Image.PNG)

_Main color palette_

![Main color Palette](./assets/readme-assets/Main_Color_Palette.png)

## Technologies
1. HTML - To create a basic site
2. CSS - To create a nice, standout front-end and to give a great user experience
3. Balsamiq - To create a wireframe

## Features
### Existing Features
* **Navigation Bar**
  * The navigation bar is at the top of the page, and it is fixed to the top. The logo is in the left-hand corner of the navigation, and it links to the index.html page. 
  * The other navigation links on the website are to the right. Home, Experience, Education, Skills, and Contact connect to different sections of the same page. Download CV is a link embedded in a pdf that will download the traditional CV to the device on which the website is open.
  * The font color is in contrast with the navigation background color. The hover effect is used for navigation, so the user can know which page they are on. 
  * The different sections of the navigation are under the same heading as a traditional CV. Users can easily understand what information is contained in different sections.

![navigation_bar](./assets/readme-assets/navigation.PNG)


* **Home**
  - As the background image, an image of me (Anjalee Kulasinghe) has been used. On top of the image, I have used a flat color overlay with opacity.
  - There is a brief introduction to Anjalee Kulasinghe (me) with a simple animation used to give a welcome to the site.
  
![home_section](./assets/readme-assets/Home-section.PNG)


* **Experience**
  * In the Experience section, the current and past work experience.
  * This section is displayed in reverse chronological order, starting with the current job and going back to the oldest experience.

![experience_section](./assets/readme-assets/Experience-section.png)


- **Education**
  * In the Education section, showcase my (Anjalee Kulasinghe) educational background.
  * This section is displayed in reverse chronological order.

![education_section](./assets/readme-assets/Education-section.PNG)


- **Skills**
  - In this section, information is focused on four categories.
  - _Expertise:_ skills that I have learned during the past few years by working in different industries and jobs. I believe that these top few skills that I have listed will help me as a developer in the field of IT.
  - _Language skills (human):_ these are the languages that I am able to use for communication (read, write, and speak).
  - _Tools:_ some technological tools that I am familiar with.
  - _Tech Languages:_ these are some tech languages that I have some basic understanding of and have started to learn deeper with the Code Institute.

![skills_section](./assets/readme-assets/Skills-section.png)


- **Contact**
  - In the Contact Me section, give the user the main contact details that they can use to reach me (Anjalee Kulasinghe). This section is divided into two main sections.
  - On the left-hand side, there is a picture of me, which will help the user remember who I am if they see me in an interview. Below the profile image, my name (first and last names), what positions I am currently capable of, my email address, my mobile number and my postal address are listed. 
  - On the left-hand side, a form is given where the users will have the ability to contact me directly by entering their name and email address along with a message. The user will be asked to include their first name, last name, email, and message. The submit and reset buttons are placed at the end of the form.

![contact_section](./assets/readme-assets/Contact-section.PNG)


- **Footer**
  - This section includes the social media links through which users can reach me. Below is copywriting information for the Online CV website of Anjalee Kulasinghe.

![contact_section](./assets/readme-assets/Footer.PNG)


### Features Left to Implement
In the future, 
* I would like to add the Portfolio section to the online CV, where I can add links to the websites that I have designed, along with a link to Github. If an employer is interested in my work, they can go in and have a look.
* I would like to make the contact form functional.
* I would like to improve the performance of the website.


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