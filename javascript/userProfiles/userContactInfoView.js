export function userContactInfoView(user) {
  return `
    <div class="user-contact-info">
      <h2>Contact Information</h2>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Address:</strong> ${user.address}</p>
    </div>
  `;
}
