export function editProfileView() {
  const main = document.querySelector("main");
  main.innerHTML = ""; // Clear the main content
  main.innerHTML = ` 
    <section class="edit-profile">
      <h1>Edit Profile</h1>
      <form id="edit-profile-form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="avatar">Avatar URL:</label>
        <input type="url" id="avatar" name="avatar">

        <button type="submit">Save Changes</button>
      </form>
    </section>
  `;
  const form = document.getElementById("edit-profile-form");
} 
