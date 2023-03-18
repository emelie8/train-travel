const apiKey = "a3e1ddf3-ed44-46db-a112-5463ab385c65";

// https://api.resrobot.se/v2.1/location.name?input=Göteborg&format=json&accessId=a3e1ddf3-ed44-46db-a112-5463ab385c65
// https://api.resrobot.se/v2.1/trip?format=json&originId=740000001&destId=740000003&passlist=true&showPassingPoints=true&accessId=a3e1ddf3-ed44-46db-a112-5463ab385c65

// let getRequest = $.get("output.json", response => {
//   $(".text-box").html(response);
// });

// getRequest.fail(data => {
//   if (data.status == 404) {
//     $(".text-box").text("Text file was not found");
//   }
// });

$.get("output.json", function(data){
  console.log("Från: " + data.Trip[0].Origin.name);
  console.log("Datum: " + data.Trip[0].Origin.date);
  console.log("Tid: " + data.Trip[0].Origin.time);
  console.log("Till: " + data.Trip[0].Destination.name);
  console.log("Datum: " + data.Trip[0].Destination.date);
  console.log("Tid: " + data.Trip[0].Destination.time);
});

function searchTrip() {
  console.log(document.getElementById("from").value);
  console.log(document.getElementById("to").value);
  let url = $.get("https://api.resrobot.se/v2.1/trip?format=json&originId=740000001&destId=740000003&passlist=true&showPassingPoints=true&accessId=a3e1ddf3-ed44-46db-a112-5463ab385c65",
    function(data){
      console.log("Tid: " + data.Trip[0].Destination.time);
      document.getElementById("resultat").innerHTML = data.Trip[0].Origin.name;
    });
  console.log(url);


}

