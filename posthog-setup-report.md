<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Our Skills TanStack Start application. Here is a summary of all changes made:

- **`vite.config.ts`** — Added a reverse proxy configuration routing `/ingest/*` requests through the local dev server to PostHog's ingestion endpoints (`us.i.posthog.com` and `us-assets.i.posthog.com`). This improves reliability and avoids ad-blocker interference.
- **`src/routes/__root.tsx`** — Wrapped the entire app with `PostHogProvider` (outside `ClerkProvider`), initialized with the project token and host via environment variables. Added a `PostHogUserIdentifier` component that uses Clerk's `useUser` hook to call `posthog.identify()` whenever the user signs in, and `posthog.reset()` on sign-out — keeping PostHog user identity in sync with Clerk auth state.
- **`src/routes/index.tsx`** — Added `posthog.capture()` calls on the "Browse Registry" and "Publish Skill" CTA buttons to track user intent from the home page.
- **`src/components/SkillCard.tsx`** — Added `posthog.capture()` on the overlay link (skill card opened) and on the copy button (install command copied), including relevant properties like skill title, category, and the install command itself.
- **`.env`** — Created with `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` environment variables (covered by `.gitignore`).

## Events instrumented

| Event | Description | File |
|---|---|---|
| `browse_registry_clicked` | User clicks the "Browse Registry" CTA on the home page | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicks the "Publish Skill" CTA on the home page | `src/routes/index.tsx` |
| `install_command_copied` | User copies a skill's install command from a skill card (includes `skill_title`, `skill_category`, `install_command`) | `src/components/SkillCard.tsx` |
| `skill_card_opened` | User clicks to open a skill card (includes `skill_title`, `skill_category`) | `src/components/SkillCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/397966/dashboard/1511500
- **Insight — Registry engagement over time**: https://us.posthog.com/project/397966/insights/utdyU18M
- **Insight — Skill discovery funnel**: https://us.posthog.com/project/397966/insights/a1fs8eEv
- **Insight — Most copied skills by category**: https://us.posthog.com/project/397966/insights/6Qmp8Ddm
- **Insight — Publish skill intent**: https://us.posthog.com/project/397966/insights/8agCt1XE
- **Insight — Daily active users (unique)**: https://us.posthog.com/project/397966/insights/ogPda81S

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-tanstack-start/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
