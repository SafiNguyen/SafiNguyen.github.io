var leftTab = document.getElementById('left-tab'),
    rightTab = document.getElementById('right-tab');

// 垃圾方法，该方法必须等页面加载玩才有效
// window.onload = function(){
//   btn[0].onmouseover=function() {
//     leftTab.style.display="block";
//     leftTab.setAttribute("class","rotateInUpLeft self-animated");
//   }
//   btn[0].onmouseout=function() {
//     leftTab.setAttribute("class","rotateOutDownLeft self-animated");
//     // leftTab.style.display="none";
//   }
//   btn[1].onmouseover=function() {
//     rightTab.style.display="block";
//     rightTab.setAttribute("class","rotateInUpRight self-animated");
//   }
//   btn[1].onmouseout=function() {
//     rightTab.setAttribute("class","rotateOutDownRight self-animated");
//     // leftTab.style.display="none";
//   }
//
// }

function showLeft() {
  leftTab.style.display="block";
  leftTab.setAttribute("class","rotateInUpLeft self-animated");
}

function goneLeft() {
  leftTab.setAttribute("class","rotateOutDownLeft self-animated");
}

function showRight() {
  rightTab.style.display="block";
  rightTab.setAttribute("class","rotateInUpRight self-animated");
}

function goneRight() {
  rightTab.setAttribute("class","rotateOutDownRight self-animated");
}

// Dark Mode Functions
function toggleDarkMode() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update icon
  const icon = document.getElementById('darkModeIcon');
  icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

// Initialize theme on page load
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', theme);
  
  const icon = document.getElementById('darkModeIcon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTheme);