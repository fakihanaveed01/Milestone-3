//get references
var resumeform = document.getElementById('resume-form');
var resumeElement = document.getElementById('resume-display');
//form submission
resumeform.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var workexperience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate resume content
    var resumeHTML = "\n     <h2><b><center>Editable Resume</center></b></h2>\n     <br>\n     <h3>Personal Information</h3>\n     <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n     <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n     <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n\n     <br>\n\n     <h3>Education</h3>\n     <p contenteditable=\"true\">").concat(education, "</p>\n\n     <br>\n\n      <h3>Work Experience</h3>\n     <p contenteditable=\"true\">").concat(workexperience, "</p>\n\n     <br>\n\n      <h3>Skills</h3>\n     <p contenteditable=\"true\">").concat(skills, "</p>\n\n    ");
    //display the generated resume
    if (resumeElement) {
        resumeElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
