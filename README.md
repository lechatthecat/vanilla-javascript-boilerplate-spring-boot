# Vanilla-JavaScript-boilerplate-springboot

A **MPA (Multi Page Application)** boilerplate of Vanilla-JavaScript, SCSS with Webpack 4 with Springboot.

# Environment

- Visual Studio Code Version: 1.44.2
- node 12.16.3

# Create development environment

1. Install Visual Studio Code (Version: 1.44.2)
2. Add the following extensions:

```
ESLint
Prettier - Code formatter
styleLint
```

3. Install npm packages

- Check the node version as follows. Maybe use nvm and install node v12 would be more convenient.

```
node -v
v12.16.3
```

Then install npm packages:

```
npm i
```

The build js/scss as follows:

```
npm run build:development
```

4. Start local development environment

- Open this project with vscode and press on F5 on your keyboard. 
Then this app should be working on: http://localhost:8080

```
npm run dev
```

5. Build commands

- There are 3 build commands.

```
npm run build:development
npm run build:staging
npm run build:production
```

6. Add html pages

- Add new html page under `src/main/resources/templates` directory, then add new `entry` on `webpack.common.js`.

- Auto format setting is writtem on `settings.json` in `.vscode`.


7. Browser compatibility

- Compatibility can be configured on `.browserslistrc`. Most browsers should be covered with current configuration.
- `babel`(JavaScript), `postcss-loader`(css), `.browserslistrc` converts js/css codes to support backward compatibility.

8. Format

- The code can be formatted via commands, but maybe java code isn't formatted by these commands.

```
- Execute eslint and stylelint
npm run format

- Execute eslint
npm run eslint

- Execute stylelint
npm run stylelint
```
