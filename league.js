function playerRatings(){
  var cookie1 = getCookie("t1PRCookie");
  var cookie2 = getCookie("t2PRCookie");
  var cookie3 = getCookie("t3PRCookie");
  var cookie4 = getCookie("t4PRCookie");
  if(cookie1 > cookie2 && cookie1 > cookie3 && cookie1 > 4){
    document.getElementById("playerR").innerHTML
    = "You thought the team with the best players was Juventus.";
  }
 if(cookie2 > cookie1 && cookie2 > cookie3 && cookie2 > 4){
    document.getElementById("playerR").innerHTML
    = "You thought the team with the best players was Manchester United.";
  }
  if(cookie3 > cookie2 && cookie3 > cookie1 && cookie3 > 4){
    document.getElementById("playerR").innerHTML
    = "You thought the team with the best players was Barcelona.";
  }
  if(cookie4 > cookie2 && cookie4 > cookie3 && cookie4 > 1){
    document.getElementById("playerR").innerHTML
    = "You thought the team with the best players was Bayern Munich.";
  }
  else{
    document.getElementById("playerR").innerHTML= "Problem please try again.";
  }
}
function teamRatings(){
  function playerRatings(){
    var rcookie1 = getCookie("t1Rating");
    var rcookie2 = getCookie("t2Rating");
    var rcookie3 = getCookie("t3Rating");
    var rcookie4 = getCookie("t4Rating");
    if(rcookie1 > rcookie2 && rcookie1 > rcookie3 && rcookie1 > 4){
      document.getElementById("teamR").innerHTML
      = "You thought the best team was Juventus.";
    }
   if(rcookie2 > rcookie1 && rcookie2 > rcookie3 && rcookie2 > 4){
      document.getElementById("teamR").innerHTML
      = "You thought the best team was Manchester United.";
    }
    if(rcookie3 > rcookie2 && rcookie3 > rcookie1 && rcookie3 > 4){
      document.getElementById("teamR").innerHTML
      = "You thought the best team was Barcelona.";
    }
    if(rcookie4 > rcookie2 && rcookie4 > rcookie3 && rcookie4 > 1){
      document.getElementById("teamR").innerHTML
      = "You thought the best team was Bayern Munich.";
    }
    else{
      document.getElementById("teamR").innerHTML= "Problem please try again.";
    }
  }
}
function team1PR(){
  var team1PR = document.getElementById("team1Players").value;
  setCookie("t1PRCookie", team1PR,2);
}
function team2PR(){
  var team2PR = document.getElementById("team2Players").value;
  setCookie("t2PRCookie", team2PR,2);
}
function team3PR(){
  var team3PR = document.getElementById("team3Players").value;
  setCookie("t3PRCookie", team3PR,2);
}
function team4PR(){
  var team4PR = document.getElementById("team4Players").value;
  setCookie("t4PRCookie", team4PR,2);
}
function t1Rating(){
  var team1Rating = document.getElementById("team1Rating").value;
  setCookie("t1Rating", team1Rating,2);
}
function t2Rating(){
  var team2Rating = document.getElementById("team2Rating").value;
  setCookie("t2Rating", team2Rating,2);
}
function t3Rating(){
  var team3Rating = document.getElementById("team3Rating").value;
  setCookie("t3Rating", team3Rating,2);
}
function t4Rating(){
  var team4Rating = document.getElementById("team4Rating").value;
  setCookie("t4Rating", team4Rating,2);
}
function team1Quiz(){
  var team1answer = document.getElementById("team1Quiz").value;
  if(team1answer == 151){
    alert("You are correct");
  }
  else {
    alert("Try again")
  }
}
function team2Quiz(){
  var team2answer = document.getElementById("team2Quiz").value;
  if(team2answer == 319){
    alert("You are correct");
  }
  else {
    alert("Try again")
  }
}
function team3Quiz(){
  var team3answer = document.getElementById("team3Quiz").value;
  if(team3answer == 358){
    alert("You are correct");
  }
  else {
    alert("Try again")
  }
}
function team4Quiz(){
  var team4answer = document.getElementById("team4Quiz").value;
  if(team4answer == 112){
    alert("You are correct");
  }
  else {
    alert("Try again")
  }
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
