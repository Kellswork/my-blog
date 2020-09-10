const { createLoader } = require("simple-functional-loader");

module.exports = {
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
      // oneOf: [
      //   {
      //     resourceQuery: /preview/,
      //     use: [
      //       "raw-loader",
      //       createLoader(function (src) {
      //         if (src.includes("<!--more-->")) {
      //           const [preview] = src.split("<!--more-->");
      //           return this.callback(null, preview);
      //         }

      //         const [preview] = src.split("<!--/excerpt-->");
      //         return this.callback(null, preview.replace("<!--excerpt-->", ""));
      //       }),
      //     ],
      //   },
      //   {
      //     use: [
      //       "raw-loader",
      //       createLoader(function (src) {
      //         const content = [
      //           'import PostList from "@/components/PostList.js"',
      //           'export { getStaticProps } from "@/getStaticProps"',
      //           src,
      //           "export default (props) => <PostList meta={meta} {...props} />",
      //         ].join("\n");

      //         if (content.includes("<!--more-->")) {
      //           return this.callback(
      //             null,
      //             content.split("<!--more-->").join("\n")
      //           );
      //         }

      //         return this.callback(
      //           null,
      //           content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, "")
      //         );
      //       }),
      //     ],
      //   },
      // ],
    });
    return config;
  },
};
