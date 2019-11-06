# Amanda's HRLA React Workshop
Created Nov 5, 2019

#### Please scroll down to the `INSTRUCTIONS` for information on how to get started with coding.

----
## What is React?
[React](https://reactjs.org/docs/hello-world.html) is a JavaScript **library** used in creating interactive UIs (user interfaces) on the front-end of an application.


#### What are some of the things that make React unique?

1) [The Virtual DOM](https://reactjs.org/docs/faq-internals.html)
>The virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory, and synced with the "real" DOM by a library such as **ReactDOM**.

2) [Components](https://reactjs.org/docs/components-and-props.html)
>Using components allows you to split the UI into independent, reusable pieces, and think about each piece in isolation. See the **React Component API reference** [here](https://reactjs.org/docs/react-component.html).

3) [JSX syntax / file extensions](https://reactjs.org/docs/introducing-jsx.html)
> JSX is a **syntax extension to JavaScript**. It allows for separation of *concerns*, rather than separation of *technologies* (i.e. HTML vs. JavaScript). React doesn't *require* use of .jsx file extensions, but most find it useful as a visual aid, and it also allows React to show more useful error and warning messages for debugging.

----
## How React works

### Component Types
**Stateless / Functional**

* Should be used when you have no use for state or lifecycle methods
* Newly added to React, you can use state with functional components by creating a [React hook](https://reactjs.org/docs/hooks-overview.html) and "hooking into using React state".

**Stateful / Class**

* Should be used whenever you need to use state or [lifecycle methods](https://reactjs.org/docs/state-and-lifecycle.html).
* Newly added to React, you can use state with functional components by creating a [**React hook**](https://reactjs.org/docs/hooks-overview.html). See the React hooks API [here](https://reactjs.org/docs/hooks-reference.html).

----
# INSTRUCTIONS

----
## How to get started
1. Ensure that you have [Node](https://nodejs.org/en/) installed
2. Ensure that you have **forked** and **cloned** this [repo](https://github.com/amanda-post/amandas-react-workshop) to your computer with `git clone https://github.com/amanda-post/amandas-react-workshop.git`, then `cd amandas-react-workshop`

Then,

1. Open a terminal tab, and run `npm install` to download the dependenices.
2. In that same tab (after completion), run `npm start` to start your node server.
3. In a **NEW** terminal tab, run `npm run build` to start Webpack, which will watch and auto-transpile your files (using Babel). *Make sure this tab remains running*.
4. Open up a chrome tab at `localhost:3000` to see your code being rendered.

----
## Overview of this repo

* With this project, we will be building a team of 6 of our favorite Pokemon, who we will take to battle with us! 

* Our task is to build out functionalities to **add** a Pokemon to a slot, and **remove** a Pokemon from its slot, and **update** a slot with a new Pokemon. *Let's get started!*

----
## Checklist of Features to Complete

### Step 1: Connect your React app to the browser, using `index.js`

* Render `App.jsx` to our `index.html`.


### Step 2: Start writing out `App.jsx` component

* Create **App**, as a *stateful/class* component.
* Create a piece of state to store an array of pokemon objects, which will make up your team.
* Render the **PokeTeam** component inside of the **App** component.

### Step 3: Write out `PokeTeam.jsx` and `PokeTeamSlot.jsx`

* Create both **PokeTeam** and **PokeTeamSlot** as *functional* components.
* Connect the two components (in React style), using the comments at the top of each file as a guideline.

> Leave this hard-coded for now; we will refactor momentarily.

### Step 4: Check your work

* Make sure you are able to see the hard-coded **PokeTeam** and **PokeTeamSlots** in your browser.

### Step 5: Refactor `PokeTeam.jsx` and `PokeTeamSlot.jsx` for variable data

*  **PokeTeam** should render one **PokeTeamSlot** for each pokemon in the array in **App**'s state

* **PokeTeamSlot** components should be able to conditionally render the pokemon's `id`, `name`, and `img` based on what is passed down to it via `props`.

### Step 6: Check your work

* Set **App**'s state to a real team of Pokemon, by importing and using `examplePokeTeam.js`
* You should see a rendered list of 6 pokemon, with their id, name, and image displayed.

### Step 7: Refactor to handle`PokeTeamSlot.jsx` starting with an empty team

* **PokeTeamSlot** should have [conditional rendering](https://reactjs.org/docs/conditional-rendering.html), based on whether there is a pokemon or not at that given index in the pokemon team array passed down from **App**.
  * If there is *no pokemon* in that slot, render a `<button>` that says `"Add a pokemon"`
  * Else, keep the normal rendering of the pokemon's `id`, `name`, and `img`.

### Step 8: Create functionality to add/assign a pokemon to a slot

* Write functionality that updates **App**'s state (pokemon array) using a query (either the pokemon's `name` or`id`), and the provided `getPokemon` function, found in the `lib/` folder of this repo.
* Each **PokeTeamSlot** should have a form that can be used to call that function, and add a new pokemon.
  * Create a new component, called `addPokeForm.jsx`.
  * In this file, build out a *stateful / class* component with a form that allows the user to input a pokemon `name` or `id`, and updates **App**'s state using the functionality we just built out.

### Step 9: Learn about forms and state with `addPokeForm.jsx`

* Capture the information typed into the `<form>`, so that we can update **App**'s state with it.

>We can do this by implementing & updating state within the **addPokeForm** component.

1) Write out functionality to update the state of **addPokeForm** as it changes with user input. *Hint: you may need the `onChange` listener!*
2) Write out functionality that takes the updated state and calls the function to update **App**'s state with the new pokemon.

**Further steps to test your abilities are to come!**
