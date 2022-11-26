
async function save()
{
   
    head = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    };

    const response = await fetch("http://localhost:5000/all", {
        "method": "GET",
       
        "headers": head
    })
    const data = await response.json();
    const row = data[1];
    console.log(row);

    print(row);
}



async function appe() {

    reqBody = {
        t_id: 0,
        t_name: '',
        t_season:'',
        t_duration:0,
        t_location:'',
        t_rid:0,
        t_difficulty:''

    }

    reqBody.t_id =document.getElementById("t__id").value
    reqBody.t_name=document.getElementById("t__name").value
    reqBody.t_season=document.getElementById("t__season").value
    reqBody.t_duration=document.getElementById("t__duration").value
    reqBody.t_location=document.getElementById("t__location").value
    reqBody.t_rid=document.getElementById("t__rid").value
    reqBody.t_difficulty=document.getElementById("t__difficulty").value

    head = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    };

    const response = await fetch("http://localhost:5000/insert", {
        "method": "POST",
       "body": JSON.stringify(reqBody),
        "headers": head
    });
    const data = await response.json();
    console.log(data);

}



function insert()
{

    


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
    <tr>
    <th scope="row"><input type="number" id="t__id"></th>
    <td><input type="text" id="t__name"></td>
    <td><input type="text" id="t__season"></td>
    <td><input type="number" id="t__duration"></td>
    <td><input type="text" id="t__location"></td>
    <td><input type="number" id="t__rid"></td>
    <td><input type="number" id="t__difficulty"></td>
    <td><button type="button" class="btn btn-outline-success btn-lg" onClick="appe()">insert</button></td>
    </tr>
    </tbody>
    </table>
    `;

    document.getElementById("crud").innerHTML= html_string;
    console.log(html_string);
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
        
    document.getElementById("table1").innerHTML= html_string;
    console.log(html_string);
}

window.onload = function() {
    save()
}