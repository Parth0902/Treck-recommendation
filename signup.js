async function validate()
    {
        
        // var x = document.forms["form"]["name"].value;
        // if(x == "") 
        //     alert("name Cannot Be Empty!")
            
        var email = document.getElementById("u__email").value;

        var validRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/

        if(email == "" || !validRegex.test(email))
        {
            alert("Please Enter Correct Email!")
        }
       
        var y = document.getElementById("f__name").value;
        var re = /^\d{20}$/;
        if(y == "" || y.length > 20)
        {
            alert("name should not exceed 20 characters!")
        }


        var pass = document.getElementById("pass").value;
        var confirm = document.getElementById("u__cpass").value;

        if(pass == "")
        {
            alert("Please Enter a Valid Password!")
        }

        else if(confirm == "") 
        {
            alert("Please Check Confirm Password Field!")
        }
        
        else if(pass != confirm)
        {
            alert("Passwords Do Not Match!")
        }
        else
        {
        reqBody={
           
            f_name:'',
            email:"",
            password:'',
        }

       
        reqBody.f_name=document.getElementById("f__name").value;
        reqBody.email=document.getElementById("u__email").value;
        reqBody.password=document.getElementById("u__cpass").value;

        head = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };

        const response =  await fetch("http://localhost:5000/signup", {
        "method": "POST",
       "body": JSON.stringify(reqBody),
        "headers": head
    });
       const data = await response.json();
    console.log(data);

        }
    }


    