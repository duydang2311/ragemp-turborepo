/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{svelte,html}'],
    theme: {
        extend: {
            fontFamily: {
                sans: 'var(--font-family-sans)',
                display: 'var(--font-family-display)',
            },
            colors: {
                'base-bg-1': 'rgb(var(--color-base-bg-1) / <alpha-value>)',
                'base-bg-1-hover': 'rgb(var(--color-base-bg-1-hover) / <alpha-value>)',
                'base-bg-1-active': 'rgb(var(--color-base-bg-1-active) / <alpha-value>)',
                'base-bg-1-disabled': 'rgb(var(--color-base-bg-1-disabled) / <alpha-value>)',
                'base-bg-2': 'rgb(var(--color-base-bg-2) / <alpha-value>)',
                'base-bg-2-hover': 'rgb(var(--color-base-bg-2-hover) / <alpha-value>)',
                'base-bg-2-active': 'rgb(var(--color-base-bg-2-active) / <alpha-value>)',
                'base-bg-3': 'rgb(var(--color-base-bg-3) / <alpha-value>)',
                'base-bg-4': 'rgb(var(--color-base-bg-4) / <alpha-value>)',
                'base-bg-5': 'rgb(var(--color-base-bg-5) / <alpha-value>)',
                'base-bg-6': 'rgb(var(--color-base-bg-6) / <alpha-value>)',
                'base-fg-1': 'rgb(var(--color-base-fg-1) / <alpha-value>)',
                'base-fg-1-hover': 'rgb(var(--color-base-fg-1-hover) / <alpha-value>)',
                'base-fg-1-active': 'rgb(var(--color-base-fg-1-active) / <alpha-value>)',
                'base-fg-1-selected': 'rgb(var(--color-base-fg-1-selected) / <alpha-value>)',
                'base-fg-1-disabled': 'rgb(var(--color-base-fg-1-disabled) / <alpha-value>)',
                'base-fg-2': 'rgb(var(--color-base-fg-2) / <alpha-value>)',
                'base-fg-3': 'rgb(var(--color-base-fg-3) / <alpha-value>)',
                'base-fg-4': 'rgb(var(--color-base-fg-4) / <alpha-value>)',
                'base-border-1': 'rgb(var(--color-base-border-1) / <alpha-value>)',
                'base-border-1-disabled': 'rgb(var(--color-base-border-1-disabled) / <alpha-value>)',
                'base-border-2': 'rgb(var(--color-base-border-2) / <alpha-value>)',
                'base-border-3': 'rgb(var(--color-base-border-3) / <alpha-value>)',
                'brand-bg-1': 'rgb(var(--color-brand-bg-1) / <alpha-value>)',
                'brand-bg-1-hover': 'rgb(var(--color-brand-bg-1-hover) / <alpha-value>)',
                'brand-bg-1-active': 'rgb(var(--color-brand-bg-1-active) / <alpha-value>)',
                'brand-bg-1-disabled': 'rgb(var(--color-brand-bg-1-disabled) / <alpha-value>)',
                'brand-bg-2': 'rgb(var(--color-brand-bg-2) / <alpha-value>)',
                'brand-bg-3': 'rgb(var(--color-brand-bg-3) / <alpha-value>)',
                'brand-bg-4': 'rgb(var(--color-brand-bg-4) / <alpha-value>)',
                'brand-on-bg-1': 'rgb(var(--color-brand-on-bg-1) / <alpha-value>)',
                'brand-on-bg-1-disabled': 'rgb(var(--color-brand-on-bg-1-disabled) / <alpha-value>)',
                'brand-fg-1': 'rgb(var(--color-brand-fg-1) / <alpha-value>)',
                'brand-fg-2': 'rgb(var(--color-brand-fg-2) / <alpha-value>)',
                'brand-border-1': 'rgb(var(--color-brand-border-1) / <alpha-value>)',
                'brand-border-2': 'rgb(var(--color-brand-border-2) / <alpha-value>)',
                'subtle-bg-hover': 'rgb(var(--color-subtle-bg-hover) / <alpha-value>)',
                'subtle-bg-active': 'rgb(var(--color-subtle-bg-active) / <alpha-value>)',
            },
            borderRadius: {
                sm: '2px',
                md: '4px',
                lg: '6px',
                xl: '8px',
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
};
