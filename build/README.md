## Build Tools

The frontend ecosystem is very diverse so we cannot support the myriad tools that people like to use but this folder includes examples of using some of the most popular build tools with [UWE][]. For the best performance compiling Javascript/Typescript we recommend using [swc](/build/swc).

See the [documentation][docs] for more information.

## Run

First install dependencies with `npm install` or `yarn install` then you can preview the site with a development server:

```
uwe dev --exec
```

To test a production build (equivalent to `NODE_ENV=production`) run:

```
uwe server --exec --open
```

Each build tool should show a check mark if it is working, for example, if you launch the [swc](/build/swc) project with `uwe dev --exec` you should expect to see on the web page:

```text
swc ✓
```

## Test

To run a smoke test of all the integrations:

```
make test
```

## Notes

Tested using node@14.3.0.

[UWE]: https://uwe.app/
[docs]: https://uwe.app/docs/in-depth/build-tools/
