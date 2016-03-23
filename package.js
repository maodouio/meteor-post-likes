Package.describe({
  name: 'maodouio:post-likes',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.2.1");

  api.use('iron:router@1.0.12', ["server", "client"]);
  api.use('reywood:publish-composite@1.4.2', "server");
  api.use("socialize:likeable@0.1.3");
  
  api.imply("socialize:likeable");

  api.addFiles("lib/collections.js");
  api.addFiles("lib/routes.js");

  api.addFiles("client/startup.js", "client");

  //Add the friend-model files
  api.addFiles("server/publications/likes.js", "server");
});
