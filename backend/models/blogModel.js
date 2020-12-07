import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    pour: {
      type: String,
    },
    list1: {
      type: String,
      required: true,
    },
    list2: {
      type: String,
      required: true,
    },
    list3: { type: String },
    list4: { type: String },
    list5: { type: String },
    list6: { type: String },
    list7: { type: String },
    list8: { type: String },
    list9: { type: String },
    list10: { type: String },
    list11: { type: String },
    list12: { type: String },
    list13: { type: String },
    list14: { type: String },
    list15: { type: String },
    instr1: { type: String, required: true },
    instr2: { type: String, required: true },
    instr3: { type: String },
    instr4: { type: String },
    instr5: { type: String },
    instr6: { type: String },
    instr7: { type: String },
    instr8: { type: String },
    instr9: { type: String },
    instr10: { type: String },
    instr11: { type: String },
    instr12: { type: String },
    instr13: { type: String },
    instr13: { type: String },
    instr14: { type: String },
    instr15: { type: String },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
