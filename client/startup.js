
Meteor.startup(function () {
  console.log("Package activity-likes startup...");
  console.log("Session.set('hasPackageActivityLikes', true);");
  Session.set('hasPackageActivityLikes', true);
});
