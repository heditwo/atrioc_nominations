/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "***.jtvnw.net",
			},
		],
	},
	env: {
		API_URL: process.env.API_URL,
		API_TOKEN: process.env.API_TOKEN,
	},
};

module.exports = nextConfig;
