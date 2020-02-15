const tree = {
  value: 1,
  next: [
    {
      value: 6,
      next: null
    },
    {
      value: 2,
      next: [
        {
          value: 77,
          next: null
        },
        {
          value: 4,
          next: [
            {
              value: 55,
              next: null
            },
            {
              value: -5,
              next: null
            }
          ]
        }
      ]
    }
  ]
};

let counter =0;

function countLeaf(obj) {
 for (let key in obj) {
   if (typeof obj[key] === "object" && obj[key]!== null) {
     counter++;
     countLeaf(obj.next);
   }
 }
}

countLeaf(tree);
console.log(counter);
