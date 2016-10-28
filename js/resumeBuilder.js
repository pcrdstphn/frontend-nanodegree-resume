

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
            "cityofbusiness" : "Lake George, NY",
            "workdescription" : "Taking our Problem Solving and Decision Making practice digital."
        },
        {
			"jobposition" : "Mill Manager",
			"employer" : "Finch Paper LLC",
            "yearsworked" : "2013-2014",
            "cityofbusiness" : "Glens Falls, NY",
            "workdescription" : "Led an integrated Fine Paper manufacturing facility with 515 direct reports."

        },
        {
			"jobposition" : "Plant Director",
			"employer" : "Georgia Pacific",
            "yearsworked" : "2008-2013",
            "cityofbusiness" : "Lexington, KY",
            "workdescription" : "Led a plastics thermoforming and cup converting facility with 320 direct reports."
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

var projects = {
	"websites" : [
		{
			"projecttitle" : "Portfolio Webpage",
			"projectdates" : "2016",
            "projectdescription" : "FEND Portfolio Project",
            "projectimage" : "images/fry.jpg"
        },
        {
			"projecttitle" : "Website of My Favorite Movies",
			"projectdates" : "2015",
            "projectdescription" : "IPND Stage 3 Project",
            "projectimage" : "images/moviewebsite.jpg"
        }
    ]
}

var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


if (bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);
	for (var i=0; i<bio.skills.length; i++) {
		var formattedSkills=HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}    
}


function displayWork() {
	for (var i=0; i<work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[i].jobposition);
		var formattedEmployerandTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerandTitle);
		var formattedworkDates=HTMLworkDates.replace("%data%", work.jobs[i].yearsworked);
		var formattedworkLocation=HTMLworkLocation.replace("%data%", work.jobs[i].cityofbusiness);
		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].workdescription);
		$(".work-entry:last").append(formattedworkDates);
		$(".work-entry:last").append(formattedworkLocation);
		$(".work-entry:last").append(formattedworkDescription);
	}
}

displayWork();

$("#main").append(internationalizeButton);

function inName() {
		var splitname = bio.name.split(" ");
		var inName = splitname[0]+(" ")+splitname[1].toUpperCase();
		return inName;
}

console.log(inName());

projects.display = function() {
	for (var i=0; i<projects.websites.length; i++) {
		$("#projects").append(HTMLprojectStart);
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.websites[i].projecttitle);
		var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.websites[i].projectdates);
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.websites[i].projectdescription);
		var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.websites[i].projectimage);
		$(".project-entry:last").append(formattedprojectTitle);
		$(".project-entry:last").append(formattedprojectDates);
		$(".project-entry:last").append(formattedprojectDescription);
		$(".project-entry:last").append(formattedprojectImage);
	}
}
projects.display();






/*
var formattedbioPic=HTMLbioPic.replace("%data%", bio.biopic);
var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub=HTMLgithub.replace("%data%", bio.contacts.github);

var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%", bio.welcomemsg);
var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);



var formattedschoolName=HTMLschoolName.replace("%data%", education.schoolname);
var formattedschoolDates=HTMLschoolDates.replace("data%", education.schooldates);
var formattedschoolCity=HTMLschoolLocation.replace("%data%", education.schoolcity);
var formattedschoolDegree=HTMLschoolDegree.replace("%data%", education.schooldegree);
var formattedschoolMajor=HTMLschoolMajor.replace("%data", education.schoolmajor);


$("#header").append(formattedbioPic);


$("#header").append(formattedWelcomeMsg);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);


$("#education").append(HTMLschoolStart);
$("#education").append(formattedschoolName, formattedschoolDates, formattedschoolCity);

*/