$(document).ready(function() {
	startTime();
});

function startTime() {
	var hourColor = '#ff0000';
	var minuteColor = '#00ff00';
	var bothColor = '#0000ff';

	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var adjMinute = Math.ceil((minute/5));
	var second = today.getSeconds();
	var whatHours = [];
	var whatMinutes = [];
	var whatBoth = [];

	/* Using Fibonacci sequence
	** 1,1,2,3,5
	** Want to use the minimum squares
	** 4 would be 3 & 1, not 2 & 1 & 1
	** Each square can only be used once for each minute or hour
	**/

	// Reset the backgrounds & arrays
	$('td').css('background-color', '#ffffff')
	whatHours = [];
	whatMinutes = [];
	whatBoth = [];

	// Set container border for AM or PM
	if (hour >= 12) {
		$('.container').css('border-color', '#333333');
		hour = hour - 12; // Change hour if > 12
	}
	else {
		$('.container').css('border-color', '#ffffff');
	}

	// Set the Hours
	setTheTime(hour, whatHours);

	// Set the Minutes
	setTheTime(adjMinute, whatMinutes);

	//******************************
	// Check to see which have both minutes & hours
	if (whatMinutes.indexOf('five') >= 0 && whatHours.indexOf('five') >= 0) {
		whatBoth.push('five');
	}

	if (whatMinutes.indexOf('three') >= 0 && whatHours.indexOf('three') >= 0) {
		whatBoth.push('three');
	}

	if (whatMinutes.indexOf('two') >= 0 && whatHours.indexOf('two') >= 0) {
		whatBoth.push('two');
	}

	if (whatMinutes.indexOf('oneA') >= 0 && whatHours.indexOf('oneA') >= 0) {
		whatBoth.push('oneA');
	}

	if (whatMinutes.indexOf('oneB') >= 0 && whatHours.indexOf('oneB') >= 0) {
		whatBoth.push('oneB');
	}
	//******************************

	//******************************
	// Set the colors
	for (var i = 0; i < whatHours.length; i++) {
		$('.' + whatHours[i]).css('background-color', hourColor);
	}

	for (var i = 0; i < whatMinutes.length; i++) {
		$('.' + whatMinutes[i]).css('background-color', minuteColor);
	}

	for (var i = 0; i < whatBoth.length; i++) {
		$('.' + whatBoth[i]).css('background-color', bothColor);
	}
	//******************************

	updatePopUpTime(hour, minute, second);

	// Do every 1/2 second
	var t = setTimeout(startTime, 500);
}

function setTheTime (whichTime, whatTime){
	switch (whichTime) {
		case 12:
			whatTime.push('oneA', 'oneB', 'two', 'three', 'five');
			break;

			case 11:
			whatTime.push('oneA', 'two', 'three', 'five');
			break;

			case 10:
			whatTime.push('two', 'three', 'five');
			break;

			case 9:
			whatTime.push('oneA', 'three', 'five');
			break;

			case 8:
			whatTime.push('three', 'five');
			break;

			case 7:
			whatTime.push('two', 'five');
			break;

			case 6:
			whatTime.push('oneA', 'five');
			break;

			case 5:
			whatTime.push('five');
			break;

			case 4:
			whatTime.push('oneA', 'three');
			break;

			case 3:
			whatTime.push('three');
			break;

			case 2:
			whatTime.push('two');
			break;

			case 1:
			whatTime.push('oneA');
			break;
	}
}

function formatTime(whichTime2) {
	if (whichTime2 < 10) {
		whichTime2 = '0' + whichTime2;
	}

	return whichTime2;
}

function updatePopUpTime(hour, minute, second) {
	hour = formatTime(hour);
	minute = formatTime(minute);
	second = formatTime(second);

	$('#popUpTime').text('The time is ' + hour + ':' + minute + ':' + second);

	$('.container').hover(function() {
		$('#popUpTime').show();
	}, function () {
		$('#popUpTime').hide();
	})
}