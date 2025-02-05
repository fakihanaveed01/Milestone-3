//get references

const resumeform = document.getElementById ('resume-form') as HTMLFormElement;
const resumeElement = document.getElementById ('resume-display') as HTMLDivElement;

//form submission
resumeform.addEventListener('submit', (event:Event) =>{
    event.preventDefault(); //prevent page reload

    //collect input values

    const name =(document.getElementById ('name') as HTMLInputElement).value
    const phone =(document.getElementById ('phone') as HTMLInputElement).value
    const email =(document.getElementById ('email') as HTMLInputElement).value
    const education =(document.getElementById ('education') as HTMLInputElement).value
    const workexperience =(document.getElementById ('experience') as HTMLInputElement).value
    const skills =(document.getElementById ('skills') as HTMLInputElement).value
    
    //generate resume content
    const resumeHTML = `
     <h2><b><center>Resume</center></b></h2>
     <br>
     <h3>Personal Information</h3>
     <p><b>Name:</b>${name}</p>
     <p><b>Phone:</b>${phone}</p>
     <p><b>Email:</b>${email}</p>

     <br>

     <h3>Education</h3>
     <p>${education}</p>

     <br>

      <h3>Work Experience</h3>
     <p>${workexperience}</p>

     <br>

      <h3>Skills</h3>
     <p>${skills}</p>

    `;

    //display the generated resume

    if(resumeElement){
        resumeElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is missing');
    }





});



