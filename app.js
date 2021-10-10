var theme = document.getElementById('theme')
var white_theme = false;
theme.addEventListener('click',()=>{
    if(!white_theme){
        white_theme = true;
        document.documentElement.style.setProperty('--primary-bg', '#fff');
        document.documentElement.style.setProperty('--secondary-bg', '#4285F4');
        document.documentElement.style.setProperty('--primary-ft', '#000');
        document.documentElement.style.setProperty('--secondary-ft', '#fff');
        document.documentElement.style.setProperty('--timeline-bg', '#F8F9FA');
        document.documentElement.style.setProperty('--grey-black', '#000');
    }
    else{
        white_theme = false;
        document.documentElement.style.setProperty('--primary-bg', '#1f2124');
        document.documentElement.style.setProperty('--secondary-bg', '#FDD663');
        document.documentElement.style.setProperty('--primary-ft', '#fff');
        document.documentElement.style.setProperty('--secondary-ft', '#000');
        document.documentElement.style.setProperty('--timeline-bg', '#1f2124');
        document.documentElement.style.setProperty('--grey-black', '#E2E2E2');
    }
})