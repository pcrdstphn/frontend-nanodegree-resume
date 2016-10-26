

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

var work = {
	"jobposition" : "Consultant"
}

work.employer = "DAPA"
work.yearsworked = "2014-Present"
work.cityofbusiness = "Lake George, NY"

var education = {
	"schoolname" : "University of Maine at Orono"
}

education["schooldates"]="1982-1986";
education["schoolcity"]="Orono, ME";

var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic=HTMLbioPic.replace("%data%", bio.biopic);
var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub=HTMLgithub.replace("%data%", bio.contacts.github);
var formattedSkills=HTMLskills.replace("%data%", bio.skills);
var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%", bio.welcomemsg);
var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);

var formattedTitle=HTMLworkTitle.replace("%data%", work.jobposition);
var formattedEmployer=HTMLworkEmployer.replace("%data%", work.employer);
var formattedworkDates=HTMLworkDates.replace("%data%", work.yearsworked);
var formattedworkLocation=HTMLworkLocation.replace("%data%", work.cityofbusiness);

var formattedschoolName=HTMLschoolName.replace("%data%", education.schoolname);
var formattedschoolDates=HTMLschoolDates.replace("data%", education.schooldates);
var formattedschoolCity=HTMLschoolLocation.replace("%data%", education.schoolcity);


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

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedTitle, formattedEmployer, formattedworkDates, formattedworkLocation);

$("#education").append(HTMLschoolStart);
$("#education").append(formattedschoolName, formattedschoolDates, formattedschoolCity);

