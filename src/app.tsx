import { Suspense, lazy } from "react";
import useAsset from "ultra/hooks/use-asset.js";
import Test from "./Test.tsx";
const LazyTest = lazy(() => import("./Test.tsx"));

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>basic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />
        <link rel="preload" as="style" href={useAsset("/style.css")} />
        <link rel="stylesheet" href={useAsset("/style.css")} />
      </head>
      <body>
        {/* <Test id="1" /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Test id="2" />
          <LazyTest id="3" />
        </Suspense>
      </body>
    </html>
  );
}
