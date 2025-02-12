import { defineConfig } from "drizzle-kit";
import { DATABASE_URL } from '@/config/env';

export default defineConfig({
    schema: ['./drizzle/schemas/**/*.ts'],
    out: './drizzle/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: DATABASE_URL,
    },
    verbose: true,
    strict: true,
});