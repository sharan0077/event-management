var express = require('express');
var router = express.Router();

/* GET home page. */
router.getHomePage = function(req, res){
  res.render('index', { title: 'Express' });	
}
router.getLoginPage = function(req, res){
	res.render('login');
}
router.getUserHome = function(req,res){
	res.render('userHome');
}
router.getAddEvent = function(req,res){
	res.render('addEvent');
}
router.getUpdateEvent = function(req,res){
	res.render('updateEvent');
}
router.getSearchEvent = function(req,res){
	res.render('searchEvent');
}
router.getDeleteEvent = function(req,res){
	res.render('deleteEvent');
}
router.getManageParticipants = function(req,res){
	res.render('manageParticipants');
}
router.getAddParticipant = function(req,res){
	res.render('addParticipant');
}
router.getDeleteParticipant = function(req,res){
	res.render('deleteParticipant');
}
router.getUpdateParticipant = function(req,res){
	res.render('updateParticipant');
}
router.getSearchParticipant = function(req,res){
	res.render('searchParticipant');
}
module.exports = router;
