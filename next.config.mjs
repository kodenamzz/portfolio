import createNextIntlPlugin from "next-intl/plugin";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJson = JSON.parse(
  readFileSync(join(__dirname, "package.json"), "utf-8")
);

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  // Expose app version to the client (Next.js 16: env is legacy but supported)
  env: {
    NEXT_PUBLIC_APP_VERSION: packageJson.version,
  },
};

export default withNextIntl(nextConfig);
