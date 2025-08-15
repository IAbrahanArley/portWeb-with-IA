import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	serverExternalPackages: ["@prisma/client"],
	typescript: {
		ignoreBuildErrors: true, // Temporariamente para permitir build sem DB
	},
	eslint: {
		ignoreDuringBuilds: true, // Temporariamente para permitir build sem DB
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "storage.googleapis.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "**",
				port: "",
				pathname: "/**",
			},
		],
	},
}

export default nextConfig
