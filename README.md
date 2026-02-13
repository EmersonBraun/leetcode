# LeetCode Solutions

A comprehensive guide to solving LeetCode programming problems with structured explanations. This project provides organized solutions with approaches, key points, and detailed walkthroughs.

## 🎯 About the Project

This LeetCode Solutions guide was developed to be your companion during technical interview preparation. Each problem is presented in a structured format with:

- **Approaches:** Different strategies to solve each problem
- **Key Points:** Essential concepts and important patterns
- **Solutions:** Detailed code implementations with explanations

## 🌐 Online Access

The site is available at: [https://emersonbraun.github.io/leetcode/](https://emersonbraun.github.io/leetcode/)

## 🚀 Technology

This project is built using [Docusaurus](https://docusaurus.io/), a modern static site generator, with support for multiple languages (English, Portuguese, and Spanish).

## 📦 Installation

```bash
yarn
```

## 🛠️ Local Development

```bash
yarn start
```

This command starts a local development server and opens a browser window. Most changes are reflected in real-time without having to restart the server.

### Search (Algolia)

The site uses [Algolia DocSearch](https://docsearch.algolia.com/) for the search bar. If you run `yarn start` or `yarn build` **without** configuring Algolia, you will see:

```text
"algolia.appId" is required. If you haven't migrated to the new DocSearch infra...
```

To fix this, you need to set the Algolia credentials (they are read from environment variables).

**Where to get the credentials:**

1. **DocSearch (recommended for open-source docs)**  
   - Go to [docsearch.algolia.com](https://docsearch.algolia.com/).  
   - Apply for [DocSearch](https://docsearch.algolia.com/apply/) (free for open-source projects).  
   - After approval, Algolia will send you the **Application ID**, **Search-Only API Key**, and **Index name**.

2. **Algolia dashboard (if you already have an account)**  
   - Log in at [dashboard.algolia.com](https://dashboard.algolia.com/).  
   - **Application ID**: in the left sidebar, under "API Keys".  
   - **Search-Only API Key**: same page, use the "Search-Only API Key" (safe for frontend).  
   - **Index name**: create an index (e.g. `leetcode`) and use that name; the project expects `indexName: 'leetcode'` in the config.

**How to configure locally:**

Copy `.env.example` to `.env` and fill in your credentials, or export the variables in your shell:

```bash
ALGOLIA_APP_ID=your_application_id
ALGOLIA_API_KEY=your_search_only_api_key
```

The index name is already set in `docusaurus.config.ts` as `leetcode`. If your Algolia index has another name, you'll need to change it in the config.

> **Note:** Do not commit `.env` or real API keys to the repository. Add `.env` to `.gitignore` if it isn't already.

## 🏗️ Build

```bash
yarn build
```

This command generates static content in the `build` directory and can be served using any static content hosting service.

## 🚀 Deploy

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Without using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## 🧪 Testing

```bash
yarn test
```

Run tests with UI:

```bash
yarn test:ui
```

Run tests with coverage:

```bash
yarn test:coverage
```

## 🤝 Contributing

Contributions are welcome! If you find outdated information or want to add new solutions, feel free to open an issue or send a pull request.

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 👨‍💻 Author

Created by [Emerson Braun](https://www.linkedin.com/in/emerson-braun/)
