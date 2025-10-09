// src/models/TeamMember.js
export default class TeamMember {
  constructor(id, name, role, photo, linkedin, facebook, email) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.photo = photo;
    this.linkedin = linkedin;
    this.facebook = facebook;
    this.email = email;
  }
}
