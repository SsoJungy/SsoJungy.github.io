$(document).ready(function(){

	$("#seearchive").click(function(){
		
		$('.paragraph').toggleClass('active');
	});

	$("#archive").on('click', function() {
		make_random();
	  });
	});


var mouseprevX = 0;
var mouseprevY = 0;

function setup() {
//   let c = createCanvas(900, 600);
c = createCanvas(windowWidth, windowHeight*0.8);
//   background(245, 245, 220);
//   background(255);
  stroke(0);
  strokeWeight(30);
  noFill();
  

}

function windowResized() {
	createCanvas(windowWidth, windowHeight);
	stroke(0);
  	strokeWeight(30);
 	noFill();
}

function draw() {
	
}

function mouseClicked() {
//   line(mouseprevX, mouseprevY, mouseX, mouseY);
  bezier(mouseprevX, mouseprevY, mouseprevX*2, mouseprevY,mouseX, mouseY*0.1, mouseX, mouseY);
  mouseprevX = mouseX;
  mouseprevY = mouseY;
  cursor('grab');
  
}

var first_nouns = ['lasttime', 'moveon', 'human', 'Overall', 'Package', 'Passion', 'Pattern', 'Perhaps', 'Plastic', 'love', 'wait', 'for', 'sorry', 'partner', 'relationship', 'memory', 'loose', 'unbelievable', 'shin', 'sin', 'MOUNTAIN', 'regret', 'lost', 'period', 'forget', 'destiny', 'space', 'architecture', 'exhibition', 'break', 'fall apart', 'collapse', 'broken', 'destroyed', 'ruined', 'locksmith', '10years', 'time', 'locked', 'promise', 'forever', 'Breath', 'silence', 'call', 'shelter' ];

function make_random()
{
  let first_noun = first_nouns[Math.floor(Math.random() * first_nouns.length)];

  let first_noun_slot = $('#first-noun-slot');

  first_noun_slot.text(first_noun);

}

function keyPressed() {
	if (keyCode === BACKSPACE) {
		// clear();
		window.location.reload();

	}
		else if (keyCode === ENTER) {
			saveCanvas(c,'lineimg','png');
	
			
	 }
}
