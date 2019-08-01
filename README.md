## A Multi Path Story Editor

# The brief

Please write a web application which enables the user to write "multi-path stories." A multi-path story is composed of sentences. After each sentence, there are up to four possible next sentences, and after each of those, another four possible next sentences, and so on.

Here's a short screencast which illustrates the application: [link](http://oneis-recruitment.s3.amazonaws.com/2014/stories-web-app.mp4)

## Approach

# Data

The first thing I thought about when planning the project was the data structure. What we are building is a set of pages where each page has 4 paths leading off it. Essentially we have each page is a parent with 4 children.

I decided to store the pages as objects in an array. The objects needed the following properties:

* id
* parentId
* story
• position

As we were only ever adding to the array the 'id' always equaled the same as the index position of the page. This made it easy to locate pages using bracket notation.

Position is where this child displays when being viewed on parent page. Clockwise from top. 0 = top, 1 = right, 2 = bottom, 3 = left.

# Routes

Get /

The home page route first checks if the session has any pages in memory already. 

If not the start of the story is created and it's children are then created using withChildren() function.

We then retrieve the children for this page using getChildren()


Get :pageId

When a page is navigated to we first check if children nodes have been created in memory for this page using hasChildren().

If no children exist for the page we create them using withChildren().

We then retrieve the children for this page using getChildren()


Post /

This route updates the story property of page to have text. The post request is made by the client with the following properties:

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


