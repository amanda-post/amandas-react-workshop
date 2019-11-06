# HRLA 33 Clarifications & Fixes


## 1. Setting the default `pokeTeam` state array in `App.jsx`

* We mentioned the idea of using `Array(6)` -- this solution does not work, because **an array of all undefined values cannot be mapped with `.map( )`, according to JavaScript**.

* Therefore, we will set the default state to `[null, null, null, null, null, null]`. 
**This array is mappable with `.map( )`, and satisfies our requirement of needing an empty slot to be a falsy value.**

## 2. Writing our `addPokemon` function inside of App, to update *one* index in its state

* We talked about how we aren't allowed to directly modify React's state -- ever. The problem we ran into was that we needed to modify only one of the indices in the `pokeTeam` array.

* The solution: 
  * Create a variable that holds a shallow copy of the array using ES6: `let copiedState = [...this.state.pokeTeam];`.
  * Then, update that copy: `copiedState[index] = data;`. 
  * Lastly, set the state the right way: `this.setState({ pokeTeam: copiedState });`

## 3. Important note on "unique key props"!!!!

>This issue affects `PokeTeam.jsx`, `PokeTeamSlot.jsx`, and `AddPokeForm.jsx`.

* The **React Docs** explain why React needs sibling nodes to be differentiated with `keys`:
  * [General info on using keys with lists](https://reactjs.org/docs/lists-and-keys.html)
  * [Explaining situations in which React works faster if you give it keys](https://reactjs.org/docs/reconciliation.html#recursing-on-children)
* I highly recommend reading the second one especially, but the important takeaway from this is that:
  * **You cannot access `props.key`.** You add the `key` "prop" for React to use/reference, and it is never *actually* passed down as a real prop.

  * **If you need to access your uniquely-identifying key or index in, you *must* have passed it down as its own, separate prop.**

## 4. Minor fixes in `AddPokeForm.jsx`

* **Inside of the `handleSubmit(e)` function:**
  1. We need to add `e.preventDefault( );` as the first line -- this is to prevent the browser from refreshing. 
    * (AKA, we are 'preventing' the 'default action' that results when a `submit` event occurs, which is refreshing the page.)
  2. Double check that we are referencing `this.props.index`, per the above fix, #3.


* I added `className="pokeTeamSlot"` to the `<form>` element inside of `AddPokeForm.jsx`, so that the same css styles (border, margin, padding) are applied whether the slot is empty or not.