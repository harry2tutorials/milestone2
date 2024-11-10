window.addEventListener("DOMContentLoaded", function () {
    // Explicitly type resumeData as ResumeData
    var resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
    if (resumeData) {
        document.getElementById("resumeName").innerText = resumeData.name || "Your Name";
        document.getElementById("resumeEmail").innerText = resumeData.email || "Your Email";
        document.getElementById("resumePhone").innerText = resumeData.contact || "Your Phone";
        document.getElementById("resumeLocation").innerText = resumeData.address || "Your Location";
        document.getElementById("resumeEducation").innerText = resumeData.education || "Your Education";
        document.getElementById("resumeExperience").innerText = resumeData.workExperience || "Your Experience";
        var skillsList = document.getElementById("resumeSkills");
        skillsList.innerHTML = resumeData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
        var linksContainer = document.getElementById("resumeLinks");
        linksContainer.innerHTML = resumeData.links.map(function (link) { return "<a href=\"".concat(link, "\" target=\"_blank\">").concat(link, "</a>"); }).join('');
        var imageElement = document.getElementById("resumeImage");
        if (resumeData.image) {
            imageElement.src = resumeData.image;
        }
    }
    // Add toggle functionality
    var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
    var skillsSection = document.getElementById("resumeSkills");
    var skillsVisible = true;
    toggleSkillsBtn.addEventListener("click", function () {
        if (skillsVisible) {
            skillsSection.style.display = "none";
            toggleSkillsBtn.innerText = "Show Skills";
        }
        else {
            skillsSection.style.display = "block";
            toggleSkillsBtn.innerText = "Hide Skills";
        }
        skillsVisible = !skillsVisible;
    });
});
