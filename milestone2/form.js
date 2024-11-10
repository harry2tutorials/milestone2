var _a;
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    // Collect values from the form
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var contact = document.getElementById("contact").value.trim();
    var address = document.getElementById("address").value.trim();
    var education = document.getElementById("education").value.trim();
    var workExperience = document.getElementById("workExperience").value.trim();
    var skillsInput = document.getElementById("skills").value.trim();
    var linksInput = document.getElementById("links").value.trim();
    var imageInput = document.getElementById("image");
    var imageFile = ((_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0]) || null;
    // Validate required fields
    if (!name || !email || !contact || !address || !education || !workExperience || !skillsInput || !linksInput) {
        alert("All fields are required.");
        return;
    }
    // Prepare data for resume
    var skills = skillsInput.split(",").map(function (skill) { return skill.trim(); });
    var links = linksInput.split(",").map(function (link) { return link.trim(); });
    // Handle image upload if available
    var image = null;
    if (imageFile) {
        var reader_1 = new FileReader();
        reader_1.onloadend = function () {
            image = reader_1.result; // base64 encoded image data
            saveResumeData(image); // Pass image as an argument
        };
        reader_1.readAsDataURL(imageFile);
    }
    else {
        saveResumeData(null); // No image uploaded
    }
    function saveResumeData(image) {
        var resumeData = {
            name: name,
            email: email,
            contact: contact,
            address: address,
            education: education,
            workExperience: workExperience,
            skills: skills,
            links: links,
            image: image
        };
        // Store resume data in localStorage
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        // Redirect to the resume page
        window.location.href = "resume.html";
    }
});
