const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgurl: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
