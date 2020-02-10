const express = require('express')
const {productcontrollers} =require('../controllers')

const router = express.Router()

router.post('/postmovies',productcontrollers.postmovies)
router.post('/postcategories',productcontrollers.postcategories)

router.put('/editmovies/:id', productcontrollers.editmovies)
router.put('/editcategories/:id', productcontrollers.editcategories)

router.delete('/deletemovies/:id',productcontrollers.hapusmovies)
router.delete('/deletecategories/:id',productcontrollers.hapuscategories)

module.exports=router