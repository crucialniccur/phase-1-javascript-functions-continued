// // code your solution here
// function saturdayFun(activity = "roller-skate") {
//   console.log(`This Saturday, i want to ${activity}`);
//   return "This Saturday, I want to bathe my dog!";
// }

// // function expressions
// // const mondayWork = function (activity = "go to the office") {
// //   console.log(`This Monday, I will ${activity}`);
// // };

// // function wrapAdjective(iLike = "*") {
// //   const wrappedOne = function (random = "special") {
// //     return `'You are ${random}'`;
// //   };
// //   return wrappedOne;
// //   return iLike;
// // }

// // function saturdayFun(activity = "roller-skate") {
// //   return `This Saturday, i want to ${activity}!`;
// //   return "This Saturday, I want to bathe my dog!";
// // }

// defining the sato function
function saturdayFun(activity = "roller-skate") {
  return `This Saturday,  want to ${activity}!`;
}

// modaei work
const mondayWork = function (activity = "go to the office") {
  return `This Monday i will ${activity}.`;
};

function wrapAdjective(wrapOne = "*") {
  return function (adjective = "special") {
    return `You are ${wrapOne}${adjective}${wrapOne}!`;
  };
}
