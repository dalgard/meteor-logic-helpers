// Return the last truthy argument
Template.registerHelper("and", (...args) => _.reduce(popkw(args), (memo, item) => memo && item));

// Return the first truthy argument
Template.registerHelper("or", (...args) => _.reduce(popkw(args), (memo, item) => memo || item));

// Return whether all arguments are strictly equal
Template.registerHelper("is", (...args) => compareLeft(popkw(args), (a, b) => a === b));

// Return whether each argument is greater than the previous
Template.registerHelper("gt", (...args) => compareLeft(popkw(args), (a, b) => a > b));

// Return whether each argument is less than the previous
Template.registerHelper("lt", (...args) => compareLeft(popkw(args), (a, b) => a < b));

// Return whether value is in array
Template.registerHelper("in", (...args) => compareLeft(popkw(args), a => _.contains(args[0], a)));

// Return the second or third argument depending on the first
Template.registerHelper("tern", (...args) => popkw(args) && (args[0] ? args[1] : args[2]));


// Remove keyword arguments
function popkw(args) {
  if (args[args.length - 1] instanceof Spacebars.kw)
    args.pop();

  return args;
}

function compareLeft(args, test) {
  for (var i = 1, l = args.length; i < l; i++) {
    if (!test(args[i], args[i - 1]))
      return false;
  }

  return true;
}
