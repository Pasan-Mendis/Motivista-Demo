// src/models/Gallery.js
class Gallery {
  constructor(id, title, coverImage, description, images, category) {
    this.id = id;
    this.title = title;
    this.coverImage = coverImage;
    this.description = description;
    this.images = images;
    this.category = category;
  }
}

export default Gallery;
