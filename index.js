const express = require("express");
const app = express();
const engines = require("consolidate");
const bodyParser = require("body-parser");
const session = require("express-session");

app.engine("hbs", engines.handlebars);
app.set("views", "./views");
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    name: "haplo-test",
    secret: "wheresthesummergone",
    resave: false,
    saveUninitialized: false,
  })
);

// checks if a page already has children
const hasChildren = (pages, parentId) => {
  const children = pages.filter(page => page.parentId == parentId);
  return children.length === 0 ? false : true;
};

// takes pages and parentId and returns pages with blank children added
const withChildren = (pages, parentId) => {
  const pagesCopy = [...pages];
  for (i = 0; i < 4; i++) {
    const nextId = pagesCopy.length;
    pagesCopy.push({
      id: nextId,
      story: null,
      position: i,
      parentId: Number(parentId),
    });
  }
  return pagesCopy;
};

// filters pages array for chlidren of specified page (parent)
const getChildren = (pages, parentId) => {
  const pagesCopy = [...pages];
  const children = pagesCopy.filter(page => {
    return page.parentId === parentId;
  });
  return children;
};

app.get("/", (req, res) => {
  let pages = [];
  // check if pages object exists and if not create it with first part of story
  if (!req.session.pages) {
    pages = [
      {
        id: 0,
        story: "Once upon a time there was a big bad wolf.",
        parentId: null,
      },
    ];
  } else {
    pages = [...req.session.pages];
  }

  // check if child pages have been created for this page. If not we create them.
  if (!hasChildren(pages, 0)) {
    pages = withChildren(pages, 0);
  }

  // on the root, route we will always look at index [0] of the pages array
  const thisPage = pages[0];

  // let's find the children of the current page
  const children = getChildren(pages, 0);

  const nextPages = pages.filter(page => {
    return page.parentId == 0;
  });

  req.session.pages = pages;
  res.render("index", { thisPage, children });
});

app.post("/", (req, res) => {
  const pages = [...req.session.pages];
  const pageId = Number(req.body.pageId);
  const story = req.body.story;
  const parentId = Number(req.body.parentId);
  const position = Number(req.body.position);

  // update pages array with story
  pages[pageId] = {
    id: pageId,
    story: story,
    parentId: parentId,
    position: position,
  };

  // thisPage uses [parentId] as we're not changing page
  const thisPage = pages[parentId];
  const children = getChildren(pages, parentId);

  req.session.pages = pages;
  res.render("index", { thisPage, children });
});

app.get("/:pageId", (req, res) => {
  let pages = [...req.session.pages];
  const pageId = Number(req.params.pageId);

  if (!hasChildren(pages, pageId)) {
    pages = withChildren(pages, pageId);
  }

  const thisPage = pages[pageId];
  const children = getChildren(pages, pageId);

  req.session.pages = pages;
  res.render("index", { thisPage, children });
});

const server = app.listen(3000, () =>
  console.log("Server running at Port 3000")
);
