document.addEventListener('DOMContentLoaded', () => {
    const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;

    generateResumeButton.addEventListener('click', () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const contact = (document.getElementById('contact') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

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
