# Atomic Blog

Atomic Blog is a very simple web-based blogging platform that empowers users to create, search, and view blog posts in a user-friendly interface. It offers features for post creation, search functionality, and a dark mode for customization.This project is focused in demonstrate optimization technique in React.This project initially was very slow then applided memoization (optimization technics) and makes it smooth reactive.In this app Components are memoized by memo function when needed . Also useMemo and useCallback hook is used to memoize appropiate position for prevent wasted re-render.

## Live Application

To explore the live version of Atomic Blog and start creating and browsing blog posts, please visit [Atomic Blog Web App](https://atomic-blog-web.netlify.app/).

## Key Features

### 1. Add optimization techniques (memoization)

## Lazy Loading of bundle.js:

- Lazy loading is a technique used to load assets, like JavaScript files, only when they are needed. In this case, the bundle.js file is loaded lazily, which enhances app performance by reducing initial loading times. It ensures that the app starts quickly and doesn't waste resources on loading scripts that might not be immediately necessary.

## React Memoization:

- React memoization is a mechanism to optimize functional components. It memoizes (caches) the result of the component's rendering so that it doesn't re-render unnecessarily. The Archive component is wrapped with the memo higher-order component, which means it will only re-render if its props have changed. This optimization prevents re-renders when props remain the same, enhancing performance.

## useMemo and useCallback:

useMemo and useCallback are hooks that help in optimizing the performance of the application by memoizing values and functions. In the code, useMemo is used to memoize the archiveOption value. This means that the archiveOption is recalculated only when the posts.length changes, preventing unnecessary recalculations.
useCallback is used for the handleAddPost function, ensuring that the function remains the same across re-renders unless its dependencies change. This optimization is particularly useful when passing functions as props to child components.

## Efficient Rendering:

The application is designed to render efficiently. It avoids unnecessary re-renders through the use of memoization and proper handling of state and props. This results in a smoother user experience and better performance.

### 2. Create Posts

- Users can easily create new blog posts by providing a title and body.
- The "Add post" feature allows for quick post creation.
- Created posts are added to the list of existing blog posts.

### 3. Search Posts

- Users can search for specific posts by entering search queries.
- The application provides a search bar for filtering posts based on keywords.
- Search results are displayed in real-time for user convenience.

### 4.Dark Mode

- Enjoy a customizable user experience with a fake dark mode toggle.
- Toggle between light and dark modes with a single click.
- The application's appearance changes to match the selected mode.

### 5. Archive Posts

- View and manage archived posts in the "Post archive" section.
- Easily show or hide archived posts with the "Show archive posts" button.
- Add archived posts as new posts for a seamless user experience.
