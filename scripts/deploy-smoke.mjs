import {createServer} from 'node:http';
import {readFileSync,mkdtempSync,copyFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const dir=mkdtempSync(join(tmpdir(),'harness-lab-deploy-'));
let server;
try {
  for (const f of ['product.mjs','manifest.json']) copyFileSync('dist/'+f,join(dir,f));
  const manifest=JSON.parse(readFileSync(join(dir,'manifest.json')));
  const expectedSha=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
  assert.equal(manifest.sha,expectedSha,'stale artifact: wrong source commit');
  assert.equal(createHash('sha256').update(readFileSync(join(dir,'product.mjs'))).digest('hex'),manifest.artifactSha256);
  const product=await import(pathToFileURL(join(dir,'product.mjs')));
  server=createServer((req,res)=> {res.setHeader('Content-Type','application/json');res.end(JSON.stringify({...product.health(),...manifest}));});
  await new Promise(r=>server.listen(0,'127.0.0.1',r));
  const response=await fetch('http://127.0.0.1:'+server.address().port+'/health');
  assert.equal(response.status,200); const body=await response.json(); assert.equal(body.sha,manifest.sha); assert.equal(body.status,'ok');
  console.log(JSON.stringify({deployment:'ephemeral-runner-http',...body}));
} finally { if(server) await new Promise(r=>server.close(r)); rmSync(dir,{recursive:true}); console.log('DISPOSABLE_ENVIRONMENT_REMOVED'); }
