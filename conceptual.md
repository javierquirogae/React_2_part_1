### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

- What is a single page application?

- What are some differences between client side and server side routing?

- What are two ways of handling redirects with React Router? When would you use each?

- What are two different ways to handle page-not-found user experiences using React Router? 

- How do you grab URL parameters from within a component using React Router?

- What is context in React? When would you use it?

- Describe some differences between class-based components and function
  components in React.

- What are some of the problems that hooks were designed to solve?

- The purpose of React Router is to provide routing capabilities to React applications. It allows developers to create dynamic, multi-page applications by defining different routes and mapping them to specific components. React Router enables navigation within the application, handling URL changes and rendering the appropriate components based on the current URL.

- A single-page application (SPA) is a web application that loads all the necessary resources (HTML, CSS, JavaScript) upon the initial request and then dynamically updates the content without requiring a full page reload. SPAs typically rely on JavaScript frameworks like React to manage the rendering and updating of components, resulting in a more responsive and interactive user experience.

- Client-side routing refers to the process of handling routing on the client-side, typically within the web browser. In client-side routing, the entire web page is not reloaded when navigating between different routes. Instead, the client-side router intercepts the URL changes, updates the UI based on the defined routes, and dynamically renders the appropriate components. Server-side routing, on the other hand, involves the server processing each request and returning a new HTML page for each route, requiring a full page reload.

- Two ways of handling redirects with React Router are:
  1. Using the `<Redirect>` component: This component allows you to specify a target route that the user should be redirected to. It can be used when you want to redirect users programmatically, such as after form submissions or authentication.
  2. Using the `history` object: React Router provides a `history` object that allows you to manipulate the browser's history and navigate programmatically. You can use methods like `push()` or `replace()` to redirect the user to a different route. This approach is useful when you need to perform redirects based on certain conditions or in response to user interactions.

- Two different ways to handle page-not-found user experiences using React Router are:
  1. Defining a fallback route: You can define a catch-all route that matches any unknown URLs and renders a designated "404 Not Found" component. This way, when a user enters a non-existent URL, React Router will display the fallback component.
  2. Using the `<Switch>` component: The `<Switch>` component wraps multiple routes and renders only the first one that matches the current URL. By placing a route with no `path` prop at the end, you can create a fallback route that matches any unknown URLs. This approach allows you to define specific components for different types of errors (e.g., 404, 500) and display the appropriate one based on the error status.

- To grab URL parameters from within a component using React Router, you can access them through the `useParams` hook provided by React Router. This hook returns an object containing the key-value pairs of the URL parameters defined in the route. For example, if you have a route defined as `/users/:id`, you can access the `id` parameter within a component using `const { id } = useParams();`. This allows you to dynamically retrieve and utilize URL parameters in your components.

- Context in React is a feature that allows data to be shared between components without having to pass it through props manually at every level. It provides a way to propagate data down the component tree from a parent component to its descendants. Context is useful in scenarios where multiple components need access to the same data or when passing props through multiple intermediate components becomes cumbersome. It simplifies state management and can be used to create global state or theme settings that are accessible throughout the application.

- Class-based components and function components are two ways of defining components in React. Some differences between them include:
  1. Syntax: Class-based components are defined using ES6 classes and extend the `React.Component` class, while function components are defined as