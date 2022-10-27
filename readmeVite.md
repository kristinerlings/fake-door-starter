# Vite fake-door

In a normal workflow, one would generally create a vite project first and then write the code for the project itself. However, in this case, we are going to implement Vite in our existing fake-door project. This is a good way to learn what is different between a 'normal' project and a Vite project.

## Install

First, install Vite as a dev dependency:
`npm install vite --save-dev`

We could install it as a regular dependency, but since we are not going to use it in production, it is better to install it as a dev dependency. Look at the difference in the package.json.

## Scripts

Add the necessary script to the package.json:

```json
"dev": "vite",
"build": "vite build",
"preview": "vite preview"
```

## Modules import

We are using a module bundler now, so we can write our imports like this:

```js
import JSConfetti from "js-confetti";
```

## Link css

Remove the link to the css file in the index.html and add the following line to the index.js:

```js
import "../css/style.css";
```

Use an @import rule in the style.css file to import the reset.css from there.

## Dev build

Run `npm run dev` and open the browser on the url mentioned. You should see the same result as before. Can you see the inline css in the head tag? Does the confetti still work?

## Production build

Run `npm run build`, you should see a `dist` directory being created. To test this build, you can run 'npm run preview' to get a 🥁... preview

## Deploy

When you would like to deploy a Vite project to a host like Netlify, you have to config this build process there. A lot of these hosting providers recognize witch bundler or framework is used and propose some settings when you create a new site.

Since we are updating an existing project, we have to set these things manually. In Netlify, go to 'Settings' -> 'Build and Deploy' -> 'Build settings' and set the following:

```none
Build command: npm run build
Publish directory: dist
```

Nothing fancy here, just the commands we already used. Now, you can deploy the project to Netlify (again) and see the result.
