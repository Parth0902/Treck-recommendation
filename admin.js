
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
        
    document.getElementById("table").innerHTML= html_string;
    console.log(html_string);
}

window.onload = function() {
    save()
}