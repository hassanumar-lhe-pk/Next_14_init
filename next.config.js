const nextConfig = {
  compiler: {
      removeConsole:
        process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
    },
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'app.eliteairfilters.com',
          port: '',
          pathname: '/assets/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  