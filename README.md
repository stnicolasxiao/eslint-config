# Yet another eslint config

## how to use

- In your project root directory, create a .eslintrc.js file

```javascript
module.exports = {
  "extends": "@nicolassiufe/eslint-config"
}
```

- Install eslint-config-haina

```bash
tnpm i -D @nicolassiufe/eslint-config eslint
```

- In your package.json, add a script

```json
{
  "scripts": {
    "lint": "eslint --fix --ext .js,.vue src"
  }
}
```

- Before you commit code, type **npm run lint** to check your code **OR** use husky to hook precommit ;-)
