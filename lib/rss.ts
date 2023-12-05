import fs from "fs";
import RSS from "rss";

export default async function generateRssFeed(posts: any) {
  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://melvinliu.com"
      : "http://localhost:3000";

  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Melvin Liu RSS Feed",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.jpeg`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  posts.map((post: any) => {
    feed.item({
      title: post.title,
      description: post.body.description,
      url: `${site_url}/blog/${post.body.slug}`,
      date: post.body.date,
      guid: post.body.slog,
      author: "Melvin Liu",
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/feed", feed.xml({ indent: true }));
}
