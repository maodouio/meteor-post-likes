
// var Likeable = LikeableModel.extend();

// if (typeof Activities !== "undefined") {
//   Activities._transform = function (document) {
//     return new Likeable(document);
//   };

//   Likeable.prototype._collection = Activities;
// }

var Likeable = LikeableModel.extend();

if (typeof Posts !== "undefined") {
  Posts._transform = function (document) {
    return new Likeable(document);
  };

  Likeable.prototype._collection = Posts;
}
