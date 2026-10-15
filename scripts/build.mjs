import {mkdirSync,copyFileSync,writeFileSync,readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
mkdirSync('dist',{recursive:true}); copyFileSync('src/product.mjs','dist/product.mjs');
const sha=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
writeFileSync('dist/manifest.json',JSON.stringify({sha,version:JSON.parse(readFileSync('package.json')).version,artifactSha256:createHash('sha256').update(readFileSync('dist/product.mjs')).digest('hex')},null,2)+'\n');
