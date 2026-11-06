/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── Brand & Surface Colours (extracted from Stitch design system) ────────
      colors: {
        primary:                    '#b7122a',
        'primary-container':        '#db313f',
        'on-primary':               '#ffffff',
        'primary-fixed':            '#ffdad8',
        'primary-fixed-dim':        '#ffb3b1',
        'on-primary-fixed':         '#410007',
        'on-primary-fixed-variant': '#92001c',
        'inverse-primary':          '#ffb3b1',

        secondary:                     '#5f5e5e',
        'secondary-container':         '#e4e2e1',
        'on-secondary':                '#ffffff',
        'secondary-fixed':             '#e4e2e1',
        'secondary-fixed-dim':         '#c8c6c6',
        'on-secondary-fixed':          '#1b1c1c',
        'on-secondary-fixed-variant':  '#474747',
        'on-secondary-container':      '#656464',

        tertiary:                     '#5b5c5c',
        'tertiary-container':         '#737575',
        'on-tertiary':                '#ffffff',
        'tertiary-fixed':             '#e2e2e2',
        'tertiary-fixed-dim':         '#c6c6c7',
        'on-tertiary-fixed':          '#1a1c1c',
        'on-tertiary-fixed-variant':  '#454747',
        'on-tertiary-container':      '#fcfcfc',

        error:               '#ba1a1a',
        'error-container':   '#ffdad6',
        'on-error':          '#ffffff',
        'on-error-container':'#93000a',

        background:       '#fbf9f8',
        'on-background':  '#1b1c1c',

        surface:                    '#fbf9f8',
        'on-surface':               '#1b1c1c',
        'on-surface-variant':       '#5b403f',
        'surface-dim':              '#dbdad9',
        'surface-bright':           '#fbf9f8',
        'surface-container-lowest': '#ffffff',
        'surface-container-low':    '#f5f3f3',
        'surface-container':        '#efeded',
        'surface-container-high':   '#e9e8e7',
        'surface-container-highest':'#e4e2e2',
        'surface-variant':          '#e4e2e2',
        'surface-tint':             '#bb162c',

        'inverse-surface':    '#303031',
        'inverse-on-surface': '#f2f0f0',

        outline:          '#8f6f6e',
        'outline-variant': '#e4bebc',
      },

      // ── Border Radius ────────────────────────────────────────────────────────
      borderRadius: {
        DEFAULT: '0.25rem',
        lg:      '0.5rem',
        xl:      '0.75rem',
        full:    '9999px',
      },

      // ── Spacing ──────────────────────────────────────────────────────────────
      spacing: {
        xl:              '3rem',
        lg:              '2rem',
        md:              '1.5rem',
        sm:              '1rem',
        xs:              '0.5rem',
        base:            '4px',
        gutter:          '20px',
        'margin-mobile': '16px',
      },

      // ── Max-Width ────────────────────────────────────────────────────────────
      maxWidth: {
        app: '1200px',
      },

      // ── Font Families ────────────────────────────────────────────────────────
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],           // body default
        display: ['"Plus Jakarta Sans"', 'sans-serif'], // headings shorthand

        // Spec-named roles
        'body-md':            ['Inter', 'sans-serif'],
        'body-lg':            ['Inter', 'sans-serif'],
        'label-md':           ['Inter', 'sans-serif'],
        'label-sm':           ['Inter', 'sans-serif'],
        'headline-md':        ['"Plus Jakarta Sans"', 'sans-serif'],
        'headline-lg':        ['"Plus Jakarta Sans"', 'sans-serif'],
        'headline-lg-mobile': ['"Plus Jakarta Sans"', 'sans-serif'],
        'display-lg':         ['"Plus Jakarta Sans"', 'sans-serif'],
      },

      // ── Font Sizes (size + lineHeight + weight) ──────────────────────────────
      fontSize: {
        'body-md':            ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-lg':            ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'label-md':           ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
        'label-sm':           ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'headline-md':        ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'headline-lg':        ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-lg-mobile': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'display-lg':         ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '800' }],
      },
    },
  },
  plugins: [],
}
