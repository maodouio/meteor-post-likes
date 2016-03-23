Meteor.startup(function () {
  console.log("Package post-likes startup...");
  console.log("Session.set('hasPackagePostLikes', true);");
  Session.set('hasPackagePostLikes', true);
});