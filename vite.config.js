import { paraglide } from "@inlang/paraglide-sveltekit/vite";
import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit(), paraglide({
        project: "./project.inlang",
        outdir: "./src/lib/paraglide"
    })],
	build: {
		// Add a timestamp or version to the file names
		rollupOptions: {
			output: {
				entryFileNames: `[name].[hash].js`,
				chunkFileNames: `[name].[hash].js`,
				assetFileNames: `[name].[hash].[ext]`
			}
		}
	},
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
