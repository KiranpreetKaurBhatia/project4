
var abc=[];

		function validation(){

			var user = document.getElementById('user').value;
			var pass = document.getElementById('pass').value;
			var confirmpass = document.getElementById('conpass').value;
			var mobileNumber = document.getElementById('mobileNumber').value;
			var emails = document.getElementById('emails').value;

			if(user == ""){
				document.getElementById('username').innerHTML =" ** Please fill the username field";
				return false;
			}
			if((user.length <= 2) || (user.length > 20)) {
				document.getElementById('username').innerHTML =" ** Username length must be between 2 and 20";
				return false;	
			}
			if(!isNaN(user)){
				document.getElementById('username').innerHTML =" ** use only characters for the username";
				return false;
			}
			if(pass == ""){
				document.getElementById('password').innerHTML =" ** Please fill the password field";
				return false;
			}
			if((pass.length <= 5) || (pass.length > 20)) {
				document.getElementById('password').innerHTML =" ** Passwords lenght must be between  5 and 20";
				return false;	
			}


			if(pass!=confirmpass){
				document.getElementById('confirmpass').innerHTML =" ** Password is not matching with the confirm password";
				return false;
			}



			if(confirmpass == ""){
				document.getElementById('confirmpass').innerHTML =" ** Please fill the confirmpassword field";
				return false;
			}




			if(mobileNumber == ""){
				document.getElementById('mobileno').innerHTML =" **  fill the mobile NUmber field";
				return false;
			}
			if(isNaN(mobileNumber)){
				document.getElementById('mobileno').innerHTML =" ** user should enter digits not characters";
				return false;
			}
			if(mobileNumber.length!=10){
				document.getElementById('mobileno').innerHTML =" ** Mobile Number should be 10 digits only";
				return false;
			}



			if(emails == ""){
				document.getElementById('emailids').innerHTML =" ** Please fill the email idx` field";
				return false;
			}
			if(emails.indexOf('@') <= 0 ){
				document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
				return false;
			}

			if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
				document.getElementById('emailids').innerHTML =" ** . Invalid Position";
				return false;
			}
		 abc.push(user.toString);
		 for(var i=0;i<abc.length;i++)

		 {
			console.log(user[i]);
		 }
		
		}

		function check()
		{
		
		}

