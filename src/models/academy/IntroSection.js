class IntroItem {
  constructor(title, description, icon) {
    this.title = title;
    this.description = description;
    this.icon = icon;
  }
}

class IntroSection {
  constructor(id, category, image, description, items, icon) {
    this.id = id;
    this.category = category;
    this.image = image;
    this.description = description;
    this.items = items; // array of IntroItem objects
    this.icon = icon;
    
  }
}

export { IntroItem, IntroSection };
