# Turborepo starter

Before proceeding with the project setup, make sure your computer is properly configured for development. The following tools and software must be installed:

- **Node.js**: Ensure that Node.js is installed on your machine. You can download and install it from the [official Node.js website](https://nodejs.org/). We recommend installing the latest LTS (Long-Term Support) version. To verify if Node.js is installed, run the following command in your terminal:
  ```bash
  node -v
  ```
  You should see a version number. If not, install Node.js.
- **npm**: These are package managers used to install project dependencies. `npm` comes bundled with Node.js
  ```bash
  npm -v
  ```
- **Git**: You need Git installed for cloning repositories and managing version control. You can download it from the [official Git website](https://git-scm.com/). To verify the installation, run:
  ```bash
  git --version
  ```
- **Use the tools**: Our project use [Typescript](https://www.typescriptlang.org/docs), [ESLint](https://eslint.org/docs/user-guide/getting-started), and [Prettier](https://prettier.io/). Make sure you’re familiar with Typescript’s best practices and enable an ESLint and Prettier plugin for your IDE.

💡 Make sure your code is formatted with Prettier and is free from any ESLint error before you submit a pull request:

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `api`: a [Nest.js](https://nestjs.com/) app
- `dashboard`: [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/), [ShadcnUI](https://ui.shadcn.com/docs) and [MagicUI](https://magicui.design/docs) shared by both `dashboard` and `landing` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwind-config`: `tailwind` configurations for [Tailwind CSS](https://tailwindcss.com/) and [ShadcnUI](https://ui.shadcn.com/docs)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Develop

To develop all apps and packages, run the following command:

```bash
pnpm dev
```

```bash
pnpm dev:dashboard
```

```bash
pnpm dev:api
```

### Build

To build all apps and packages, run the following command:

```bash
pnpm build
```

```bash
pnpm build:dashboard
```

```bash
pnpm build:api
```

### Add package

You need to check [documentation](https://turbo.build/repo/docs/handbook/package-installation)

```bash
pnpm add <package> --filter=<workspace name>
```

Only adds the new dependency if it is found in the workspace.

```bash
pnpm add -w <package>
```

### Docker Compose Command

The project uses Docker Compose to manage containers

```bash
pnpm docker-compose-up
```

```bash
pnpm docker-compose-down
```

### Migration

A [migration](https://orkhan.gitbook.io/typeorm/docs/migration) is just a single file with sql queries to update a database schema and apply new changes to an existing database. To correctly manage migrations you need to run commands while in the folder with the desired application. For example `apps/api`

```bash
pnpm migration:run
```

```bash
pnpm migration:generate --name=<migration name>
```

```bash
pnpm migration:revert
```

### Add UI component

The project uses two component libraries: [ShadcnUI](https://ui.shadcn.com/docs) and [MagicUI](https://magicui.design/docs)

Each of them has its own CLI for more convenient component addition. In the project, we use the [magicu-cli](https://magicui.design/docs/cli) variant, which can work in tandem with [shadcn-ui](https://ui.shadcn.com/docs/cli).

```bash
#add Shadcn UI component
pnpm ui:add --shadcn <component name>
```

```bash
#add Magic UI component
pnpm ui:add <component name>
```

### Building packages/ui

This example is set up to produce compiled styles for `ui` components into the `dist` directory. The component `.tsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.js`. This was chosen for several reasons:

- Make sharing one `tailwind.config.js` to apps and packages as easy as possible.
- Make package compilation simple by only depending on the Next.js Compiler and `tailwindcss`.
- Ensure Tailwind classes do not overwrite each other. The `ui` package uses a `ui-` prefix for it's classes.
- Maintain clear package export boundaries.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update the `tailwind.config.js` in your apps to be aware of your package locations, so it can find all usages of the `tailwindcss` class names for CSS compilation.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
```

If you choose this strategy, you can remove the `tailwindcss` and `autoprefixer` dependencies from the `ui` package.

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
#cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```bash
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
