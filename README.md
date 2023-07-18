---
'Tailwind Bootstrap Grid Optimizer'
---

import { CodeBlock, InstallBlock, ConfigExample } from './components'

# {props.title}

The `tailwind-bootstrap-grid-optimizer` module is an advanced utility tool for optimizing the grid system in web development projects using TailwindCSS. Inspired by the flexibility and ease of use of the Bootstrap Grid system, this module brings similar functionality to your TailwindCSS projects.

<InstallBlock packageName="tailwind-bootstrap-grid-optimizer" />

## Usage

First, require the module in your Tailwind CSS configuration file:

<CodeBlock code={`const bootstrapGrid = require('tailwind-bootstrap-grid-optimizer');

module.exports = {
// ...
plugins: [
bootstrapGrid({
// optional configurations
})
// ...
],
};`} />

## Configuration

You can customize the module according to your needs by passing a configuration object to the function. The available configuration options are:

- `gridColumns`: The number of columns in the grid. Defaults to 12.
- `gridGutterWidth`: The width of the gutters between grid items. Defaults to '1.5rem'.
- `generateContainer`: Whether to generate container classes. Defaults to true.
- `containerMaxWidths`: An object defining the maximum widths of the container at different screen sizes.
- `rtl`: Whether to enable right-to-left language support. Defaults to false.
- `respectImportant`: Whether to respect the `important` option in the Tailwind CSS configuration.

<ConfigExample />

## Author

**Majid Behzadnasab**

- Website: [majidbehzadnasab.com](https://majidbehzadnasab.com/)
- Github: [@](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/your-name)

## Contributing

If you find a bug or have a feature request, please open an issue on GitHub. Contributions are always welcome!

## License

This project is licensed under the [MIT License](./LICENSE).