import { STORAGE_KEY } from './themes'

// Roda no <head>, antes da hidratação, para definir o tema e não piscar branco no modo escuro.
export const themeInitScript = `(function(){var root=document.documentElement;var mode;try{var saved=localStorage.getItem('${STORAGE_KEY}');if(saved==='light'||saved==='dark')mode=saved}catch(e){}if(!mode)mode=window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';root.dataset.theme=mode;root.style.colorScheme=mode})()`
