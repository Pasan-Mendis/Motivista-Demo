import gallery from "../assets/data/gallery.json";
import Gallery from "../models/Gallery";

const galleries = gallery.map(
  (g) => new Gallery(g.id, g.title, g.coverImage, g.description, g.images, g.category)
);

export default galleries;
