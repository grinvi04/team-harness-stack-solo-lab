# Disposable solo stack lab contract

Synthetic source only; no production, credentials, environment files or paid services.
This new repository explicitly opts into solo mode. It does not modify or supersede
any company acceptance-lab contract. One personal owner and no other collaborators
are prerequisites; query failure or a different identity blocks the trial.

Use pinned Harness stack.sh for submission and solo-merge.sh for the approved lowest
PR. Native gh stack init/add are permitted; raw stack push/link/submit/merge are not.
Preserve locked test/product.test.mjs, source, workflows and validators after bootstrap.
Run node --test, node scripts/build.mjs and node scripts/deploy-smoke.mjs.
Main/develop require quality and deploy-smoke bound to GitHub Actions, strict=true,
enforce_admins=true, conversation resolution, no force push or deletion.
Both start with one required approval. Only the approved develop lowest merge may
use the wrapper's temporary review exception; it must restore the full original policy.
Main protection must never change after bootstrap. No tags, releases or backmerge.
Pending/enqueued/unverified is not merged. Preserve journals and refs, do not issue
another PUT or reset protected refs. Signal recovery is not remote request cancellation.
No label, fake status, policy relaxation or test modification may obtain a pass.
