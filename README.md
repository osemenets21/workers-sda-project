## Installation

**1) Startup**

Clone project repository to your local directory:

```bash
git clone git@github.com:ergonode/frontend.git
```

Install project dependencies:

```bash
npm install
```

Set your local `.env` file:

```bash
npm run env
```
> *You may want to override created .env file by other settings*

**2) Module configuration**

Follow **CLI** steps to configure project:

```bash
npm run modules
```

You might want automatically setup all modules by executing command:
```bash
npm run modules:all
```
> All available modules can be found in the `package.json` file in the `_availableModules` section, and required modules in the `_requiredModules` section.

> The `_availableModules` is an object where the key is the module name and the value is the module type.
The `local` type defines local modules located in the `modules` directory, and the `npm` type defines modules hosted on npm.

**3) Build**

Run development mode

```bash
npm run dev
```

Run production mode

```bash
npm run build
npm run start
```

> *After you set up [backend application][backend] and generated default fixtures you may login into application with credentials `test@ergonode.com`, password: `abcd1234`*

**4) Docker**

Installation guide at [docker repository][docker]

## Browser

We recommend using the latest version of **Chrome** browser.
On other browsers some functionalities may not work as intended.

## Documentation

The project is in early stage and we have got a lot of milestones to develop.  We do our best to deliver great documentation, but - to be honest -  it is the hardest thing in open-source projects :)

**Please find out what we've already prepared on [devs.ergonode.com][docs]**

## Technologies

- Vue.js
- Nuxt.js
- Node.js
- SASS
- Axios
- BEM (CSS)
- ESLint (Airbnb standard)
- Cypress
- JestJS

## Contact us

If you have any questions or ideas feel free to join our [slack][slack].

## Is it production ready

Yes!
## Contributing

Before you start making any pull requests checkout our [contribution guide][contribut]. If you have any questions or ideas feel free to join our [slack][slack] or send us an email: team@ergonode.com

## Partners

Ergonode is open-source, and it can be brought to you only by great community and partners supported by our core team. If you want to be on that list please send us an email: team@ergonode.com

## The license

Ergonode source code is released under the [OSL 3.0 License][license].

[slack]: https://join.slack.com/t/ergonode-community/shared_invite/zt-ibppxnyc-4Ykac1Gh64Qkk5SWy3sg3w
[contribut]: https://devs.ergonode.com/#/community/contribution
[license]: ./LICENSE.txt
[roadmap]: https://ergonode.com/features/#roadmap
[docs]: https://devs.ergonode.com
[ddd]: https://en.wikipedia.org/wiki/Domain-driven_design
[cqrs]: https://en.wikipedia.org/wiki/Command%E2%80%93query_separation
[es]: https://dev.to/barryosull/event-sourcing-what-it-is-and-why-its-awesome
[backend]: https://github.com/ergonode/backend
[frontend]: https://github.com/ergonode/frontend
[docker]: https://github.com/ergonode/docker
