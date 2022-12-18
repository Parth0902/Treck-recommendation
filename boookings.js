async function bookings()
    {
        
    
        reqBody={
           
            B_name:'',
            T_id:"",
            B_destination:'',
            total_amount:'',
            total_bookings:'',
            date:'',
            plan:''
        }

       
        reqBody.B_name=document.getElementById("u_name").value;
        reqBody.T_id=document.getElementById("B_tid").value;
        reqBody.B_destination=document.getElementById("u_destination").value;
        reqBody.total_amount=document.getElementById("B_amount").value;
        reqBody.total_bookings=document.getElementById("B_total").value;
        reqBody.date=document.getElementById("B_date").value;
        reqBody.plan=document.getElementById("B_plan").value;

        head = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };

        const response =  await fetch("http://localhost:5000/bookings", {
        "method": "POST",
       "body": JSON.stringify(reqBody),
        "headers": head
    });
       const data = await response.json();
    console.log(data);

        }
    


    