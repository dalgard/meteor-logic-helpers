var helpers = Blaze._globalHelpers;

Tinytest.add("and", function (test) {
  test.equal(helpers.and());
  test.equal(helpers.and(true), true);
  test.equal(helpers.and("foo"), "foo");
  test.equal(helpers.and(true, "foo"), "foo");
  test.equal(helpers.and("foo", false, "bar"), false);
  test.equal(helpers.and("", "foo"), "");
});

Tinytest.add("or", function (test) {
  test.equal(helpers.or());
  test.equal(helpers.or(false), false);
  test.equal(helpers.or("foo"), "foo");
  test.equal(helpers.or(false, "foo"), "foo");
  test.equal(helpers.or("foo", false, "bar"), "foo");
  test.equal(helpers.or(false, "foo", "bar"), "foo");
  test.equal(helpers.or(false, false, "foo"), "foo");
});

Tinytest.add("is", function (test) {
  test.equal(helpers.is(), true);
  test.equal(helpers.is(false), true);
  test.equal(helpers.is("foo"), true);
  test.equal(helpers.is(false, false), true);
  test.equal(helpers.is("foo", "foo"), true);
  test.equal(helpers.is("foo", "bar"), false);
  test.equal(helpers.is(false, false, true), false);
  test.equal(helpers.is("foo", "foo", "foo"), true);
  test.equal(helpers.is("foo", "foo", "bar"), false);
});

Tinytest.add("gt", function (test) {
  test.equal(helpers.gt(), true);
  test.equal(helpers.gt(1), true);
  test.equal(helpers.gt(2, 1), true);
  test.equal(helpers.gt(1, 2), false);
  test.equal(helpers.gt(3, 2, 1), true);
  test.equal(helpers.gt(2, 1, 3), false);
});

Tinytest.add("lt", function (test) {
  test.equal(helpers.lt(), true);
  test.equal(helpers.lt(1), true);
  test.equal(helpers.lt(1, 2), true);
  test.equal(helpers.lt(2, 1), false);
  test.equal(helpers.lt(1, 2, 3), true);
  test.equal(helpers.lt(1, 3, 2), false);
});

Tinytest.add("in", function (test) {
  test.equal(helpers.in(), true);
  test.equal(helpers.in([]), true);
  test.equal(helpers.in(["foo"]), true);
  test.equal(helpers.in(["foo"], "foo"), true);
  test.equal(helpers.in(["foo"], "bar"), false);
  test.equal(helpers.in(["foo", "bar"], "bar"), true);
  test.equal(helpers.in(["foo"], "foo", "bar"), false);
  test.equal(helpers.in(["foo", "bar"], "foo", "bar"), true);
});

Tinytest.add("tern", function (test) {
  test.equal(helpers.tern());
  test.equal(helpers.tern(true));
  test.equal(helpers.tern(false));
  test.equal(helpers.tern(true, "foo"), "foo");
  test.equal(helpers.tern(false, "foo"));
  test.equal(helpers.tern(false, "foo", "bar"), "bar");
});
