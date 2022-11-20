
async function save()
{
    var diff = document.getElementById("selectDifficulty").value;
    var sn=document.getElementById("selectSeason").value;
    var rgn=document.getElementById("selectRegion").value;
    // budget=document.getElementById("fbudget").value;

    console.log(diff, sn, rgn);

    reqBody = {
        trekParam: {
            region: rgn,
            season: sn,
            difficulty: diff
        }
    }

    head = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    };

    const response = await fetch("http://localhost:5000/spots", {
        "method": "POST",
        "body": JSON.stringify(reqBody),
        "headers": head
    })
    const data = await response.json();
    const row = data[1];
    console.log(row);

    print(row);
}


function print(arr)
{
    // var arr = [1,2,3,4];
    var html_string=`
<table class="table">
  <thead>
    <tr>
      <th scope="col">T_id</th>
      <th scope="col">T_name</th>
      <th scope="col">T_season</th>
      <th scope="col">T_duration</th>
      <th scope="col">location</th>
      <th scope="col">R_id</th>
      <th scope="col">T_difficulty</th>
    </tr>
  </thead>
  <tbody>
`
for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
    html_string += `
    <tr>
      <th scope="row">${arr[i].T_id}</th>
      <td>${arr[i].T_name}</td>
      <td>${arr[i].T_season}</td>
      <td>${arr[i].T_duration}</td>
      <td>${arr[i].T_location}</td>
      <td>${arr[i].R_id}</td>
      <td>${arr[i].T_difficulty}</td>
    </tr>
    `
}

html_string += `
</tbody>
</table>
`;
    
document.getElementById("solve").innerHTML= html_string;
console.log(html_string);
}
