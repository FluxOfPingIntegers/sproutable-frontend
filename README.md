# Sproutable A Place for Sprout Tables

This web app searches locations via zip code from a Rails backend that utilizes the USDA National [Farmers Market Directory API](https://search.ams.usda.gov/farmersmarkets/v1/svcdesc.html/) and displays pages with pictures pulled from [Imsea](https://imsea.herokuapp.com/) the image Api. along with information about products provided and hours of operation.  This project is currently deployed [here](https://sprouttable.herokuapp.com/)

## Getting started

• Step 1: Sign in or create a user account

• Step 2: Edit your information, you could include a url of an image for your profile

• Step 3: Search a zip code to view a list of Farmers Markets in that area

• Step 4: Click on the Farmers Market to see its information

## Installation

• First: You will need developer software, I used Visual Studio Code. Depending on your operating system you should follow these instructions: [Windows](https://code.visualstudio.com/docs/setup/windows) -OR- [macOS](https://code.visualstudio.com/docs/setup/mac) -OR- [Linux](https://code.visualstudio.com/docs/setup/linux)

• Second: You will need to clone the repo for this software and pull it up in VS Code. In your terminal please navigate to the folder you would like the files for this software to be and type
```bash
git clone git@github.com:FluxOfPingIntegers/congo_client.git
```
then switch to the folder you just created by typing
```bash
cd congo_client
```
finally you will need to fire up VS code by entering
```bash
code .
```
• Third: Once inside VS code this app requires you to create a .env file to your root directory and add it to your .gitignore file.  Once this is done you will need to set an ENV variable called LOCAL_API in order to communicate with the backend.  Instructions to do this can be found [here](https://create-react-app.dev/docs/adding-custom-environment-variables/).  This need to be set like the following inside your .env file:
```
REACT_APP_LOCAL_API=http://localhost:3000
```
then navigate within this apps directory to src/redux/actionCreator.js and on line 1 you will change:
```
const url = process.env.REACT_APP_PRODUCTION_API
```
to the following:
```
const url = process.env.REACT_APP_LOCAL_API
```
then you will also need to navigate to package.json within your root folder for this app and on line 19 change it from:
```
"start": "react-scripts start",
```
to the following:
```
"start": "PORT=3001 react-scripts start",
```

• Fourth: You will need to clone/run the repo for the backend for this software. Instructions can be found in the README [here](https://github.com/FluxOfPingIntegers/sproutable-backend)

• Fifth: After starting up the associated backend Rails server, go back within this repo.  Inside VS code within the main folder type 
```bash
npm install
```
and then once that finishes its process type
```bash
npm start
```
the app should then boot within your browser (chrome in my case).

• Finally you are ready to proceed to the Getting Started section of this README

## Contributing
 This is a project I am building for school (and for fun) and I am not currently looking for contributors. This may change in the future though!

## Author

Ryan Schleck – Flatiron student Acknowledgments

• The very supportive slack community at Flatiron Tech/Gems used • Javascript • Ruby On Rails (backend)

## License

[MIT](https://choosealicense.com/licenses/mit/)