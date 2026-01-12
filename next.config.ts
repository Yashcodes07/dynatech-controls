// next.config.ts
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  // your existing config (reactStrictMode, etc.)
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);