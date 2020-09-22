
//Basic 1
function crystalGazer (job_title, location, partners_name, number_childrens){
	document.write("You will be a " + job_title + " in " + location + " married to "
	 + partners_name + " with " + number_childrens + " childrens.");
}

crystalGazer("Developer", "Montafon", "Christina", 14);


//Basic 2
function ageCalculator (birth_year, actual_Year) {
	
	
	document.write ("<br><br>It's: " + actual_Year);
	var firstAge = actual_Year - birth_year;
	var secondAge = actual_Year - birth_year - 1;
	document.write("<br>You are either " + firstAge + " or " + secondAge + " years old.")
	}
ageCalculator (1986, 2020);


//Basic 3

function ageCalculator2 (birth_year) {
	var date = new Date;
	actual_Year = date.getFullYear();
	document.write ("<br><br><b>Basic-Exercise 3:</b><br>It's: " + actual_Year);
	var firstAge = actual_Year - birth_year;
	var secondAge = actual_Year - birth_year - 1;
	document.write("<br>You are either " + firstAge + " or " + secondAge + " years old.")
	}
ageCalculator2 (1986);


//Basic 4
function radianCalculator (degree){
	radian = degree * (Math.PI/180);
	document.write("<br><br><b>Basic 4: </b> <br>" + degree + " degrees are: " + radian.toFixed(4) + " radians");
	}
radianCalculator (90);




