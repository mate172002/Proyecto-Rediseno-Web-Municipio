const fs = require('fs');
const files = [
  'src/data/municipality.ts',
  'src/pages/CityPage.tsx',
  'src/pages/ContactPage.tsx',
  'src/pages/HomePage.tsx',
  'src/pages/MunicipalityPage.tsx'
];

let seedCounter = 1;
files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?auto=format&fit=crop&q=80&w=\d+/g, () => {
      const url = `https://picsum.photos/seed/loja${seedCounter}/800/600`;
      seedCounter++;
      return url;
    });
    fs.writeFileSync(f, content);
  }
});
