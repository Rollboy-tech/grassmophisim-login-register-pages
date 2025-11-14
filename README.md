# Grassmophism — Login & Register (Front-end Demo)

![license - NK](https://img.shields.io/badge/license-NK-blue.svg)
![GitHub Repo Size](https://img.shields.io/github/repo-size/Rollboy-tech/grassmophisim-login-register-pages)
![Top Language](https://img.shields.io/github/languages/top/Rollboy-tech/grassmophisim-login-registerRollboy-tech/grassmophisim-login-register-pages)`
Professional, minimal front-end demonstration of a login and registration UI showcasing a glassmorphism aesthetic. This repository contains the static client-side files for learning, prototyping, and UI demos. There is no backend or persistent authentication included.

Short summary / quick links

- Live/demo: Open `login.html` or `signup.html` locally in your browser
- Source files: `style.css`, `script.js`
- License: see the `LICENSE` file (badge above labeled "NK")

## Features

- Clean glassmorphism UI for login and signup
- Client-side form validation and inline feedback
- Accessible, responsive layout suitable for demos and prototypes

## Built with

- HTML, CSS (glassmorphism styles)
- Vanilla JavaScript for client-side validation and simulated flows

## Quick start

1. Clone the repository or download the files.
2. Open `login.html` or `signup.html` in your browser (no build step required).

Recommended (local web server):

Use any static server to serve files locally. For example, with Python 3 installed:

```powershell
python -m http.server 8000
# then open http://localhost:8000/login.html in your browser
```

Note: Each source file (`login.html`, `signup.html`, `style.css`, `script.js`) includes an instruction header comment near the top describing the file purpose, the IDs used by the script, and quick edit guidance. Check those comments before refactoring or renaming DOM IDs.

## Usage

- This project is a static front-end demo. All form submissions are simulated and handled in `script.js`.
- For production, replace client-side simulation with a secure backend using HTTPS, proper password hashing, and token-based authentication.

## Development

If you want to extend or integrate this demo:

1. Add or wire backend endpoints for registration and authentication.
2. Implement secure session management and server-side validation.
3. Add tests and CI for builds if you introduce a toolchain.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch for your change.
3. Open a pull request describing the change.

Please open an issue first for larger changes so we can discuss scope.

## License

This project includes a custom license label badge above marked "NK". The canonical license text for this repository is in the `LICENSE` file. Replace or update `LICENSE` as appropriate for your needs.

## Contact

- Maintainer: Rashidi Alli Hamisi
- Email: [rashidiallihamisi@gmail.com](mailto:rashidiallihamisi@gmail.com)

If you'd like backend integration, CI, or improved accessibility, open an issue with requirements and I can implement it.
