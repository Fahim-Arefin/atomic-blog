# Atomic Blog

**Atomic Blog** is a very simple web-based blogging platform that empowers users to create, search, and view blog posts in a user-friendly interface. It offers features for post creation, search functionality, and a dark mode for customization.This project is focused in demonstrate optimization technique in React.This project initially was very slow then applided memoization (optimization technics) and makes it smooth reactive.In this app Components are memoized by memo function when needed . Also useMemo and useCallback hook is used to memoize appropiate position for prevent wasted re-render.

## Live Application

Explore the live version of Atomic Blog and start creating and browsing blog posts by visiting the [Atomic Blog Web App](https://atomic-blog-web.netlify.app/).

## Key Features

### 1. Optimization Techniques (Memoization)

#### Lazy Loading of bundle.js

- **Lazy loading** is employed to load assets, such as JavaScript files, on-demand, reducing initial loading times. By deferring the loading of the bundle.js file, the app starts quickly and conserves resources, loading scripts only when necessary.

#### React Memoization

- **React memoization** optimizes functional components by caching the rendering results, avoiding unnecessary re-renders. The `Archive` component is wrapped with the `memo` higher-order component, ensuring it re-renders only when its props change. This optimization enhances performance by preventing redundant re-renders.

#### useMemo and useCallback

- **useMemo** and **useCallback** are React hooks used to optimize application performance by memoizing values and functions. In the code, `useMemo` memoizes the `archiveOption` value, recalculating it only when `posts.length` changes. `useCallback` is applied to the `handleAddPost` function, ensuring it remains consistent across re-renders unless its dependencies change. This is especially useful when passing functions as props to child components.

#### Efficient Rendering

- The application is designed for efficient rendering, avoiding unnecessary re-renders through memoization and proper state and props management. This results in a smoother user experience and better performance.

### 2. Create Posts

- Easily create new blog posts by providing a title and body.
- The "Add post" feature facilitates quick post creation.
- Newly created posts are seamlessly integrated into the list of existing blog posts.

### 3. Search Posts

- Search for specific posts by entering search queries.
- The application provides a user-friendly search bar for filtering posts based on keywords.
- Real-time search results are displayed, ensuring user convenience.

### 4. Dark Mode

- Enjoy a customizable user experience with a faux dark mode toggle.
- Toggle between light and dark modes with a single click.
- The application's appearance adapts to match the selected mode, enhancing readability.

### 5. Archive Posts

- Easily view and manage archived posts in the "Post archive" section.
- Show or hide archived posts with the "Show archive posts" button.
- Add archived posts as new posts with ease, providing a seamless user experience.
