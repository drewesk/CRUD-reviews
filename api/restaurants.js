// const express = require('express');
//
// const router = express.Router();
//
// const queries = require('../db/queries');
//
// function isValidId(req, res, next) {
//   if(!isNaN(req.params.id)) return next();
//   next(new Error('invalid ID'));
// }
//
// // function validRestaurant(restaurant) {
// //
// // }
//
// router.get('/', (req, res) => {
//     queries.getAll('restaurant').then(items => {
//       res.json(items);
//     });
// });
//
// router.get('/:id', isValidId, (req, res, next) => {
//   queries.getOne('restaurant', req.params.id).then(item => {
//     if(item){
//       res.json(item);
//     } else {
//       next();
//     }
//   });
// });
//
// module.exports = router;
