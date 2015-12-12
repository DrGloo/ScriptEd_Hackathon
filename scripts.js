// StoryLine/ Intro
var x;
var y;
var direc;
var w; 
var h; 
var player;
var enemy;

function changeFont(number){
  $("h").html("font-size", number);
  $("p").html("font-size", number);
}
$( document ).ready(function() {
  $('#startbutton').on('click', function(e){
 	console.log('Function Started');
    $('#StoryBox').fadeOut();
    $('#startbutton').css('opacity', '0');
    $('.planet').css('opacity', '0.3');
    console.log('Function completed');
  });
  $('.planet').on('click', function(f){
    $('#planets').fadeOut();
    $('#game').css('opacity', '1');
    startGame();
  });
});

function initGame() {
// Daniel's Player Code
	player = {};
	player.el = $("#player");
	player.x = player.el.position()["left"];
	player.y = player.el.position()["top"];
	player.speed = 10;
	player.health = 100;
	player.takeDamage = function(damage){
		player.health -= damage; 
		}
	enemy = {};
	enemy.el = $("#enemy");
	enemy.x = enemy.el.position()["left"];
	enemy.y = enemy.el.position()["top"];
	enemy.height = 100;
	enemy.width = 100;
	enemy = $("#enemy");
	x = enemy.position()["left"];
	y = enemy.position()["top"];
	direc = "right";
	w = window.innerWidth;
	h = window.innerHeight;		
	player.shoot = function(){
	
	projectile = {};
	projectile.el = $('<div id="projectile"></div>');
	$("body").append(projectile.el);
	projectile.x = player.x + (50 / 2 - 10);
	projectile.y = player.y - 10;
	projectile.speed = 15;
  	projectile.el.css("left", projectile.x);
	projectile.el.css("top", projectile.y);
	laser_sound.play();
	projectile.move = function(){
		if(!projectile.collision(enemy)){
		if(projectile.y <= 0){
		  projectile.el.remove();
			clearInterval(projectile.iid);
			player.projectile = false;
		}else{
			projectile.y -= projectile.speed;
		}
		projectile.el.css("top", projectile.y);
		}else{
			projectile.el.remove();
			clearInterval(projectile.iid);
			player.projectile = false;
		}

	};
	
	projectile.collision = function(enemy){
		return (projectile.x + 10 > enemy.x) &&
			(projectile.x < enemy.x + enemy.width) &&
			(projectile.y + 10 > enemy.y) &&
			(projectile.y < enemy.y + enemy.height);
	};
	projectile.iid = setInterval(projectile.move, 1000/30);
	return projectile;
};
}
// wensaels Java



// var projectile = {};
// projectile.el = $("projectile");

document.addEventListener('keydown', function(event){
	if(event.keyCode == 39){
		player.x += player.speed;
		player.el.css("left", player.x + "px");
	}
	if(event.keyCode == 37){
		player.x += -player.speed;
		player.el.css("left", player.x + "px");
	}
	if(event.keyCode == 40){
		player.y += player.speed;
		player.el.css("top", player.y + "px");
	}
	if(event.keyCode == 38){
		player.y += -player.speed;
		player.el.css("top", player.y + "px");
	}
	if(event.keyCode == 32){
		if (!player.projectile){
  		player.projectile = player.shoot();
		}
	}
}, true);


var move = function (xa, ya) {

  x = x + xa;
  y = y + ya;
  
  enemy.css("left", x);
  enemy.css("top", y);
};

var moveEnemy = function() {
  setDirection();    
  if(direc === "right"){
    move(40,0);  
  }else{
    move(-40,0);
  }
};

function startGame () {
	initGame();
	setInterval(moveEnemy, 250);
};

function setDirection (){
  if(x > w - 100){
    direc = "left";
  }
  if (x < 0) {
    direc = "right";
  }
}



