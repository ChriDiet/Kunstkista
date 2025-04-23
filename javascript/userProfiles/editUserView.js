import { userProfiles } from "../data/userProfiles.js";
import { displayUserProfiles } from "./displayUserProfiles.js";

export function editUserView() {
  const editUserContainer = document.querySelector(".edit-user-container");
  const editUserForm = document.querySelector(".edit-user-form");
  const editUserButton = document.querySelector(".edit-user-button");
  const editUserCancelButton = document.querySelector(".edit-user-cancel-button");
  const editUserName = document.querySelector(".edit-user-name");
  const editUserEmail = document.querySelector(".edit-user-email");
  const editUserPhone = document.querySelector(".edit-user-phone");
  const editUserAddress = document.querySelector(".edit-user-address");
  const editUserZip = document.querySelector(".edit-user-zip");
  const editUserCity = document.querySelector(".edit-user-city");
  const editUserCountry = document.querySelector(".edit-user-country");
  const editUserImage = document.querySelector(".edit-user-image");
  const editUserDescription = document.querySelector(".edit-user-description");
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");

  const user = userProfiles.find((user) => user.id === userId);

    if (user) {
      editUserName.value = user.name;
      editUserEmail.value = user.email;
      editUserPhone.value = user.phone;
      editUserAddress.value = user.address;
      editUserZip.value = user.zip;
      editUserCity.value = user.city;
      editUserCountry.value = user.country;
      editUserImage.value = user.image;
      editUserDescription.value = user.description;
    }

    editUserForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    editUserButton.addEventListener("click", () => {
      editUserContainer.style.display = "block";

    const updatedUser = {
      id: userId,
      name: editUserName.value,
      email: editUserEmail.value,
      phone: editUserPhone.value,
      address: editUserAddress.value,
      zip: editUserZip.value,
      city: editUserCity.value,
      country: editUserCountry.value,
      image: editUserImage.value,
      description: editUserDescription.value,
    };

      userProfiles = userProfiles.map((user) => (user.id === userId ? updatedUser : user));
      displayUserProfiles();
      editUserContainer.style.display = "none";
    });
  }