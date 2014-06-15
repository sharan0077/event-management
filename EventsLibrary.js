var fs = require("fs");
var eventRecords = './EventDetails.txt';
var participantRecordDetails = './ParticipantDetails.txt';
var records = fs.existsSync(eventRecords) && fs.readFileSync(eventRecords,'utf-8') || '{}';
var participantRecords = fs.existsSync(participantRecordDetails) && fs.readFileSync(participantRecordDetails,'utf-8') || '{}';
var eventDetails = JSON.parse(records);
var participantDetails = JSON.parse(participantRecords);
exports.eventDetails = eventDetails;
exports.participantRecords = participantRecords;
var writeData = function(text){
	fs.writeFile(eventRecords,text,'utf-8');
};
var writeParticipantDetails = function(text){
	fs.writeFile(participantRecordDetails,text,'utf-8');
}
exports.addDetails = function (event) {
	var result = {record:{}};
	if(eventDetails.hasOwnProperty(event.eventId)){
		result.record[event.eventId] = eventDetails[event.eventId];
		result.message = 'Event : ' + event.eventId + 'already exists';
		return result;
	}
	eventDetails[event.eventId] = event;
	writeData(JSON.stringify(eventDetails));
	result.message = 'Event added successfully';
	result.record[event.eventId] = event;
	return result;
};
exports.deleteDetails = function (eventId){
	var result = {record:{}};
	if(!eventDetails.hasOwnProperty(eventId)){
		result.record  = {};
		result.message = 'Event : ' + eventId + 'does not exists';
		return result;
	}
	result.record[eventId] = eventDetails[eventId];
	delete eventDetails[eventId];
	writeData(JSON.stringify(eventDetails));
	result.message = 'Event delete successfully';
	return result;
};
exports.addParticipant = function (participant){
	var result = {record:{}};
	participantDetails[participant.participantName] = participant;
	result.message = 'Participant Details added successfully';
	result.record[participant.participantName] = participant;
	writeParticipantDetails(JSON.stringify(participantDetails));
	return result;
}