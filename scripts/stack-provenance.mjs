// Trusted default-branch observer. Candidate code is never executed here.
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
const event=JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH,'utf8'));
const pr=event.pull_request;
const digest=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
console.log(JSON.stringify({
  event:process.env.GITHUB_EVENT_NAME, action:event.action,
  sha:process.env.GITHUB_SHA, ref:process.env.GITHUB_REF, baseRef:process.env.GITHUB_BASE_REF,
  workflowSha:process.env.WORKFLOW_SHA, workflowRef:process.env.WORKFLOW_REF,
  checkout:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),
  pr:pr.number, head:pr.head.sha,
  parent:{ref:pr.base.ref,sha:pr.base.sha},
  trunk:pr.stack?.base ?? null,
  files:Object.fromEntries(['scripts/check-commit-message.cjs','scripts/stack-provenance.mjs',
    '.github/workflows/commitlint.yml','.github/workflows/test-guard.yml'].map(file=>[file,digest(file)])),
}));
