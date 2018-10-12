var game = [
  {
    clue: "Bob is 33 years old",
    password: ["B", "O","B", 3, 3]
  }, 
  {
    clue: "He's not John, Paul or George",
    password: ["R", "I","N", "G", "O"]
  },
  {
    clue: "He's a Vietnam vet looking for vengeance",
    password: ["R", "A","M", "B", "O"]
  }]

$("#correct").hide();

gameNumber = 0;
var speed = 1000;
var timerCount = 30;
var minute = 0;
var seconds = 0;
var money = 100;

document.querySelector('h2').textContent = game[gameNumber].clue

count = 1;
game[gameNumber].password.forEach(function(newTurn){
	var newTile = document.getElementById('tile' + count.toString());
	newTile.name = newTurn
	count ++;
});


$("#startGame").on("click", function(f){
	$("#moneyDrop").show();
	$("#formID").show();
	$("#clue").show();
	$("#money").show();
	IntervId = setInterval(word, speed);
	$("#tile1").focus();
	$("#startPage").hide();
	$(".mobileMoney").show();
	$(".timeClass").show();
});
$("#moneyDrop").hide();
$("#formID").hide();
$("#clue").hide();
$("#money").hide();
$("#timer").hide();
$("#nextGame").hide();
$("#restart").hide();
$("#skip").hide();
$(".mobileMoney").hide();
$(".timeClass").hide();

secretKey = "";

var select1 = document.getElementById('tile1');
select1.addEventListener("keypress", function() {
	secretKey = select1.id;
});

var select2 = document.getElementById('tile2');
select2.addEventListener("keypress", function() {
	secretKey = select2.id;
});

var select3 = document.getElementById('tile3');
select3.addEventListener("keypress", function() {
	secretKey = select3.id;
});

var select4 = document.getElementById('tile4');
select4.addEventListener("keypress", function() {
	secretKey = select4.id;
});

var select5 = document.getElementById('tile5');
select5.addEventListener("keypress", function() {
	secretKey = select5.id;
});


var elements = document.getElementsByClassName("arrow-togglable");
var currentIndex = 0;
document.onkeydown = function(h) {
  switch (h.keyCode) {
    case 37:
      currentIndex = (currentIndex == 0) ? elements.length - 1 : --currentIndex;
      elements[currentIndex].focus();
      break;
    case 39:
      currentIndex = ((currentIndex + 1) == elements.length) ? 0 : ++currentIndex;
      elements[currentIndex].focus();
      break;
  }
};


$('input[placeholder=""]').on("keypress", {
	name: "Karl"
}, function(e){
	// var value = $('#tile1').val();
	// console.log(value)
	// $('input').removeClass("toggle-finished");
	// $("#nextGame").trigger("click");
	var placeHolder = this.name;
	console.log(name);
	// console.log(e.data.name);
	var IDs = this.id;
	var x = e.key
	// console.log(e.key);
	var y = x.toUpperCase();
	console.log(y);
	$(this).next().trigger("focus");
	if(placeHolder == y && IDs == secretKey){
		// console.log("this is y: " + y);
		// y == 0;
		console.log("correct");
    	$(this).val("");
    	 // $(this).val($(this).val()+"");
    	this.classList.add("toggle-correct");
    	this.classList.remove("toggle-incorrect");
    	if(speed < 1000){
    		clearInterval(IntervId);
    		speed = speed + 250;
    		IntervId = setInterval(word, speed);
    	}
    	if(IDs == 'tile1'){
    		tile1 = true;
    		console.log(IDs + " is true!")
    	}
    	else if(IDs == 'tile2'){
    		tile2 = true;
    		console.log(IDs + " is true!")
    	}
    	else if(IDs == 'tile3'){
    		tile3 = true;
    		console.log(IDs + " is true!")
    	}
    	else if(IDs == 'tile4'){
    		tile4 = true;
    		console.log(IDs + " is true!")
    	}
    	else if(IDs == 'tile5'){
    		tile5  = true;
    		console.log(IDs + " is true!")
    	}		
    	    	// $('#hiddenButton').focus();
		// $('#hiddenButton').on("keypress", function(j) {
		// });
    	// ifTrueTest(IDs, y);
    	ifTrue(IDs, y);
	}
	else if(e.key !== "ARROWLEFT" || e.key !== "ARROWRIGHT"){
		console.log("incorrect");
		this.classList.toggle("toggle-incorrect");
		console.log(e.key);
		$(this).val("");
		clearInterval(IntervId);
		speed = speed - 250;
		IntervId = setInterval(word, speed);
		// ifTrueTest(IDs, y);
	}
	else {
		console.log("this is an arrow key")
	}
	// var IDs2 = IDs[4];
	// var iNum = parseInt(IDs2);
	// var iNum2 = iNum + 1;
	// console.log(iNum2); 
	// console.log(IDs2);
	// var iNum3 = iNum2.toString();
	// var iNum4 = "tile" + iNum3;
	// $("#" + iNum4.toString()).focus();
	// currentIndex = (currentIndex + 1)
});

