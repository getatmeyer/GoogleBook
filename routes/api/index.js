const router = require("express").Router();
const booksRoutes = require("./books");

// API Routes
router.use("/books", booksRoutes);


module.exports = router;