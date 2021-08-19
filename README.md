# Registered Cars Application

In this application user can able to select make and model for cars based on selection, model information shows in the table with pagination.
- **I used (https://www.friday.de/) website theme for project.** 

## Features

- Onces application load successfully user will able to see dropdrown for a selection of a make, If in case of error occurs then dropdown will be disable until make 
loads.
- After make a selection, if their are models are available only model dropdown able to select, In case of model is not available then user need to change make option.
- User can see models if modoles are presents for that makes.
- After successful selection of make and model,Models information table show which contain information about models such as make,model,Fuletype,bodtype...
- User can move different pages using pagination option and go to page option also available.

## Technology

### Frontend

- On frontend stack is **React-typescript,hooks and css,react-table** to show a table and pagination.
- Implementation of application using three componets, **Header component** which show name of app and **Cars Component** which contains all logic of application.
- **InfoTable component** which is presentational components show model information.
- **Custom hooks** for fetching data from server is also implemented.
- I also added **pagination** for table along with goto page and last and previous page funcationality.
- Application is fully responsive able to view on tablate ,ipad mode as well as mobile view mode.
- Runs the app in the development mode.
- Open **http://localhost:3000** to view it in the browser.

## Installation
 **Need apisever run simultaneously**
```sh
clone repo
cd client-app
npm install
npm start
```

## Preview

![Project](https://media.giphy.com/media/7OMmzm28wvVMrNkuvf/giphy.gif?cid=790b76113ee0df2bc9aaabfb08089d22f81823ddf082dfd2&rid=giphy.gif&ct=g)