// $('#tile6').focus();
// $('#tile6').on("keypress", function(j) {
// 	$("#tile6").val(j.key);
// });

$("#moneyDrop").click(function() {
  $("#formID2").fadeToggle("slow");
});

$('input[placeholder="$"]').on("click", function(d){
	// console.log($(this).attr('id'));
	if(money > 0 && money < 74){
		$('#funds').text("INNSUFFICENT FUNDS!!!").fadeToggle(1500);
	}
	$("#formID2").fadeToggle(1500);
	count3 = 1;
	for(i = 1; i < 6; i++){
		var firstInput = $("#tile" + count3.toString()).attr("name");
		var label1 = $("#tile" + count3.toString()).attr("alt");
		var id3 = $("#tile" + count3.toString()).attr("id");
		var tag = document.getElementById("tile" + count3.toString());
		count3 ++;
		var label2 = this.alt;
		var inputID2 = this.id;
		// console.log($("#tile1"));
		// console.log(firstInput);
		// console.log(label1);
		// console.log(label2);
		if(label2 == label1 && money > 74){
			$("#" + id3).val(firstInput)
			tag.classList.add("toggle-correct");
			// $('input[id="tile1"]').classList.add("toggle-correct");
			money = money - 75;
			$(".mobileMoney").text("$ " + money);
			console.log(inputID2);
			if(inputID2 == 'money1'){
				tile1 = true;
			}
			else if(inputID2 == 'money2'){
				tile2 = true;
			}
			else if(inputID2 == 'money3'){
				tile3 = true;
			}
			else if(inputID2 == 'money4'){
				tile4 = true;
			}
			else if(inputID2 == 'money5'){
				tile5 = true;
			}
			else {
				console.log("Nothing is true");
			}
		}
	}
	ifTrue();
	console.log(firstInput + " is true!")
});


$("#restart").on("click", function(e){
	$('#timer').text("Let's try this again!");
	$("input").val("");
	$('input').removeClass("toggle-correct");
	$('input').removeClass("toggle-incorrect");
	IntervId = setInterval(word, speed);
	$("#restart").hide();
	$("#skip").hide();
	currentIndex = 0;
	$("#tile1").focus();
});

$("#skip").on("click", function(e){
	gameNumber++
	$('#timer').text("Let's move on!");
	$("#restart").hide();
	$("#skip").hide();
	$("input").val("");
	$('input').removeClass("toggle-correct");
	$('input').removeClass("toggle-incorrect");
	IntervId = setInterval(word, speed);
	document.querySelector('h2').textContent = game[gameNumber].clue
	count = 1;
	game[gameNumber].password.forEach(function(newTurn){
		var newTile = document.getElementById('tile' + count.toString());
		newTile.name = newTurn
		count ++;
		console.log(gameNumber);
	});
	tile1 = false;
	tile2 = false;
	tile3 = false;
	tile4 = false;
	tile5 = false;
	currentIndex = 0;
	$("#tile1").focus();
});

