Package.describe({
  name: "dalgard:logic-helpers",
  version: "0.1.1",
  summary: "A basic set of logic helpers for Blaze",
  git: "https://github.com/dalgard/meteor-logic-helpers",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.2.0.2");

  api.use([
    "ecmascript",
    "templating",
    "stevezhu:lodash@3.10.1"
  ], "client");

  api.addFiles("lib/logic-helpers.js", "client");
});

Package.onTest(function (api) {
  api.versionsFrom("METEOR@1.2.0.2");

  api.use([
    "dalgard:jade@0.5.4",
    "tinytest"
  ]);

  api.use([
    "blaze",
    "dalgard:logic-helpers@0.1.1"
  ], "client");

  api.addFiles("tests/test.js", "client");
});
