import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const exportDir = path.resolve('public/elementor-export');
const outputDir = path.resolve('public/downloads');
const outputFile = path.join(outputDir, 'nurul-hoque-portfolio-elementor.zip');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Copy assets if needed
const assetsSrc = path.resolve('src/assets');
const assetsDest = path.join(exportDir, 'assets');
if (fs.existsSync(assetsSrc) && !fs.existsSync(assetsDest)) {
  fs.cpSync(assetsSrc, assetsDest, { recursive: true });
}

const zip = new JSZip();

function addFolderToZip(folderPath: string, zipFolder: JSZip) {
  const items = fs.readdirSync(folderPath);
  for (const item of items) {
    const fullPath = path.join(folderPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const subZip = zipFolder.folder(item);
      if (subZip) {
        addFolderToZip(fullPath, subZip);
      }
    } else {
      const content = fs.readFileSync(fullPath);
      zipFolder.file(item, content);
    }
  }
}

addFolderToZip(exportDir, zip);

zip
  .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
  .pipe(fs.createWriteStream(outputFile))
  .on('finish', () => {
    console.log(`Successfully generated zip at: ${outputFile} (${fs.statSync(outputFile).size} bytes)`);
  });
