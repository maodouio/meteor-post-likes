// Meteor.publishComposite("userLikesComposite", function(userId) {
//   return {
//     find: function() {
//       return Like.collection.find({userId: userId});
//     },
//     children: [
//       {
//         find: function(like) {
//           return Activities.find({_id: like.linkedObjectId});
//         },
//         children: [
//           {
//             find: function(activity) {
//               return Like.collection.find({linkedObjectId: activity._id});
//             }
//           },
//           {
//             find: function(activity) {
//               // Find activity picture
//               return Images.find({_id: activity.picture});
//             }
//           },
//           {
//             find: function(activity) {
//               console.log("Get activity user info by activity.userId :", activity.userId);
//               return Meteor.users.find({_id: activity.userId});
//             }
//           }
//         ]
//       },
//       {
//         find: function(activity) {
//           return Meteor.users.find({_id: userId});
//         }
//       }
//     ]
//   }
// });

Meteor.publishComposite("userLikesComposite", function(userId) {
  return {
    find: function() {
      return Like.collection.find({userId: userId});
    },
    children: [
      {
        find: function(like) {
          return Posts.find({_id: like.linkedObjectId});
        },
        children: [
          {
            find: function(post) {
              return Like.collection.find({linkedObjectId: post._id});
            }
          },
          {
            find: function(post) {
              // Find post picture
              return Images.find({_id: post.picture});
            }
          },
          {
            find: function(post) {
              console.log("Get post user info by post.userId :", post.userId);
              return Meteor.users.find({_id: post.userId});
            }
          }
        ]
      },
      {
        find: function(post) {
          return Meteor.users.find({_id: userId});
        }
      }
    ]
  }
});
