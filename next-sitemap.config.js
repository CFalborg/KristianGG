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
      // Til dig
      { loc: "/til-dig", changefreq: "monthly", priority: 0.9 },
      { loc: "/til-dig/nervesystemet", changefreq: "monthly", priority: 0.9 },
      { loc: "/til-dig/naturterapi", changefreq: "monthly", priority: 0.9 },
      { loc: "/til-dig/psykoterapi", changefreq: "monthly", priority: 0.9 },
      // Til virksomheder
      { loc: "/til-virksomheder", changefreq: "monthly", priority: 0.8 },
      { loc: "/til-virksomheder/workshops", changefreq: "monthly", priority: 0.8 },
      { loc: "/til-virksomheder/foredrag", changefreq: "monthly", priority: 0.8 },
      { loc: "/til-virksomheder/trivsel", changefreq: "monthly", priority: 0.8 },
      // Til kommuner
      { loc: "/til-kommuner", changefreq: "monthly", priority: 0.8 },
      { loc: "/til-kommuner/saerforanstaltninger", changefreq: "monthly", priority: 0.7 },
      { loc: "/til-kommuner/vikardaekning", changefreq: "monthly", priority: 0.7 },
      { loc: "/til-kommuner/borgerforloeb", changefreq: "monthly", priority: 0.7 },
      // Supporting pages
      { loc: "/om", changefreq: "monthly", priority: 0.8 },
      { loc: "/priser", changefreq: "monthly", priority: 0.8 },
      { loc: "/kontakt", changefreq: "monthly", priority: 0.8 },
    ];
  },
};

module.exports = config;
