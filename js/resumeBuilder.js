

var bio = {
	"name" : "Stephanie Picard",
	"role" : "Web Developer",
	"biopic" : "images/me.jpg",
	"contacts": {
		"mobile" : "+1 859-537-6998",
		"email" : "pcrdstphn@yahoo.com",
		"github" : "github.com/pcrdstphn",
		"location" : "Lake George, NY"
	},
	"skills" : ["Front End Web Dev", "Manufacturing Excellence", "Leadership"],
	"welcomemsg": "Welcome to my online Resume"
	};


var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic=HTMLbioPic.replace("%data%", bio.biopic);
var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub=HTMLgithub.replace("%data%", bio.contacts.github);
var formattedSkills=HTMLskills.replace("%data%", bio.skills);
var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%", bio.welcomemsg);
var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedbioPic);
$("#header").append(HTMLskillsStart);
$("#skills-h3").append(formattedSkills);
$("#header").append(formattedWelcomeMsg);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);



/*
	
	"location":"Lake George, NY";
	"welcome-message": "Welcome to my online Resume";
	
*/