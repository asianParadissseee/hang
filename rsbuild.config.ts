import {defineConfig} from '@rsbuild/core';
import {pluginVue} from '@rsbuild/plugin-vue';

export default defineConfig({
    plugins: [pluginVue()],
    source: {
        alias(config, utils) {
            return {
                "@/app": './src/app',
                "@/pages": './src/pages',
                "@/widgets": './src/widgets',
                "@/features": './src/features',
                "@/entity": './src/entity',
                "@/shared": './src/shared',
            }
        },
    }
});
