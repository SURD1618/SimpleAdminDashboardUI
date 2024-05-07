// Sidebar toggle function
const sidebarToggle = () => {
    document.body.classList.toggle('sidebar-open');
}

//Sidebar Trigger
const sidebarTrigger = document.getElementById('main-header_sidebar-toggle')

//Add the event listener
sidebarTrigger.addEventListener('click', sidebarToggle);


// Sidebar collapse function
const sidebarCollapse = () => {
    document.body.classList.toggle('sidebar-collapse');
}

//Sidebar Trigger
const sidebarCollapseTrigger = document.getElementById('sidebar_collapse')

//Add the event listener
sidebarCollapseTrigger.addEventListener('click', sidebarCollapse);


// Theme switcher function
const switchTheme = () => {
    // Get root element and data-theme value
    const rootElem = document.documentElement;
    const newTheme = (rootElem.getAttribute('data-theme') === 'light') ? 'dark' : 'light';

    // Set the new HTML attribute
    rootElem.setAttribute('data-theme', newTheme);

    // Set the new local storage item
    localStorage.setItem("theme", newTheme);
}

// Add the event listener for the theme switcher
document.querySelector('#sidebar_theme-switcher').addEventListener('click', switchTheme)
