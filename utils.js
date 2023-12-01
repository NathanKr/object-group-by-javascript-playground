export function sample1() {
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

  /*
   --- group by category : javascript , performance
   --- groups keys are categories and value are the original object
   */
  const groups = Object.groupBy(posts, ({ category }) => category);
  console.log(groups);
  console.log(Object.keys(groups));
  console.log(Object.values(groups));
}

export function sample2() {
  const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

  /*
   --- group by type : vegetables , fruit , meat
   --- groups keys are types and value are the original object
   */
  const groups = Object.groupBy(inventory, ({ type }) => type);
  console.log(groups);
  console.log(Object.keys(groups));
  console.log(Object.values(groups));
}

export function sample3() {
  const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

  /*
   --- group by inventory : big , small
   --- groups keys are quantity based and value are the original object
   */
  const groups = Object.groupBy(inventory, ({ quantity }) => {
    return quantity > 5 ? "big" : "small";
  });
  console.log(groups);
  console.log(Object.keys(groups));
  console.log(Object.values(groups));
}
