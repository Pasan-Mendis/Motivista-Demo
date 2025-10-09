import footerJSON from "../assets/data/footer.json";
import Footer from "../models/Footer";

const footerData = Object.keys(footerJSON).reduce((acc, pageName) => {
  const data = footerJSON[pageName];
  acc[pageName] = new Footer(
    pageName,
    data.footerTheme,
    data.footer
  );
  return acc;
}, {});

export default footerData;