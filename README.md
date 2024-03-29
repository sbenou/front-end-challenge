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
   The app is organized in folders. Folders, components and scss files follow the same structure: we have sass files for each component, for each route there is a page stored in the 'pages' folder. The app can be extended by adding routes which means adding new pages and each new page consist of components which are in their respective component file. Each component can be made of other individual components and scss files. each time we add a new component we can follow the same structure.
   There is a common scss file on the style folder, for specific components there is a scss file for component specific styles and generic styles can also be overriden on that local scss file as well. By adding more components eventually we could create a subfolder for each component and move the 'types' folder from where it is and have such 'types' folder into each component folder.
   On each component, i also test a card id to make sure the component is rendered and its data is loaded properly without errors.

   security: obviously this is just a front end project, it is worthy to note that I just used isEmpty function from lodash to check if the local storage is empty but there are well known vulnerabilities on lodash such as the prototype polution as reported by Snyk.
   <https://security.snyk.io/vuln/SNYK-JS-LODASH-450202>
   a particular attention in checking libraries vulnerabilities is of high importance in projects!

2. Does the proposed solution scale if more teams were to contribute?
   Partly same answer as above, since it is structured the team just need to follow the structure, if they want to change some convention to fit better with their needs they can obviously do it but definitely the app states would need to be stored on a reliable state management system such as redux for instance as it's complexity will definitely increment with adding new components and routes and functioanlities as well as backend apis. On top of that, to add properties, we would need to a form and a sophisticated automation process for agents to load new properties details (images, data, statuses, labels such as 'just added', 'bestvalue' etc...) and potentially using a headless CRM etc...

3. How difficult is it to onboard another engineer to the codebase?
   it is very easy to onboard a new engineer with such simple structure

4. Does the application work across different screen sizes?
   yes media queries have been addded and I use a UI Framework (ant design) which is responsive by default. The only landing page is responsive but we can follow the same process for new pages

5. Is the logic well tested?
   There is just one test for a card which is duplicated per property and one for the landing page, unfortunately I would need to spend more time building tests but the minimum is there.

6. Is the application accessible to all users?
   there is no authentication system so accessible to all but not deployed in a cloud environment

7. Is the code semantic?
   yes, I did my best to do so. the code base and variable names are meaningful as well as the css, for example on the landing page, all the functions and component names relates to their actions and what they represent.
   We could potentially used polymorphic components to bring more flexibility in the case of adding more components and functionalities to make it more semantic.

## Other considerations

I deliberately decided not to use Json Server simply because it means adding an additional server supporting the backend which I could have done by installing nodejs but I preferred, for the recommanded time to allocate on this project, to spend my time on:

- buiding the components
- adding mock data
- storing data in local storage
- bringing a structure to the project
