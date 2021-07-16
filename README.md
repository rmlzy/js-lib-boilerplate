Javascript Minimal Starter Kit for building libraries.

## ⭐️ Features

- Webpack 5
- Babel 7
- Hot reloading (`npm start`)
- UMD exports, so your library works everywhere.
- Jest unit testing
- Daily [dependabot](https://dependabot.com) dependency updates

## 📦 Getting Started

```
git clone https://github.com/hodgef/js-library-boilerplate-basic.git myLibrary
npm install
```

## 💎 Customization

> Before shipping, make sure to:

1. Edit `LICENSE` file
2. Edit `package.json` information (These will be used to generate the headers for your built files)
3. Edit `library: "MyLibrary"` with your library's export name in `./webpack.config.js`

## 🚀 Deployment

1. `npm publish`
2. Your users can include your library as usual

### npm

```
import MyLibrary from 'my-library';
const libraryInstance = new MyLibrary();
...
```

### self-host/cdn

```
<script src="build/index.js"></script>

const MyLibrary = window.MyLibrary.default;
const libraryInstance = new MyLibrary();
...
```

## License
[MIT](./LICENSE)
