
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;
  player1_name = localStorage.setItem("ram",player1_name);
  player2_name = localStorage.setItem("shyam",player2_name);
    //Set "player1_name" using localStorage.setItem() function
	  //Set "player2_name" using localStorage.setItem() function

    window.location = "game_page.html";
}

