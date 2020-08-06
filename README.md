# project-ideas
This project is hoped to house numerous project ideas that newbies should embark on after acquiring basic skills. It will be appreciated if recruiters can contribute projects they love to see in an entry level portfolio.

## Dependencies
- [body-parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [joi](https://www.npmjs.com/package/joi)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## Installation
- Clone the repo ``git clone https://github.com/EBEREGIT/project-ideas``
- Open the project in a terminal
- Run ``npm install``
- In the ``dbConnect.js``, enter your mongoDB Atlas DB URI
- In the terminal, run ``nodemon index``

## Using Docker
- Clone the repo ``git clone https://github.com/EBEREGIT/project-ideas``
- Open the project in a terminal
- Build the app ``docker build -t project-ideas .``
- Run the app ``docker run -it -p 5000:3000 project-ideas``
