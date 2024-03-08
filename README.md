# About
This project reproduces an issue on Sentry Replay when displaying the recorded session using CSS grid layout.

# Getting Started

1. Rename the `.env.local.example` file to `.env.local` and then change the DSN value to your own.

2. Install dependencies
```bash
npm i
```

3. Run the project
```bash
npm run dev
```

4. Navigate through the pages while your screen is being recorded.

5. Go to your Sentry Replay project on [Sentry.io](sentry.io) and access the `Replays` menu to watch your recorded session. You will notice that the home page layout using CSS grid is not working properly.
