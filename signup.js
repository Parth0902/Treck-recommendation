function validate()
    {
        var x = document.forms["form"]["username"].value;
        if(x == "") 
            alert("Username Cannot Be Empty!")
            
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


        var pass = document.forms["form"]["pass"].value;
        var confirm = document.forms["form"]["cpass"].value;

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