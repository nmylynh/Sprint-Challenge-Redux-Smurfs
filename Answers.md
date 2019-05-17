1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

concat(), slice(), and ...spread. You use spread to create a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: An action is a plain JS object describing the change of the Redux's store state tree. Anytime to want to change the state, you must dispatch an action.

Reducers: A reducer specifies how the next state is calculated based on the current stae and the action being dispatched.

Store: The store binds together all the principles of redux, in which it:
    -holds the application's state object
    -dispatches actions 
    -and when you create it, you need to specify the reducer that tells how state is updated with actions

Store is the single source of truth because everything that changes in your app, including the data, UI state, etc, is contained in a single object we call the state or state tree, which is defined and stored inside the store. It's read only and only dispatched actions can alter it, but components can never directly do it.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
App state = store
component state = class component in which state is defined

Use the store for data that is mainly used across your application

Use component data for localized data that isn't really used anywhere else

1.  What is middleware?

Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer.

Examples: logging actions, reporting errors, making asynchronous requests, and dispatching new actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
middleware that lets you call action creators that return a function instead of an action object. It dispatches the asynchronous operations first and then the synchronous.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect