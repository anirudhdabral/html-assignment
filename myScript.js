function validateForm() {
  var name = document.getElementById('staticName').value;
  var email = document.getElementById('staticEmail').value;
  var website = document.getElementById('staticWebsite').value;
  var imglink = document.getElementById('staticImageLink').value;
  var javaCheckbox = document.getElementById("javaCheckbox").checked;
  var htmlCheckbox = document.getElementById("htmlCheckbox").checked;
  var cssCheckbox = document.getElementById("cssCheckbox").checked;
  var maleRbtn = document.getElementById('maleRbtn').checked;
  var femaleRbtn = document.getElementById('femaleRbtn').checked;
  var gender;
  const skills = [];
  var i = 0;
  var validMail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

  // if (name == "" || email == "" || website == "" || imglink == "") {
  //   alert("Please fill all the details!");
  //   return false;
  // }
  // else if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) == false) {
  if ((validMail.test(email)) == false) {
    document.getElementById('staticEmail').style.border = "solid 1px red";
    document.getElementById('errorEmail').removeAttribute("hidden");
    return false;
  }
  else {
    document.getElementById('staticEmail').style.border = "none";
    document.getElementById('errorEmail').setAttribute("hidden", "hidden");
  }
  if (maleRbtn == true) {
    gender = document.getElementById('maleRbtn').value;
    document.getElementById('errorGender').setAttribute("hidden", "hidden");
  }
  else if (femaleRbtn == true) {
    gender = document.getElementById('femaleRbtn').value;
    document.getElementById('errorGender').setAttribute("hidden", "hidden");
  }
  else {
    document.getElementById('errorGender').removeAttribute("hidden");
    return false;
  }

  if (javaCheckbox == true || htmlCheckbox == true || cssCheckbox == true) {
    document.getElementById('errorSkills').setAttribute("hidden", "hidden");
  }
  else {
    document.getElementById('errorSkills').removeAttribute("hidden");
    return false;
  }
  if (javaCheckbox == true) { skills[i] = "Java"; i += 1; }
  if (htmlCheckbox == true) { skills[i] = "HTML"; i += 1; }
  if (cssCheckbox == true) { skills[i] = "CSS"; i += 1 }

  website = "<a href='" + website + "' target='_blank'>" + website + "</a>"
  var desc = "<p><b>" + name + "</b><br>" + gender + "<br>" + email + "<br>" + website + "<br>" + skills + "</p>";

  var table = document.getElementById("myTable");
  var rowID = document.getElementsByTagName("tr")[2].id;
  if (rowID == "demoRecord") {
    table.deleteRow(2);
  }
  var row = table.insertRow(1);
  var description = row.insertCell(0);
  var image = row.insertCell(1);
  description.innerHTML = desc;
  image.innerHTML = "<img src='" + imglink + "' width=128 height=128 onerror=this.src='demo.png' />";
}