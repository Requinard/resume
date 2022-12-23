import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import Icons from 'unplugin-icons/vite'
import {checker} from 'vite-plugin-checker'
import imagePresets, {widthPreset} from 'vite-plugin-image-presets'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), Icons({
        compiler: "jsx",
        jsx: "react",
        scale: 1
    }), checker({
        typescript: true,

    }),
        imagePresets({
            thumbnail: widthPreset({
                class: 'img thumb',
                loading: 'lazy',
                widths: [200, 200],
                formats: {
                    webp: {quality: 50},
                    jpg: {quality: 70},
                },
            }),
        })
    ]
})
