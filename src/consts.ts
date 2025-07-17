// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.


/* SITE */
export const SITE_TITLE = 'commenti.non.richiesti';
export const COMPANY_NAME = 'commenti.non.richiesti';
export const SITE_DESCRIPTION = 'Scopri luoghi originali. Recensioni vere, esperienze autentiche.';

/* SOCIAL */
export const INSTA_SITE = 'https://www.instagram.com/commenti.non.richiesti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
export const TIKTOK_SITE = 'https://www.instagram.com/commenti.non.richiesti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
export const PAYPAL = 'https://www.paypal.me/AnnaSantovitoCNR';
export const MAIL = 'test@gmail.com';
export const INSTA_SHOOT_SITE = 'https://www.instagram.com/lefotografiediannaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

/* UTILS */
export const IMG_PLACEHOLDER = 'https://placehold.co/400x400';

export const BASE_PATH = '/cnrblog';
export const NAV_LINKS = [
  { label: "Home", href: `${BASE_PATH}/` },
  { label: "Blog", href: `${BASE_PATH}/blog` },
  { label: "Chi Sono", href: `${BASE_PATH}/about` },
  { label: "Contatti", href: `${BASE_PATH}/contatti` },
];

export const SOCIAL_LINKS = [
  { href: INSTA_SITE, icon: "instagram", label: "Vai al mio sito Instagram", title: "Instagram di Anna", target: "_blank", rel: "noopener noreferrer", },
  { href: TIKTOK_SITE, icon: "tiktok", label: "Vai al mio sito TikTok", title: "TikTok di Anna", target: "_blank", rel: "noopener noreferrer", },
  { href: `mailto:${MAIL}`, icon: "envelope", label: "Contattami per email", title: "Mail di Anna", },
];
