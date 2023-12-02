import 'core-js/features/object/group-by.js';

const posts = [
    {
      name: "Why Should You Use Core Web Vitals in Your WebSite",
      category: "performance",
    },
    { name: "Object.groupBy", category: "javascript" },
    {
      name: "How to Automate Page Speed Insight Score",
      category: "performance",
    },
  ];

const groups = Object.groupBy(posts, ({ category }) => category);
console.log(groups);