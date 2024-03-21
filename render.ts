import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
 
async function render() {

const bundled = await bundle({
  entryPoint: "./src/index.ts",
  // If you have a Webpack override, make sure to import it here
  webpackOverride: (config) => config,
});
 
const composition = await selectComposition({
  serveUrl: bundled,
  id: "HelloWorld",
});
 
console.log("Starting to render composition");
 
await renderMedia({
  codec: "h264",
  composition,
  serveUrl: bundled,
  outputLocation: `out/${composition.id}.mp4`,
  chromiumOptions: {
    enableMultiProcessOnLinux: true,
  },
});
 
console.log(`Rendered composition ${composition.id}.`);
}

render().catch((error) => {
	console.error('Error rendering: ', error);
});