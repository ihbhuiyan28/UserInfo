const express = require("express");
const { getUsers, getUsersById, postUsers, patchUsers, deleteUsers } = require("../controllers/users.controller");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUsersById);
router.post("/", postUsers);
router.patch("/:id", patchUsers);
router.delete("/:id", deleteUsers);

module.exports = router;
