import fs from 'fs';
import path from 'path';

function generateImports(rootDir, name) {
    const iconFiles = fs.readdirSync(rootDir);
    const imports = iconFiles.map((name) => {
        const varname = name.replace(/\.[^/.]+$/, '').replace(/[\s''-]/g, '');
        const filename = name.replace(/'/g, "\\'")
        name = filename.replace(/\.[^/.]+$/, '')
        const path = "/" + rootDir + filename;
        return {name, varname, path};
    });
    const importText = imports.map(({name, varname, path}) => `import ${varname} from '${path}';`).join("\n")
    const exportText = imports.map(({name, varname}) => `['${name}']: ${varname}`).join(",\n  ");
    return `${importText}
export const ${name} = {
  ${exportText}
}
`;
}

const artifacts = generateImports('public/icons/artifacts/', 'artifacts');
const characters = generateImports('public/icons/characters/', 'characters');

// Write the output to a file
const outputFile = './src/app/lib/data/_images.ts';
fs.writeFileSync(outputFile, `//This file was generated by generateIconImports.mjs

${artifacts}

${characters}`);

console.log(`Icons have been generated in ${outputFile}`);
