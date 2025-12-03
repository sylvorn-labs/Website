/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://labs.sylvorn.com",
  exclude: ["/api/*", "/server-sitemap.xml"], // Exclude API routes
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,

  // Default transformation for all URLs
  transform: async (config, path) => {
    // Customize priority and change frequency based on path
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Homepage gets highest priority
    if (path === "/") {
      priority = 1.0;
      changefreq = "monthly";
    }
    // About and main pages
    else if (path.match(/^\/(about|services|contact|products)/)) {
      priority = 0.8;
      changefreq = "monthly";
    }
    // Blog posts or dynamic content
    else if (path.match(/^\/(blog|news)/)) {
      priority = 0.6;
      changefreq = "weekly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },

  // Additional paths to include in sitemap (if any)
  additionalPaths: async () => {
    const result = [];

    // Add any dynamic routes here if needed
    // Example:
    // const posts = await fetchBlogPosts();
    // posts.forEach((post) => {
    //   result.push({
    //     loc: `/blog/${post.slug}`,
    //     lastmod: post.updatedAt,
    //     changefreq: 'weekly',
    //     priority: 0.7,
    //   });
    // });

    return result;
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
