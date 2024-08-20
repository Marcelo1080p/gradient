import JSZip from "jszip";
import { saveAs } from "file-saver";
import { CopyCssService } from "./CopyCssService";

export class DownloadService extends CopyCssService {
  static generateHtml(): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gradient Preview</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="your-class-css"></div>
</body>
</html>
    `;
  }

  static downloadCssFile(
    gradient: string,
    hasAnimation: boolean,
    duration: number,
    infinite: boolean,
    direction: string
  ) {
    const zip = new JSZip();
    const folder = zip.folder("Gradient");

    const CODE_CSS = this.generateCss(
      gradient,
      hasAnimation,
      duration,
      infinite,
      direction
    );

    const INDEX_HTML = this.generateHtml();

    folder?.file("style.css", CODE_CSS);
    folder?.file("index.html", INDEX_HTML);

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "Gradient.zip");
    });
  }
}
