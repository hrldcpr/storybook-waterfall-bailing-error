minimal reproduction of https://github.com/storybookjs/storybook/issues/18571

```
> npm install
> npx start-storybook
info @storybook/react v6.5.10
info
info => Loading presets
info => Using implicit CSS loaders
info => Using default Webpack5 setup
<i> [webpack-dev-middleware] wait until bundle finished
99% done plugins webpack-hot-middlewarewebpack built preview 667dbc08fa1438c17d4b in 377ms

info => Ignoring cached manager due to change in manager config
Error: NormalModuleFactory.beforeResolve (IgnorePlugin) is no longer a waterfall hook, but a bailing hook instead. Do not return the passed object, but modify it instead. Returning false will ignore the request and results in no module created.
    at /Users/harold/Downloads/storybook-waterfall-bailing-error/node_modules/webpack/lib/NormalModuleFactory.js:789:11
...
```

(tested with Node v18.7.0, npm v8.15.0, MacOS v11.6.8)
