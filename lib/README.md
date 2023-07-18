# Tailwind Bootstrap Grid Optimizer



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

## Usage
```
function App() {
    return (
        <>
            <div className="container bg-red-600 text-center">
                <div className="row">
                    <div className="sm:col-6 md:col-4">Column 1</div>
                    <div className="sm:col-6 md:col-4">Column 2</div>
                    <div className="sm:col-6 md:col-4">Column 3</div>
                </div>
            </div>
        </>
    )
}
```

```
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="sm:col-12 md:col-8">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Age</th>
                <th className="border px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">30</td>
                <td className="border px-4 py-2">john@example.com</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Jane Doe</td>
                <td className="border px-4 py-2">25</td>
                <td className="border px-4 py-2">jane@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:col-4 hidden sm:block">
          <div className="p-4 bg-blue-300">Sidebar content here</div>
        </div>
      </div>
    </div>
  );
}
```

## Author

**Majid Behzadnasab**

- Website: [majidbehzadnasab.com](https://majidbehzadnasab.com/)
- Github: [@mbehzad-bhz](https://github.com/mbehzad-bhz)

**Pooria Noruzi**

- Github: [@pooria-noruzi](https://github.com/pooria-noruzi/)


## Contributing

If you find a bug or have a feature request, please open an issue on GitHub. Contributions are always welcome!

## License

This project is licensed under the [MIT License](./LICENSE).