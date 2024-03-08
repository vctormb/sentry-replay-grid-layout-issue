import * as Sentry from "@sentry/nextjs";
import { SENTRY_DSN } from "./app/consts";

Sentry.init({
  dsn: SENTRY_DSN,

  tracesSampleRate: 1,
  environment: "development",
  debug: false,

  replaysSessionSampleRate: 1,
  replaysOnErrorSampleRate: 1,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: true,
    }),
  ],
});
