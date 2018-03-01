# Readable Completed Project

This is the completed Readable project for the Udacity React Developer course. All functionality required by [the rubric](https://review.udacity.com/#!/rubrics/1017/view) has been added, along with a couple extra bits. In addition to the required functionality, the following items have been added:

* react-router history.push() is used to manage all navigation. This allows for nicer UI controls for filtering, navigating back, etc.
* When adding a post, the category is locked in if the posts are already fitered by category
* Sort selection is maintained in redux state to persist across page navigation

## Basic Functionality
* Main screen displaying posts and their summaries, along with the ability to add, edit, delete and vote on posts
* Details screen displaying post details and comments, along with the ability to edit and delete posts as well as add, edit, and delete comments. Voting for both post and comments is also included.
* Edit dialog for all add / edit activities
* Post sorting and filtering
* Navigation between screens
* 404 page if navigating to a non-existant post

## TL;DR

To get started developing right away:

* git clone https://github.com/udacity/reactnd-project-readable-starter.git
* start the back-end development server with `node server`
* git clone https://github.com/thefinitemonkey/udacity-readable.git
* install all project dependencies with `npm install`
* start the front-end development server with `npm start`

## Backend Server Note

This project uses a back-end server that is maintained separately by Udacity. Information about the API server and how to use it can be found in its [README file](api-server/README.md).