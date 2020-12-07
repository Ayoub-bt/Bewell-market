import asyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";

// @desc    Fetch all posts
// @route   GET /api/blog
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Blog.find({});

  res.json({ posts });
});

// @desc    Fetch single post
// @route   GET /api/blog/:id
// @access  Public
const getPostById = asyncHandler(async (req, res) => {
  const post = await Blog.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// @desc    Delete a post
// @route   DELETE /api/post/:id
// @access  Public/Admin
const deletePost = asyncHandler(async (req, res) => {
  const post = await Blog.findById(req.params.id);

  if (post) {
    await post.remove();
    res.json({ message: "Post deleted" });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Public/Admin
const createPost = asyncHandler(async (req, res) => {
  const post = new Blog({
    title: "Sample title",
    image: "/images/sample.jpg",
    pour: "",
    list1: "ingredient 1",
    list2: "ingredient 2",
    list3: "",
    list4: "",
    list5: "",
    list6: "",
    list7: "",
    list8: "",
    list9: "",
    list10: "",
    list11: "",
    list12: "",
    list13: "",
    list14: "",
    list15: "",
    instr1: "instruction 1",
    instr2: "instruction 2",
    instr3: "instruction 3",
    instr4: "",
    instr5: "",
    instr6: "",
    instr7: "",
    instr8: "",
    instr9: "",
    instr10: "",
    instr11: "",
    instr12: "",
    instr13: "",
    instr14: "",
    instr15: "",
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Public/Admin
const updatePost = asyncHandler(async (req, res) => {
  const {
    title,
    image,
    pour,
    list1,
    list2,
    list3,
    list4,
    list5,
    list6,
    list7,
    list8,
    list9,
    list10,
    list11,
    list12,
    list13,
    list14,
    list15,
    instr1,
    instr2,
    instr3,
    instr4,
    instr5,
    instr6,
    instr7,
    instr8,
    instr9,
    instr10,
    instr11,
    instr12,
    instr13,
    instr14,
    instr15,
  } = req.body;

  const post = await Blog.findById(req.params.id);

  if (post) {
    post.title = title;
    post.image = image;
    post.pour = pour;
    post.list1 = list1;
    post.list2 = list2;
    post.list3 = list3;
    post.list4 = list4;
    post.list5 = list5;
    post.list6 = list6;
    post.list7 = list7;
    post.list8 = list8;
    post.list9 = list9;
    post.list10 = list10;
    post.list11 = list11;
    post.list12 = list12;
    post.list13 = list13;
    post.list14 = list14;
    post.list15 = list15;
    post.instr1 = instr1;
    post.instr2 = instr2;
    post.instr3 = instr3;
    post.instr4 = instr4;
    post.instr5 = instr5;
    post.instr6 = instr6;
    post.instr7 = instr7;
    post.instr8 = instr8;
    post.instr9 = instr9;
    post.instr10 = instr10;
    post.instr11 = instr11;
    post.instr12 = instr12;
    post.instr13 = instr13;
    post.instr14 = instr14;
    post.instr15 = instr15;

    const updatedPost = await post.save();
    res.status(201).json(updatedPost);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

export { getPosts, getPostById, deletePost, createPost, updatePost };
