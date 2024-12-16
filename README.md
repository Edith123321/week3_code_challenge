# Week three code Challenge- Flatiron Movie Theater

## Description
This is a movie booking web application where users can browse movies, check available seats, and book tickets in real-time. 
The app features dynamic updates for seat availability and an intuitive user interface.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)
- [Authors](#author)

## Features
- Search for movies by title or description.
- View real-time seat availability.
- Book tickets for your favorite movies.
- A main section and the aside section 
- A placeholder on html showing the arrangement of the side bar which is later hidden and replaced with the rendered sidebar.

## Installation
1. Clone the repository:
   ```bash
   git@github.com:Edith123321/week3_code_challenge.git
   ```
2. Navigate to the specific directory
   ``` bash
   cd week3_code_challenge
   ```
3. Install dependancies
   ```bash
   npm install
   ```
4. Get npm running
   ``` bash
   npm start
   ```
5. Start the watch json server to get the localhost link
   ``` bash
   json-server --watch films.json 
   ```
## Usage
- once you open the project with live server, you will spot the search bar and the search button at the top of the page. 
- On the left side, you'll see the side bar displaying all the movies in the catalogue with their Show times. 
- By default the movie index 0 is displayed on the main body of the page. It displays information such as the poster, the show title, the film description, the show time and the number of sears remaining till full. 
- There is a book now button on the main section which onclick sends an alert message and reduces the number of the seats available. When it is 0 the book now button now reads sold out. It is disabled.

# Technologies
- HTML
- CSS
- JavaScript
- JSON

# License
 This project is licensed under the MIT licence and is part of My moringa School Code challenge. 
 
# Author
This project was done by Edith Githinji
