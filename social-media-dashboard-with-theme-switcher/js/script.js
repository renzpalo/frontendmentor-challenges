const themeSwitchToggle = document.getElementById('theme-switch-toggle');
const metaColorScheme = document.querySelector('meta[name="color-scheme"');

themeSwitchToggle.addEventListener('click', (event) => {
  if(event.target.checked) {
    // metaColorScheme.setAttribute('content', 'dark');

    console.log('checked', metaColorScheme);
  } else {
    
    // metaColorScheme.setAttribute('content', 'light');

    console.log('unchecked', metaColorScheme);
  }
});