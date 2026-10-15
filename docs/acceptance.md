# Solo stack trial boundaries

Create only grinvi04/team-harness-stack-solo-lab after explicit user approval.
Bootstrap main/develop once from the approved snapshot, then install the reviewed
protection payload on those new refs. Existing company lab is read-only and untouched.
The personal owner must be the sole collaborator; no organization or team substitution.

Create two unique codex/g1-solo-ID/{a,b} branches through native init/add and submit
both through stack.sh preview/apply. Upper is draft. Keep the product/tests unchanged;
add one unique synthetic text commit per layer with a valid Korean commit message.
Reject an upper solo request before DELETE. Review the lower current candidate and
its two required Actions checks before one solo-merge.sh invocation.

Collect complete initial, post-DELETE and restored branch protections. The temporary
review setting may be absent/null: this means effective approval requirement zero,
not necessarily a literal JSON count=0. Strict/check app bindings/admin enforcement
and every other protection field must remain equal throughout the exception.
Wrapper and journal readbacks independently verify the full restored policy.

Require actual PR merged SHA and inclusion in develop before claiming merge success.
Record actual request UUID/status/journal. Pending/enqueued/409/lost replies may or
may not occur; a normal completion does not prove those paths. If unresolved, use
journal resume for read-only reconciliation, without a new PUT or cleanup.
Read descendants after server retarget/rebase; do not reuse prior candidate CI.
Upper is not approved for merge. Close it only after no unresolved remote request.

No main merge, tag, release, protected-ref reset, protection removal, collaborator
change or repository deletion. Preserve evidence and the new protected repository.
