# React Counter Application

This project is a simple React Counter Application developed using React and Vite. The main purpose of this project is to understand the basic concepts of React such as functional components, state management using hooks, and component based architecture. The application displays a number on the screen and allows the user to increment, decrement, or reset the value using buttons.

The project is structured in a modular way so that different parts of the user interface are separated into individual components. The main entry point of the application is **main.jsx**, which renders the App component into the browser DOM. The **App.jsx** file acts as the root component and loads the Counter component. The **Counter component** contains the main logic of the application and manages the state of the counter.

The counter value is stored using the **useState hook**, which allows React components to manage dynamic data. Whenever the user clicks the increment or decrement button, the state value changes and React automatically updates the user interface. The reset button sets the counter value back to the initial value.

To keep the code organized and reusable, the user interface is divided into smaller components. One component is responsible for displaying the counter value, while another component handles the buttons used to modify the value. This separation of components makes the code easier to understand, maintain, and reuse in other applications.

The project also includes validation logic to prevent the counter value from going below a minimum limit or exceeding a maximum limit. This helps maintain correct application behavior and prevents unexpected results.

This application demonstrates the basic principles of React development such as state management, component separation, and dynamic rendering. It is useful for beginners who want to learn how React applications work internally and how user interactions can update the interface automatically.

The project has been deployed using **GitHub Pages**, which allows the application to be hosted online and accessed through a web browser.
