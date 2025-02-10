import { z } from 'zod';

const envSchema = z.object({
    DATABASE_URL: z.string().default('DATABASE_REQUIRED'),
    BETTER_AUTH_SECRET: z.string().default('BETTER_AUTH_SECRET_REQUIRED'),
    BETTER_AUTH_URL: z.string().url().default('http://localhost:3000'),
    GITHUB_CLIENT_ID: z.string().default('GITHUB_CLIENT_ID_REQUIRED'),
    GITHUB_CLIENT_SECRET: z.string().default('GITHUB_CLIENT_SECRET_REQUIRED'),
    NODE_ENV: z.string().default('development'),
});

const { success, error, data } = envSchema.safeParse(process.env);

if (!success) {
  console.error("❌  Environment variable validation error: ", error.format());
  throw new Error(`Invalid environment variables: ${JSON.stringify(error.format(), null, 2)}`);
}

export const { DATABASE_URL, NODE_ENV } = data;