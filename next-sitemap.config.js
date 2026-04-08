/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://kristiangg.dk",
  generateRobotsTxt: true,
  outDir: "out",
  changefreq: "monthly",
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
  },
  additionalPaths: async () => {
    return [
      { loc: "/", changefreq: "weekly", priority: 1.0 },
      { loc: "/hypnosen", changefreq: "monthly", priority: 0.9 },
      { loc: "/nlp", changefreq: "monthly", priority: 0.9 },
      { loc: "/terapi", changefreq: "monthly", priority: 0.9 },
      { loc: "/priser", changefreq: "monthly", priority: 0.8 },
      { loc: "/kontakt", changefreq: "monthly", priority: 0.8 },
      { loc: "/hypnoseshow", changefreq: "monthly", priority: 0.7 },
    ];
  },
};

module.exports = config;
