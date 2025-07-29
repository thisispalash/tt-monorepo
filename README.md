# Token Tuner Monorepo

This repository contains all the web based code for [Token Tuner](https://tokentuner.xyz).

> [!TIP]
> see contracts at [`tt-forge`](https://github.com/thisispalash/tt-forge)

## Repository structure
> Repo prefix ~ `@tt/`

### Apps

These are the main user facing applications for Token Tuner.

[`docs`](./apps/docs/) Contains code for the [documentation site](https://docs.tokentuner.xyz).

[`web`](./apps/web/) Contains code for the [main site](https://tokentuner.xyz).

### Packages

These are the packages consumed by the apps.

[`components`](./packages/components/) Stub React component library, shared by all apps.

[`tailwind-config`](./packages/tailwind-config/) Shared tailwind customizations.

### Packages (dev)

These packages are important during building, or regular dev stuff.

[`eslint-config`](./packages/eslint-config/) Shared eslint configurations for the entire repo.

[`typescript-config`](./packages/typescript-config/) Shared `tsconfig.json`s for the entire repo.

### Miscellaneous

This [folder](./_misc/) contains notes and assets not necessarily used by the code. The purpose 
of this folder is to house any information for hackathons or grants or lore documentation.
