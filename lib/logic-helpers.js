// Reduce arguments
function compareArgs(reduce, ...args) {
  if (args[args.length - 1] instanceof Spacebars.kw)
    args.pop();

  return _.reduce(args, reduce);
}

// Return the argument if all arguments are strictly equal
Template.registerHelper("is", _.partial(compareArgs, (memo, item) => memo === item && item));

// Return the last truthy argument
Template.registerHelper("and", _.partial(compareArgs, (memo, item) => memo && item));

// Return the first truthy argument
Template.registerHelper("or", _.partial(compareArgs, (memo, item) => memo || item));

// Return the last argument that was less than the previous
Template.registerHelper("gt", _.partial(compareArgs, (memo, item) => memo < item && item));

// Return the last arguments that was greater than the previous
Template.registerHelper("lt", _.partial(compareArgs, (memo, item) => memo > item && item));


// Return the first or second string depending on condition
Template.registerHelper("tern", function (condition, first, second) {
  return condition ? first : second;
});


// Whether value is in array
Template.registerHelper("in", function (array, value) {
  return _.contains(array, value);
});
