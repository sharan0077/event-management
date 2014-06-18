var mysql = require('mysql');
var eventsLib = {};
exports.eventsLib = eventsLib;

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '12345',
	database : 'test',
});

eventsLib.addEvent = function (event,res) {
	delete event.submit;
	var result = {};
	var insertEvent = 'insert into Events set ?';
	connection.query(insertEvent,event,function(err,record){
		if(err) result.message = "Cannot add event .Event already exists..";
		res.render('list');
	});
};

eventsLib.deleteEvent = function (eventName,res){
	var result = {};
	var removeEvent = 'delete from Events where eventName = ?';
	connection.query(removeEvent,eventName,function(err,record){
		if(err) result.message = "Cannot delete event .Event does't exists..";
		res.render('list');
	});
};

eventsLib.deleteParticipant = function(participant,res){
	var result = {};
	var deleteParticipantQuery = 'delete from Participants where eventName='+'"'+participant.eventName+'" && name="'+participant.name+'"';
	connection.query(deleteParticipantQuery,function(err,record){
		if(err) result.message = "Cannot delete participant. Participant does not exists..";
		res.render('list');
	});
};

eventsLib.addParticipant = function (participant,res){
	delete participant.submit;
	var result = {};
	var insertParticipant = 'insert into Participants set ?';
	connection.query(insertParticipant,participant,function(err,record){
		if(err) result.message = "Cannot add Participant..";
		res.render('list');
	});
};

eventsLib.updateEvent = function(event,res){
	delete event.submit;
	var result = {};
	var eventToUpdate = 'update Events set ? where eventName="'+event.eventName+'"';
	connection.query(eventToUpdate,event,function(err,record){
		if(err) result.message = "Could not update event..";
		console.log(record);
		res.render('list');
	});
};

eventsLib.searchEvent = function(event,searchBy,res){
	var result = {};
	var searchQuery = 'select * from Events where '+searchBy;
	connection.query(searchQuery,event,function(err,record){
		if(err) result.message = "no records found";
		console.log(record);
		res.render('list');
	});
};