//variables
const URL = "https://www.balldontlie.io/api/v1/players?search="
// const URL = "https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck"

// element references
let $form = $('form');
let $input = $('input');
let name = null;
let team = null;
let height = null;
let weight = null;
let position = null;

// EVENT LISTENERS
$form.on('submit', handleGetData);

// FUNCTIONS

// $(document).ready(function() {
//     console.log("page-is-ready")

//     $.ajax(URL).then(function (data) {
//         console.log('NBA data is ready')
//         // console.log(data)
//         allPlayers = data
//         console.log(data)
//     }, function (error) {
//         console.log('something is wrong')
//         console.log(error)
//     })
// });

function handleGetData(event) {

    event.preventDefault()
    const userInput = $input.val();

    // $.ajax(URL + userInput).then(function (response) {
        // console.log('NBA image is ready')
    // }

    $.ajax(URL + userInput).then(function (response) {
        console.log('NBA data is ready')
        // team.text(response.team)
        // console.log(data)
        // $id.text(response.id)
        // players.text(response.team.full_name)

        const players = response.data;

        name = players[0].first_name + " " + players[0].last_name;

        position = players[0].position;

        height = players[0].height_feet.toString() + "ft " + players[0].height_inches.toString() + " inches";

        weight = players[0].weight_pounds.toString() + " pounds";

        team = players[0].team.full_name;

        // console
        console.log(name);
        console.log(position);
        console.log(height);
        console.log(weight);
        console.log(team);

        // $first_name.text(response.data[1].first_name)
        addPlayers(name, position, height, weight, team);
    }, function (error) {
        console.log('something is wrong')
        console.log(error)
    })

}

function addPlayers(name, position, height, weight, team){
    let playerInfo = document.getElementById("playerInfo");
    console.log(playerInfo)

    $("#playerName").text(name)
    $("#playerPosition").text(position)
    $("#playerHeight").text(height)
    $("#playerWeight").text(weight)
    $("#playerTeam").text(team)
    // document.getElementById("playerName").textContent = name;
    // document.getElementById("playerPosition").textContent = position;
    // document.getElementById("playerHeight").textContent = height;
    // document.getElementById("playerWeight").textContent = weight;
    // document.getElementById("playerTeam").textContent = team;

    console.log(playerInfo)
 }


// function testPage(){
// }

//testPage();



// if(userInput){
//     console.log("player")
//     feedback = "this player"
//     console.log(response.data)
//     alert(feedback + response.data)
// }

// if (response.ok) {
//     return response.json();
//   } else {
//     throw new Error("NETWORK RESPONSE ERROR");
//   }