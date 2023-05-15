const express = require('express')
const router = express.Router()

const blogCtrl = require('../controllers/blogging_controller')

router.get("/", blogCtrl.index);

router.post("/blogs", blogCtrl.create);

router.get("/:id", blogCtrl.getOne);

router.delete("/:id", blogCtrl.delete);

router.put("/:id", blogCtrl.update);

module.exports = router


