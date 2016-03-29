Router.map(function() {
  this.route('userPostLikes', {
    template: 'userPostLikes',
    path: '/user/:_id/postlikes',
    waitOn: function () {
      Meteor.subscribe('user', this.params._id);
      return Meteor.subscribe('userPostLikesComposite', this.params._id);
    },
    data: function() {
      return {
        comments: Comment.collection.find(),
        posts: Posts.find(),
        user: Meteor.users.findOne({_id: this.params._id}),
      };
    }
  });
});
