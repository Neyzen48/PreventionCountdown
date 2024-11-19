// eslint.config.js
const html = require("eslint-plugin-html");

module.exports = [
    {
        files: ["**/*.js", "**/*.ejs"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        plugins: {
            html,
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },
];
