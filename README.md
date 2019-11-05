# Amanda's HRLA React Workshop
Created Nov 5, 2019

#### Please see `INSTRUCTIONS.md` for information on how to get started with coding.

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
