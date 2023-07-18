---
'Tailwind Bootstrap Grid Optimizer'
---



# Description

- Tailwind CSS is an incredibly powerful framework for building user interfaces with utility-first CSS. However, one aspect that some developers find lacking is its approach to a grid system, particularly those coming from the Bootstrap ecosystem and are accustomed to its grid system's flexibility and ease of use. 
- The tw-bootstrap-grid-optimizer is designed specifically to address this need. It is a utility tool for Tailwind CSS that integrates the best features of the Bootstrap grid system. This means you can harness the flexibility and responsiveness of Bootstrap's grid, while still benefiting from the utility-first methodology and customization options that Tailwind CSS provides.

# Installation
```
npm i tw-bootstrap-grid-optimizer
```

## Configuration

First, require the module in your Tailwind CSS configuration file:

```javascript
module.exports = withMT({
    content: ['./src/**/*.{js,jsx,ts,tsx,css,scss}', './index.html'],
    darkMode: 'media', // or 'media' or 'class',
    development: true,
    mode: "jit",
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tw-bootstrap-grid-optimizer')
    ],
});
```

## Author

**Majid Behzadnasab**

- Website: [majidbehzadnasab.com](https://majidbehzadnasab.com/)
- Github: [@mbehzad-bhz](https://github.com/mbehzad-bhz)


## Contributing

If you find a bug or have a feature request, please open an issue on GitHub. Contributions are always welcome!

## License

This project is licensed under the [MIT License](./LICENSE).