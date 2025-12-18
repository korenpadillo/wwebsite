function setTheme(name){
    document.body.classList.remove('theme-action','theme-vaporwave','theme-luxury','theme-professional');
    document.body.classList.add(name, 'theme-transition');
  }
  // set professional theme by default
  setTheme('theme-professional');

