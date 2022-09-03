export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63134b56e31c966c9b7850f6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-7doifqti",
                  apiId: "53f51718-73ae-4fbe-a723-2d93e089f43a",
                },
                {
                  buildHookId: "63134b57892a1511bb63823f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wsuy3pk1",
                  apiId: "3026c6cb-3287-4352-88f2-5698adbffb44",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cartoonistarif/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wsuy3pk1.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
