export function profileView() {
  const profileContainer = document.createElement("div");
  profileContainer.classList.add("profile-container");

  const profileHeader = document.createElement("h1");
  profileHeader.textContent = "Profile";
  profileContainer.appendChild(profileHeader);

  const profileDetails = document.createElement("div");
  profileDetails.classList.add("profile-details");

  const profileName = document.createElement("p");
  profileName.textContent = "Name: ";
  profileDetails.appendChild(profileName);

  const profileEmail = document.createElement("p");
  profileEmail.textContent = "Email: ";
  profileDetails.appendChild(profileEmail);

  profileContainer.appendChild(profileDetails);

  return profileContainer;
}
