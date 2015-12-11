Router.map(function() {
  this.route('userLikes', {
    template: 'userLikes',
    path: '/user/:_id/likes',
    waitOn: function () {
      Meteor.subscribe('user', this.params._id);
      return Meteor.subscribe('userLikesComposite', this.params._id);
    },
    data: function() {
      return {
        comments: Comment.collection.find(),
        activities: Activities.find(),
        user: Meteor.users.findOne({_id: this.params._id}),
      };
    }
  });
});
