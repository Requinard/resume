/// <reference types="vite/client" />


declare module '*?preset=thumbnail' {
    const src: import('vite-plugin-image-presets').ImageAttrs[]
    export default src
}
