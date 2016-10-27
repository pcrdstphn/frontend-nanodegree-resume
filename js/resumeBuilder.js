

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
	"jobs" : [
		{
			"jobposition" : "Consultant",
			"employer" : "Directed Action Professional Associates",
            "yearsworked" : "2014-Present",
            "cityofbusiness" : "Lake George, NY"
        },
        {
			"jobposition" : "Mill Manager",
			"employer" : "Finch Paper LLC",
            "yearsworked" : "2013-2014",
            "cityofbusiness" : "Glens Falls, NY"

        },
        {
			"jobposition" : "Plant Director",
			"employer" : "Georgia Pacific",
            "yearsworked" : "2008-2013",
            "cityofbusiness" : "Lexington, KY"
        }
    ]
}    

var education = {
	"schools" : [
		{
			"schoolname" : "University of Michigan",
			"schoolcity" : "Ann Arbor, MI",
			"schooldegree" : "Executive Education",
			"schoolmajor" : "Strategic Marketing Planning",
			"schooldates" : "1999"
		},
		{
			"schoolname" : "University of Maine",
			"schoolcity" : "Orono, ME",
			"schooldegree" : "Bachelor of Science",
			"schoolmajor" : "Chemical Engineering",
			"schooldates" : "1986"
		}
	],
	"onlineclasses" : [
		{
			"onlinetitle" : "Front End Nanodegree",
			"onlineschool" : "Udacity",
			"onlinedates" : "2016-Current",
			"onlineURL" : "htpps://udacity.com"
		},
		{
			"onlinetitle" : "Intro to Programming Nanodegree",
			"onlineschool" : "Udacity",
			"onlinedates" : "2015-2016",
			"onlineURL" : "htpps://udacity.com"
		}
	]
}

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
var formattedschoolDegree=HTMLschoolDegree.replace("%data%", education.schooldegree);
var formattedschoolMajor=HTMLschoolMajor.replace("%data", education.schoolmajor);


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

