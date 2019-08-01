## A Multi Path Story Editor

# The brief

Please write a web application which enables the user to write "multi-path stories." A multi-path story is composed of sentences. After each sentence, there are up to four possible next sentences, and after each of those, another four possible next sentences, and so on.

Here's a short screencast which illustrates the application: [link](http://oneis-recruitment.s3.amazonaws.com/2014/stories-web-app.mp4)

## Approach

# Data

The first thing I thought about when planning the project was the data structure. What we are building is a set of pages where each page has 4 paths leading off it. Essentially each page is a parent with 4 children.

I decided to store the pages as objects in an array. The objects needed the following properties:

* id
* parentId
* story
• position

As we were only ever adding to the array the 'id' always equaled the same as the index position of the page. This made it easy to locate pages using bracket notation.

Position is where this child displays when being viewed on parent page. Clockwise from top. 0 = top, 1 = right, 2 = bottom, 3 = left.

# Routes

**Get /**

The home page route first checks if the session has any pages in memory already. 

If not the start of the story is created and it's children are then created using withChildren() function.

We then retrieve the children for this page using getChildren()


**Get :pageId**

When a page is navigated to we first check if children nodes have been created in memory for this page using hasChildren().

If no children exist for the page we create them using withChildren().

We then retrieve the children for this page using getChildren()


**Post /**

This route updates the story property of the page. The post request is made by the client with the following properties:

* pageId
* story
* parentId
* position

The pages array is updated using bracket notation to locate the correct element

```
pages[pageId] = {
    id: pageId,
    story: story,
    parentId: parentId,
    position: position,
  };
 ```

## Technology

This application was built to run on Node using the Express.js framework and Handlebars.js for the HTML templating.

Session management was done using the express-session library.

An end to end test was created using Cypress.

## How to run

On a machine with an up to date version of Node.js ...

1. Clone / Copy project to local machine
2. Navigate to folder
3. npm i
4. npm start

To run tests (using Cypress)

5. npm test

## Thoughts on the project ...

I hope that this project demonstrates an understanding of:

* Application structure and flow
* JS data structures (using arrays and objects)
* Setting up a node application
* Proving an application works using a testing framework

## Improvements

The way pages are referenced by their position in the array may not be resilient if this application became more complex. This could be updated to use object methods to find the object with the matching 'id' property instead. For this project the method worked fine though.

The tests show that the flow from the video example can be followed. They could be much more focused unit tests showing how each part of the functionality works though.

Cypress was used for ease as the testing I have most recently done has been on React apps using Jest and Testing Library which I couldn't see easily how to use for this type of App. Jest unit tests may have been a better solution if possible.

To make life easier for myself I used data-test-ids in the html to locate elements. Using Testing-Library with Cypress would have made navigating around the DOM more like a real user.

## Conclusion

This was an enjoyable little project. Total time was about a day. A bit of time was needed to refresh myself with Node and Express which I havn't used for a while and Handlebars that I had never used. A couple of annoying bugs took far longer to find than I would have liked (one in particular with Handlebars variables).
