
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
	document.write("<br><br><b>Basic-Exercise 4: </b> <br>" + degree + " degrees are: " + radian.toFixed(4) + " radians");
	}
radianCalculator (90);


//Basic 5
function areaAndVolume (width, height, depth) {
	area = width * height;
	volume = area * depth;
	document.write ("<br><br><b>Basic-Exercise 5: </b> <br>With a widht of <b>" + width + "</b>, a height of <b>" + height + "</b> and a depth of <b>" 
		+ depth + "</b>, you have an area of: <b>" + area + "</b> and a volume of: <b>" + volume + "</b>.")
}

areaAndVolume(45, 25, 10);



//Advanced 1
document.write ("<br><br><b>Advanced-Exercise 1:</b>");
function minToHours (min){
	if (min <= 60){
		minLeft = min % 60;
		document.write("<br>" + min + " minutes are:  0 hours and " + minLeft + " minutes." )
	}
	else{
		hours = min / 60;
		minLeft = min % 60;
		document.write("<br>" + min + " minutes are: " + hours.toFixed(0) + " hours and " + minLeft + " minutes." )
	}
}

minToHours (192);
minToHours(200);
minToHours(50);
minToHours(435);


//Advanced 2
document.write ("<br><br><b>Advanced-Exercise 2:</b>");

function randomNum () {
	return Math.floor(Math.random() * 256);
}

    		
function randomColors() {
	red = randomNum();
	green = randomNum ();
	blue = randomNum ();

	red1 = randomNum();
	green1 = randomNum ();
	blue1 = randomNum ();

	document.write("<br>There are 16.777.216 different color combinations available, fortunes' choosen font-color is:<br>Red: " + red + ", Green: " + green + ", Blue :" + blue);
	document.getElementById('body').style.color = "rgb(" +red+ "," + green +"," +blue+")";
	document.getElementById('body').style.backgroundColor = "rgb(" +red1+ "," + green1 +"," +blue1+")";

}

randomColors();




