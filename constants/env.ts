export const isProd = process.env.NODE_ENV === "production";

/**
 * Console to the browser greeting message
 * @see Container.tsx
 */
export const HelloFlag = isProd;

/**
 * Show Spotify Component on footer
 * @see Footer.tsx
 */
export const SpotifyFlag = isProd;
