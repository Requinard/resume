/// <reference types="vite/client" />

declare module "*?preset=thumbnail" {
    const src: import("vite-plugin-image-presets").ImageAttrs[];
    // eslint-disable-next-line import/no-default-export
    export default src;
}
