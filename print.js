var difficulty;
var season;
var budget;
var region;

function save()
{
    difficulty=docunment.getElementbyID("fdifficulty").value;
    season=document.getElementById("fseason").value;
    budget=docunment.getElementById("fbudget").value;
    region=docunment.getElementById("fregion").value;
    console.log('saved');
    print();
}


function print()
{
    var arr = [1,2,3,4];
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
for (const i in arr) {
    html_string += `
    <tr>
      <th scope="row">${i}</th>
      <td> </td>
      <td> </td>
      <td> </td>
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