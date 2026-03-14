/** Store address (for display and fallback map). */
export const STORE_ADDRESS = "Phnom Penh, Cambodia";

/** Store location on Google Maps – used for directions and map embed. */
export const STORE_MAPS_LINK = "https://maps.app.goo.gl/M5Qkowu4tDLdQqjw9";

/** Embed URL for the map iframe. Uses store link; replace with Share > Embed code from Google Maps if embed is blocked. */
export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(STORE_ADDRESS)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

/** Opens this store location in Google Maps (user can tap Directions there). */
export const GOOGLE_MAPS_DIRECTIONS_URL = STORE_MAPS_LINK;
