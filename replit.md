# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the F1 Soluções Financeiras website — a Brazilian auto-equity loan broker in Ribeirão Preto/SP.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite + TailwindCSS + shadcn/ui + framer-motion

## Artifacts

### F1 Soluções Financeiras (`artifacts/f1-financeiras`)
- React + Vite web app at `/` (previewPath: `/`)
- Landing page for auto-equity loan broker
- Features: eligibility quiz, lead capture form, FAQ, contact form
- Multiple pages: home, sobre, como-funciona, parceiros, faq, contato, legal pages

### API Server (`artifacts/api-server`)
- Express 5 API at `/api`
- Routes: `GET /api/healthz`, `POST /api/leads`, `GET /api/leads/stats`, `POST /api/contact`
- Stores leads and contacts in PostgreSQL

## Database Schema

- `leads` table: id, name, email, phone, cpf, license_plate, vehicle_paid, vehicle_in_owner_name, has_income, consent_lgpd, source, created_at
- `contacts` table: id, name, email, phone, subject, message, consent_lgpd, created_at

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Important Notes

- After running `pnpm --filter @workspace/api-spec run codegen`, the generated `lib/api-zod/src/index.ts` will be overwritten with extra exports. Fix it by keeping only `export * from "./generated/api";`
- Company WhatsApp: wa.me/5516988602882
- CNPJ: 55.225.287/0001-40
- Brand colors: navy (#0B1B3B = hsl(221 72% 14%)) + purple (hsl(268 63% 46%))

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
