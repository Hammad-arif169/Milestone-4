var resumeForm = document.getElementById('resumeform');
var resumeOutput = document.getElementById('resumeOutput');
function generateResume(data) {
    console.log(data); // Check the data being passed
    return "\n        <h2>Generate Resume</h2>\n        <p><strong>Name:</strong> ".concat(data.name, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Education:</strong> ").concat(data.education, "</p>\n        <p><strong>Experience:</strong> ").concat(data.experience, "</p>\n        <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n        <p><strong>Description:</strong> ").concat(data.description, "</p>\n        <button id=\"editResume\">Edit Resume</button>\n    ");
}
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        console.log('Form submitted'); // Debugging log
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var description = document.getElementById('description').value;
        if (resumeOutput) {
            resumeOutput.innerHTML = generateResume({ name: name, email: email, education: education, experience: experience, skills: skills, description: description });
            console.log(resumeOutput.innerHTML); // Check if the output is updating
        }
        var editButton = document.getElementById('editResume');
        if (editButton) {
            editButton.addEventListener('click', function () {
                document.getElementById('name').value = name;
                document.getElementById('email').value = email;
                document.getElementById('education').value = education;
                document.getElementById('experience').value = experience;
                document.getElementById('skills').value = skills;
                document.getElementById('description').value = description;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
}
else {
    console.log('Form or output div not found in the DOM.');
}
