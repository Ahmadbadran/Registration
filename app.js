// this for show and hide the password

function show() {
  var p = document.getElementById("pwd");
  p.setAttribute("type", "text");
}

function hide() {
  var p = document.getElementById("pwd");
  p.setAttribute("type", "password");
}

var pwShown = 0;

document.getElementById("eye").addEventListener(
  "click",
  function () {
    if (pwShown == 0) {
      pwShown = 1;
      show();
    } else {
      pwShown = 0;
      hide();
    }
  },
  false
);

// << -- |||||||||||||||\ -- >>

const form = document.getElementById("regForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = e.target.userName.value;
  let phoneNum = e.target.phone.value;
  let phoneCheck = /^07\d{8}$/;
  var phoneNum2 = phoneNum;
  let email = e.target.email.value;

  var regex = /\s/g;
  var replace = "";
  var str = name;
  var str1 = str.replace(regex, replace);
  
  let pwd = e.target.password.value;
  var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  var pwd2 = pwd;
  if (pwd.match(passw) && phoneNum.match(phoneCheck)) {
	  render(str1,pwd2,phoneNum2,email);
}
	else if (!(phoneNum.match(phoneCheck))) {
		alert(
			"please enter a valid phone number!"
			);
	}
	else if (!(pwd.match(passw))){
		alert(
			"Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
		)
	};
	// render(str1, pwd2, phoneNum2, email);
   
  
});

function render(str1, pwd2, phoneNum2, email) {
  const obj = { 'name': str1, 'password': pwd2, 'phoneNumber': phoneNum2, 'email': email };
  sessionStorage.setItem("person", JSON.stringify(obj));
  console.log(JSON.parse(sessionStorage.getItem("person")));
}
