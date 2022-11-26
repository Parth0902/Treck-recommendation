function validate()
    {
        // var x = document.forms["form"]["name"].value;
        // if(x == "") 
        //     alert("name Cannot Be Empty!")
            
        var email = document.forms["form"]["email"].value;

        var validRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/

        if(email == "" || !validRegex.test(email))
        {
            alert("Please Enter Correct Email!")
        }
       
        var y = document.getElementById("name").value;
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

        if(confirm == "") 
        {
            alert("Please Check Confirm Password Field!")
        }
        
        if(pass != confirm)
        {
            alert("Passwords Do Not Match!")
        }

        
    }


    async function insert_()
    {
        reqBody={
           
            f_name:'',
            email:"",
            password:'',
        }

       
        reqBody.f_name=getElementById("f__name").value
        reqBody.email=getElementById("U__email").value
        reqBody.password=getElementById("U__cpass").value

        head = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };

        const response = await fetch("http://localhost:5000/signup", {
        "method": "POST",
       "body": JSON.stringify(reqBody),
        "headers": head
    });
    const data = await response.json();
    console.log(data);

    }