function word(){
	if(gameNumber < 3){
		var timerTag = document.getElementsByClassName('timeClass');
		timerTag[1].classList.remove("redAlert");
		$('.timeClass').show();
		var seconds = Math.floor(timerCount % 60)
		if (seconds.toString().length == 1) {
	            seconds = "0" + seconds;
	        }
		minute = (timerCount / 60);
		var roundMinute = Math.floor(minute);
		if(timerCount < 15){
			// timerTag[0].classList.add("redAlert");
			timerTag[1].classList.add("redAlert");
		}
		if(timerCount < 1){
			clearInterval(IntervId);
			toggleModal();
			// $('#timer').text("Time is up!!!");
			$("#restart").show();
			$("#skip").show();
	    	clearInterval(IntervId);
	    	speed = 1000;
	    	timerCount = 30;
	    	// timerTag[0].classList.remove("redAlert");
			timerTag[1].classList.remove("redAlert");
		}
		else {
			// console.log(timerCount + " seconds have passed");
	        $('.timeClass').text(roundMinute + ":" + seconds);
		}
		timerCount--;
	}
} 


function ifTrue(IDs, y){
	if(tile1 == true && tile2 == true && tile3 == true && tile4 == true && tile5 == true){
		// var dawg = $("#" + IDs).("");
		// $("#" + IDs).attr('placeholder','Some New Text');
		// console.log(dawg);
		console.log("Correct Answer!!!!");
		gameNumber++
		console.log(gameNumber);
		// console.log(this);
		// console.log(x);
		// x = "";
		// console.log(y);
		// document.getElementById('tile1').focus()
		$('.timeClass').hide();
		clearInterval(IntervId);
		speed = 1000;
		timerCount = 30;
		money = money + 100
		$(".mobileMoney").text("$ " + money);
	//   	minute = 0;
		// seconds = 0;
		if(gameNumber == 3){
			$("#correct").text("YOU ARE A WINNER!");
			$("#correct").show();
		}
		else {
			console.log("The ID is " + IDs);
			$("#correct").show();
			$("#correct").text("Correct Answer!!!");
			$("#nextGame").show();
			$("#nextGame").focus();
			$("#nextGame").hide();
	    	$("#correct").hide();
	    	$("input").val("");
	    	IntervId = setInterval(word, speed);
	    	document.querySelector('h2').textContent = game[gameNumber].clue
	    	count = 1;
	    	game[gameNumber].password.forEach(function(newTurn){
	    		var newTile = document.getElementById('tile' + count.toString());
	    		newTile.name = newTurn
	    		count ++;
	    		console.log(gameNumber);
	    	});
	    	$('input').removeClass("toggle-correct");
	    	tile1 = false;
	    	tile2 = false;
	    	tile3 = false;
	    	tile4 = false;
	    	tile5 = false;
	    	currentIndex = 0;
	    	$(function() {
	    		$("#tile1").focus();
    		});
	    	timerTag[1].classList.remove("redAlert");
	    	// });

	    	// $('input[placeholder=""]').on("keypress", {
	    	// 	name: "Karl"
	    	// }, function(g){
	    	// 	console.log(g.key);
	    	// 	// if(g.key == 13){
	    	// 	// 	$("#tile1").focus();
	    	// 	// }
	    	// });


	    	// });
	    }
	// // $("input").val("");
	// console.log($("#tile6").val(gameNumber));
    }

}

var modal = document.querySelector(".lightbox");
var restartButton = document.querySelector("#restart");
var skipButton = document.querySelector("#skip");


function toggleModal() {
    modal.classList.toggle("show-modal");
}

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// trigger.addEventListener("click", toggleModal);
restartButton.addEventListener("click", toggleModal);
skipButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);
