const fs = require('fs');

const files = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/components/global/GlobalNav.tsx',
  'src/components/global/GlobalFooter.tsx',
  'src/components/technology/ConceptNode.tsx',
  'src/components/technology/PerspectiveNetwork.tsx',
  'src/components/technology/TechnologyHero.tsx',
  'src/components/technology/PerspectiveStepper.tsx',
  'src/components/technology/TechnologyPortfolio.tsx',
  'src/components/technology/CapOSShowcase.tsx',
  'src/components/technology/ThinkingStudioShowcase.tsx',
  'src/components/technology/TechnologyPhilosophy.tsx',
  'src/components/technology/TechnologyMatrix.tsx',
  'src/components/technology/TechnologyCTA.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let text = fs.readFileSync(f, 'utf8');
    text = text.split('\\\"').join('\"');
    fs.writeFileSync(f, text, 'utf8');
    console.log('Fixed:', f);
  }
});
