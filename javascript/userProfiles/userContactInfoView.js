export function userContactInfoView(user) {
  const userContactInfo = document.createElement("div");
  userContactInfo.classList.add("user-contact-info");

  const userContactInfoTitle = document.createElement("h3");
  userContactInfoTitle.textContent = "Contact Information";
  userContactInfo.appendChild(userContactInfoTitle);

  const userContactInfoList = document.createElement("ul");
  userContactInfo.appendChild(userContactInfoList);

  const userEmail = document.createElement("li");
  userEmail.textContent = `Email: ${user.email}`;
  userContactInfoList.appendChild(userEmail);

  const userPhone = document.createElement("li");
  userPhone.textContent = `Phone: ${user.phone}`;
  userContactInfoList.appendChild(userPhone);

  const userAddress = document.createElement("li");
  userAddress.textContent = `Address: ${user.address}`;
  userContactInfoList.appendChild(userAddress);

  return userContactInfo;
}