module.exports = mongoose => {
    const Post = mongoose.model(
      "post",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
    return Post;
  };
//   schema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
//   });
//   const Tutorial = mongoose.model("tutorial", schema);
//   return Tutorial;
// };