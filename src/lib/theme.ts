export const THEME_STORAGE_KEY = "theme";

export function isDarkTheme(): boolean {
  return (
    document.documentElement.classList.contains("dark-mode") ||
    document.body.classList.contains("dark-mode")
  );
}

export function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark-mode", dark);
  document.body.classList.toggle("dark-mode", dark);
  localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
}

export const themeInitScript = `(function(){try{var d=localStorage.getItem("${THEME_STORAGE_KEY}")==="dark";document.documentElement.classList.toggle("dark-mode",d);document.documentElement.style.backgroundColor=d?"#111":"";if(document.body){document.body.classList.toggle("dark-mode",d);}}catch(e){}})();`;
