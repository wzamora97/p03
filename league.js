function playerRatings(){
  if(getCookie("t1PRCookie") > getCookie("t2PRCookie") &&
    getCookie("t1PRCookie") > getCookie("t3PRCookie")
   && getCookie("t1PRCookie") > getCookie("t4PRCookie")){
    document.getElementById("playerR").innerHTML
    = "You thought the team with the best players was Juventus.";
  }
 else if(getCookie("t2PRCookie") > getCookie("t1PRCookie")
 && getCookie("t2PRCookie") > getCookie("t3PRCookie")
 && getCookie("t2PRCookie") > getCookie("t4PRCookie")){
    document.getElementById("playerR").innerHTML
    = "You thought the team with the best players was Manchester United.";
  }
  else if(getCookie("t3PRCookie") > getCookie("t2PRCookie")
  && getCookie("t3PRCookie") > getCookie("t1PRCookie")
  && getCookie("t3PRCookie") > getCookie("t4PRCookie")){
    document.getElementById("playerR").innerHTML
    = "You thought the team with the best players was Barcelona.";
  }
  else if(getCookie("t4PRCookie") > getCookie("t1PRCookie")
  && getCookie("t4PRCookie") > getCookie("t2PRCookie")
  && getCookie("t4PRCookie") > getCookie("t3PRCookie")){
    document.getElementById("playerR").innerHTML
    = "You thought the team with the best players was Bayern Munich.";
  }
  else{
    document.getElementById("playerR").innerHTML= "Problem please try again.";
  }
}
function teamRatings(){
    if(getCookie("t1Rating") > getCookie("t4Rating")
    && getCookie("t1Rating") > getCookie("t2Rating")
    && getCookie("t1Rating") > getCookie("t3Rating")){
      document.getElementById("teamR").innerHTML  = "You thought the best team was Juventus.";
    }
    else if(getCookie("t2Rating") > getCookie("t1Rating")
    && getCookie("t2Rating") > getCookie("t4Rating")
    && getCookie("t2Rating") > getCookie("t3Rating")){
      document.getElementById("teamR").innerHTML  = "You thought the best team was Manchester United.";
    }
    else if(getCookie("t3Rating") > getCookie("t1Rating")
    && getCookie("t3Rating") > getCookie("t2Rating")
    && getCookie("t3Rating") > getCookie("t4Rating")){
      document.getElementById("teamR").innerHTML = "You thought the best team was Barcelona.";
    }
    else if(getCookie("t4Rating") > getCookie("t3Rating")
    && getCookie("t4Rating") > getCookie("t2Rating")
    && getCookie("t4Rating") > getCookie("t1Rating")){
      document.getElementById("teamR").innerHTML = "You thought the best team was Bayern Munich.";
    }
    else{
      document.getElementById("teamR").innerHTML= "Problem please try again.";
    }
}
function team1PR(){
  var team1P = document.getElementById("team1Players").value;
  setCookie("t1PRCookie",team1P,2);
}
function team2PR(){
  var team2P = document.getElementById("team2Players").value;
  setCookie("t2PRCookie", team2P,2);
}
function team3PR(){
  var team3P = document.getElementById("team3Players").value;
  setCookie("t3PRCookie", team3P,2);
}
function team4PR(){
  var team4P = document.getElementById("team4Players").value;
  setCookie("t4PRCookie", team4P,2);
}
function t1Rating(){
  var team1Rating = document.getElementById("team1Rating");
  setCookie("t1Rating", team1Rating,2);
}
function t2Rating(){
  var team2Rating = document.getElementById("team2Rating");
  setCookie("t2Rating", team2Rating,2);
}
function t3Rating(){
  var team3Rating = document.getElementById("team3Rating");
  setCookie("t3Rating", team3Rating,2);
}
function t4Rating(){
  var team4Rating = document.getElementById("team4Rating");
  setCookie("t4Rating", team4Rating,2);
}
function team1Quiz(){
  var team1answer = document.getElementById("team1Quiz").value;
  if(team1answer == 151){
    alert("You are correct");
  }
  else {
    alert("Try again");
  }
}
function team2Quiz(){
  var team2answer = document.getElementById("team2Quiz").value;
  if(team2answer == 319){
    alert("You are correct");
  }
  else {
    alert("Try again");
  }
}
function team3Quiz(){
  var team3answer = document.getElementById("team3Quiz").value;
  if(team3answer == 358){
    alert("You are correct");
  }
  else {
    alert("Try again");
  }
}
function team4Quiz(){
  var team4answer = document.getElementById("team4Quiz").value;
  if(team4answer == 112){
    alert("You are correct");
  }
  else {
    alert("Try again");
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

function showFavTeam(){
  var myFavteam = getFavTeam();
  document.getElementById("fav").innerHTML = myFavteam;
}
  function getFavTeam(){
    var myFavoriteTeams= [ "Manchester United", "CF America", "Real Madrid"];
    var randFavTeam = Math.floor(Math.random() * myFavoriteTeams.length)
   return myFavoriteTeams[randFavTeam];
}
var teamPhotos = [
  {picture:"http://www.juventus.com/media/images/posati/stagione-16-17/prima-squadra/Foto-Squadra_Ufficiale241016.jpg",from:"http://www.juventus.com/en/"},
  {picture:"http://images.footyroom.com/avatars/65923", from:"http://footyroom.com/matches/79926210/juventus-vs-genoa/review"},
  {picture:"http://s.weltsport.net/bilder/teamfotos/640x360/222.jpg", from:"http://www.worldfootball.net/teams/bayern-muenchen/"},
  {picture:"http://images.footyroom.com/avatars/61840", from:"http://footyroom.com/matches/79923639/darmstadt-vs-bayern-munich/review"},
  {picture:"http://e1.365dm.com/17/03/16-9/20/skysports-premier-league-manchester-united-usa-fans-supporters_3913406.jpg?20170320135405", from:"http://www.skysports.com/football/news/11667/10808866/manchester-united-confirm-pre-season-tour-of-the-usa"},
  {picture:"http://images.thepeoplesperson.com/wp-content/uploads/2016/03/30150946/Manchester-United-min.jpg", from:"http://www.playbuzz.com/pixeln10/the-ultimate-manchester-united-quiz"},
  {picture:"https://barbarashdwallpapers.com/wp-content/uploads/2013/11/fc-barcelona-wallpaper.jpg", from:"https://barbarashdwallpapers.com/fc-barcelona/"}
];
var current;
function shuffleGallery(){
  var randI;
  do {
    randI = Math.floor(Math.random() * teamPhotos.length);
    document.getElementById("picture").src = teamPhotos[randI].picture;
    document.getElementById("source").innerHTML = "Image courtesy of:" + teamPhotos[randI].from;
  } while (randI == current);
  current = randI;
  console.log(teamPhotos[current]);
}
