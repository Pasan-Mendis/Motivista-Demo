class Footer {
  constructor(pageName, footerTheme, footer) {
    this.pageName = pageName;
    this.footerTheme = footerTheme || {};
    this.footer = footer || {};
  }
}

export default Footer;