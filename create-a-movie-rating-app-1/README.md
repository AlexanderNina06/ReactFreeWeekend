---
difficulty: 1
tags: react
chapter: "Chapter 3: JSX"
training: true
---

# Create a Movie Rating App

## Challenge Description

Time to build a Movie Rating App! 🎬 You'll be working with a collection of movies and displaying them in a clean, organized format. This challenge focuses on the fundamentals of JSX rendering and working with arrays of data to create dynamic lists.

Your task is to display a list of movies, their descriptions, genres, and ratings.

## Requirements

- Display all the movies from the `ALL_MOVIES.items` array
- Display the name, description, and image of each movie
- Display the genres of each movie
- Display the movie rating as stars, with a maximum of 5 stars. You can use the provided `StarIcon` component or simple emoji/text for stars.

> 💡 HINT: The `map()` function is your best friend for rendering lists in React - use it to transform your data into JSX elements
>
> 💡 HINT: Remember that each item in a mapped list needs a unique `key` prop for React to efficiently update the DOM

## Other Considerations

- TailwindCSS is preinstalled with the default config. It might be helpful for you, if you want to have some styles. (Not obligatory)
- 😀 The movie list is provided as boilerplate in `./data/movies.js`, but feel free to add your favorite one to the list
- 👀 Don't peek at the solution until you've solved the exercise yourself or exhausted your resources. Challenging yourself will best prepare you for the exam.

## Example of Finished App

This is an example of what the functionality should look like for the completed exercise. If you'd like to mimic this style, feel free to do so, but it is not required.

![Screenshot of the finished app](https://api.certificates.dev/repositories/assets/UmVhY3QtQ2VydGlmaWNhdGlvbi9sMi10cmFpbmluZy1jb2RlLWNoYWxsZW5nZS1jaGFwdGVyLTMtMS9zY3JlZW5zaG90LnBuZw==)
