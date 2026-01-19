// import React from "react";
// import { Html, Head, Main, NextScript } from "next/document";
// import createEmotionServer from "@emotion/server/create-instance";
// import createEmotionCache from "../utils/createEmotionCache";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         {/* Inject Material-UI styles */}
//         <style id="emotion-server-side" dangerouslySetInnerHTML={{ __html: "" }} />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

// Document.getInitialProps = async (ctx) => {
//   const originalRenderPage = ctx.renderPage;
//   const cache = createEmotionCache();
//   const { extractCriticalToChunks } = createEmotionServer(cache);

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
//     });

//   const initialProps = await Document.getInitialProps(ctx);
//   const emotionStyles = extractCriticalToChunks(initialProps.html);
//   const emotionStyleTags = emotionStyles.styles.map((style) => (
//     <style
//       data-emotion={`${style.key} ${style.ids.join(" ")}`}
//       key={style.key}
//       dangerouslySetInnerHTML={{ __html: style.css }}
//     />
//   ));

//   return {
//     ...initialProps,
//     styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
//   };
// };