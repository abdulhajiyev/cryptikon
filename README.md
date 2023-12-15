# uoʞᴉʇdʎɹɔ

Cryptikon is a TypeScript project that uses Discord.js to interact with Discord servers. It provides a command to generate charts for a specified pair and interval.

## Prerequisites

- Node.js
- npm

# Setup

1. Clone the repository:

```sh
git clone https://github.com/abdulhajiyev/cryptikon.git
```

2. Navigate to the project directory:

```sh
cd cryptikon
```

3. Install the dependencies:

```sh
npm install
```

4. Copy the `.env.example` file to a new file named `.env` and fill in your Discord token and client ID:

```sh
cp .env.example .env
```

## Usage

To start the bot, use the following command:

```sh
npm run dev
```

To build the project, use the following command:

```sh
npm run build
```

## Commands

- `/chart`: Show chart for a pair and interval. You need to provide the pair and interval as arguments.