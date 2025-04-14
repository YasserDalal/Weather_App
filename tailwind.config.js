tailwind.config = {
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'sm': '320px', // Small screens
        'md': '426px', // Medium screens
        'lg': '769px', // Large screens
        // For "max" queries, use the actual `max-width` structure
        'max-sm': {'max': '320px'}, // Max-width for small screens
        'max-md': {'max': '960px'}, // Max-width for medium screens
        'max-vsm': {'max': '305px'},
      }
    },
  },
  plugins: [],
}