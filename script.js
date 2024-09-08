"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const generateResumeButton = document.getElementById('generateResume');
    const resumeOutput = document.getElementById('resumeOutput');
    const resumeContent = document.getElementById('resumeContent');
    generateResumeButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const skills = document.getElementById('skills').value;
        const experience = document.getElementById('experience').value;
        resumeContent.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact Number:</strong> ${contact}</p>
            <h4>Skills:</h4>
            <p>${skills}</p>
            <h4>Work Experience:</h4>
            <p>${experience}</p>
        `;
        resumeOutput.classList.remove('hidden');
    });
});