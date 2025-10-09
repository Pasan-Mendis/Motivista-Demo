export default class Project {
  constructor(id, title, category, location, attendees, date, image,link, description) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.location = location;
    this.attendees = attendees;
    this.date = date;
    this.image = image;
    this.link = link;
    this.description = description;
  }
}
