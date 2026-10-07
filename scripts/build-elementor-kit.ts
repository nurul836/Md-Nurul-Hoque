import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const templateJson = JSON.parse(
  fs.readFileSync(path.resolve('public/elementor-export/elementor-template.json'), 'utf-8')
);

const manifest = {
  manifest_version: '1.0',
  elementor_version: '3.20.0',
  name: 'Nurul Hoque Portfolio',
  title: 'Nurul Hoque - WordPress Portfolio',
  description: 'Complete Elementor Template for Nurul Hoque Portfolio',
  author: 'Nurul Hoque',
  version: '1.0.0',
  templates: {
    '1': {
      title: 'Nurul Hoque - Portfolio Home',
      type: 'page',
      doc_type: 'page',
      file: 'templates/portfolio-page.json',
      thumbnail: '',
    },
  },
};

const zip = new JSZip();
zip.file('manifest.json', JSON.stringify(manifest, null, 2));
const templatesFolder = zip.folder('templates');
if (templatesFolder) {
  templatesFolder.file('portfolio-page.json', JSON.stringify(templateJson, null, 2));
}

const outputPath = path.resolve('public/downloads/elementor-kit.zip');
zip
  .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
  .pipe(fs.createWriteStream(outputPath))
  .on('finish', () => {
    console.log(`Elementor Kit zip built successfully at ${outputPath}`);
  });
