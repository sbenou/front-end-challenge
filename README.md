# Front End Challenge

This project is using Ant design as UI framework (Ant Design simply for it's beautiful components) to display a list of properties as well as their data.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Technical notes

1. Is the code easy to maintain?
   it is separated in terms of structure and the components follow the same structure: we have sass files for each component, for each route there is a page. The app can be extended by adding routes which means adding new pages and each new page consist of components which are in their respective component file. each component can be made of other individual components and scss files. each time we add a new component we can follow the same structure.
   Common scss file on the style folder, for specific components there is a scss file for component specific styles and generic styles can be overriden on that local scss file as well

2. Does the proposed solution scale if more teams were to contribute?
   Partly same answer as above, since it is structured the team just need to follow the structure, if they want to change some convention to fit better with their needs they can obviously do it but definitely the app states would need to be stored on a reliable state management system such as redux for instance as it's complexity will definitely increment with adding new components and routes and functioanlities as well as backend apis.

3. How difficult is it to onboard another engineer to the codebase?
   it is very easy to onboard a new engineer with such simple structure

4. Does the application work across different screen sizes?
   yes media queries have been addded and I use a UI Framework (ant design) which is responsive by default. The only landing page is responsive but we can follow the same process for new page

5. Is the logic well tested?
   There is just one test for a card which is duplicated per property and one for the landing page

6. Is the application accessible to all users?
   there is no authentication system so accessible to all but not deployed in a cloud environment

7. Is the code semantic?
   yes, I did my best to do so. the code base and variable names are meaningful as well as the css, for example on the landing page, all the functions are component names relates to their actions and what they represent

## Other considerations

I deliberately decided not to use Json Server simply because it means adding an additional server suporting the backend which I could have done by installing node js but I preferred, for the time recommanded to allocate on this project, to spend my time on:

- buiding the components
- storing data in local storage
- brinding a structure to the project
