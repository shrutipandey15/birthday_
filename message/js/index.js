this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "HAPPY HAPPY BIRTHDAY ICY..!! This is for you my best friend. To the one who understands me solely when even i don't. The one i can tell my soul to. You know, I'm not going to write how thankful I'm to have you or what you mean to me because i think we know what we meant for each other, I'm just going to wish you a life you truly deserve and pray to KANHA that no matter what just let us stick together as we are, always!! aur haan, Panda loves you a lot ice bear:)) ";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
