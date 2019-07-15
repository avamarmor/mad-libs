var button = $('button');

var section1 = $('.section1');

var name = $('.name');

var adjective = $('.adjective');

var verbEndingInIng = $('.VerbEndinginIng');

var noun2 = $('.Noun2').val();

var adverb = $('.Adverb').val();

var ing1 = $('.ing').val();

button.on("click", returnword)

//console.log(noun, adjective, verb, noun2, adverb);

function returnword(){
  event.preventDefault();
  section1.append(`<p> Welcome back to the Bachelorette! I'm your host Chris Harrison. Let's our next contestant ${name.val()}. He is from Chicago and has a special talent of </p>`);

  }
