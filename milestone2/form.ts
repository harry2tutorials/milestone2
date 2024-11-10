interface ResumeData {
  name: string;
  email: string;
  address: string;
  contact: string;
  education: string;
  workExperience: string;
  skills: string[];
  links: string[];
  image: string | null;  // Nullable in case the user doesn't upload an image
}

document.getElementById("form")?.addEventListener("submit", function (e: Event) {
  e.preventDefault();

  // Collect values from the form
  const name = (document.getElementById("name") as HTMLInputElement).value.trim();
  const email = (document.getElementById("email") as HTMLInputElement).value.trim();
  const contact = (document.getElementById("contact") as HTMLInputElement).value.trim();
  const address = (document.getElementById("address") as HTMLInputElement).value.trim();
  const education = (document.getElementById("education") as HTMLTextAreaElement).value.trim();
  const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value.trim();
  const skillsInput = (document.getElementById("skills") as HTMLTextAreaElement).value.trim();
  const linksInput = (document.getElementById("links") as HTMLInputElement).value.trim();
  const imageInput = (document.getElementById("image") as HTMLInputElement);
  const imageFile = imageInput.files?.[0] || null;

  // Validate required fields
  if (!name || !email || !contact || !address || !education || !workExperience || !skillsInput || !linksInput) {
    alert("All fields are required.");
    return;
  }

  // Prepare data for resume
  const skills = skillsInput.split(",").map(skill => skill.trim());
  const links = linksInput.split(",").map(link => link.trim());

  // Handle image upload if available
  let image: string | null = null;
  if (imageFile) {
    const reader = new FileReader();
    reader.onloadend = function () {
      image = reader.result as string; // base64 encoded image data
      saveResumeData(image);  // Pass image as an argument
    };
    reader.readAsDataURL(imageFile);
  } else {
    saveResumeData(null);  // No image uploaded
  }

  function saveResumeData(image: string | null) {
    const resumeData: ResumeData = {
      name,
      email,
      contact,
      address,
      education,
      workExperience,
      skills,
      links,
      image
    };

    // Store resume data in localStorage
    localStorage.setItem("resumeData", JSON.stringify(resumeData));

    // Redirect to the resume page
    window.location.href = "resume.html";
  }
});
