## Next.js Pokémon Dashboard

This project is a Next.js application that demonstrates a Pokémon dashboard with pagination and a login screen using the new Next.js App Router and NextUI components.

### Features

- **Authentication:** Mock authentication service with login screen using NextUI components.
- **Pokémon Dashboard:** Displays Pokémon cards fetched from the PokéAPI with pagination (20 Pokémon per page).
- **Pokémon Card:** Displays Pokémon name, image, type(s), and two additional attributes (ID and base experience).
- **Styling:** Responsive design using Tailwind CSS and NextUI styling.
- **SEO:** Proper meta tags for login and dashboard pages.
- **Error Handling:** Basic error handling for API calls and authentication.
- **Type Safety:** TypeScript used throughout the application.
- **Input Validation:** Basic input validation on the login form using Zod.
- **Next.js App Router:** Uses the new App Router for routing and layout.

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [PokéAPI](https://pokeapi.co/)
- [Zod](https://zod.dev)
- React Query (for data fetching and caching)

### Third-Party Libraries

- **NextUI:** Used for UI components.
- **Zod:** Used for schema validation.
- **axios:** Used for making API calls.
- **React Query:** Used for data fetching and caching.

### Assumptions and Decisions

- Mock authentication is used for simplicity.
- Error handling is basic and can be further improved.
- Input validation is limited to basic checks.

## How to Use

### Setup Instructions

Clone the repository: `git clone <repository-url>`

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

## Authentication

**username:** _user_
**password:** _password_
