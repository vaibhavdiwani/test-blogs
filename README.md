This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Notes:
1.  Two main views URLs
    - Listing page:  /
    - Blog page: /blog/:id
2. Use Local storage to load the blog.json: Used redux and redux-persist to maintain application state. redux-persist internally uses localStorage. 
3. Added id and likes properties
4. For sorting: 
    - No sorting initially.
    - Once you select the sort field, data is sorted in ascending order w.r.t to selected field.
    - If user selects the same field again then data is sorted in descending order w.r.t to that field.
5. For 'Similer Articales' section, showing all the similar category blogs, not kept any limit.
6. User can add like n number of times.
