// Define the ResumeData type at the top if not already done
interface ResumeData {
  name: string;
  email: string;
  address: string;
  contact: string;
  education: string;
  workExperience: string;
  skills: string[];
  links: string[];
  image: string;
}

declare var jsPDF: any; // Declare jsPDF as a global variable

window.addEventListener("DOMContentLoaded", () => {
  // Explicitly type resumeData as ResumeData
  const resumeData: ResumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");

  if (resumeData) {
    (document.getElementById("resumeName") as HTMLElement).innerText = resumeData.name || "Your Name";
    (document.getElementById("resumeEmail") as HTMLElement).innerText = resumeData.email || "Your Email";
    (document.getElementById("resumePhone") as HTMLElement).innerText = resumeData.contact || "Your Phone";
    (document.getElementById("resumeLocation") as HTMLElement).innerText = resumeData.address || "Your Location";
    (document.getElementById("resumeEducation") as HTMLElement).innerText = resumeData.education || "Your Education";
    (document.getElementById("resumeExperience") as HTMLElement).innerText = resumeData.workExperience || "Your Experience";

    const skillsList = document.getElementById("resumeSkills") as HTMLElement;
    skillsList.innerHTML = resumeData.skills.map((skill: string) => `<li>${skill}</li>`).join('');

    const linksContainer = document.getElementById("resumeLinks") as HTMLElement;
    linksContainer.innerHTML = resumeData.links.map((link: string) => `<a href="${link}" target="_blank">${link}</a>`).join('');

    const imageElement = document.getElementById("resumeImage") as HTMLImageElement;
    if (resumeData.image) {
      imageElement.src = resumeData.image;
    }
  }

  // Add toggle functionality
  const toggleSkillsBtn = document.getElementById("toggleSkillsBtn") as HTMLButtonElement;
  const skillsSection = document.getElementById("resumeSkills") as HTMLElement;

  let skillsVisible = true;

  toggleSkillsBtn.addEventListener("click", () => {
    if (skillsVisible) {
      skillsSection.style.display = "none";
      toggleSkillsBtn.innerText = "Show Skills";
    } else {
      skillsSection.style.display = "block";
      toggleSkillsBtn.innerText = "Hide Skills";
    }
    skillsVisible = !skillsVisible;
  });
});
