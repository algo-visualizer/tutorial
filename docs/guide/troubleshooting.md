# Troubleshooting

Common issues when using visual API in Pyodide.

## No snapshots appear

- Ensure you actually call `breakpoint()`; snapshots are only produced at breakpoints.
- Make sure watchables are registered (e.g., `with var('x'):`). If none registered, graphs may be empty.

## Expression mode errors

- If `expr=True`, invalid expressions will be swallowed as "not captured". Prefer `expr=False` when possible.
- Non-boolean `condition_expr` for `breakpoint()` raises `TypeError`.

## stdout missing

- stdout is captured alongside snapshots produced via `breakpoint()`.

## Wrong line numbers

- The instrumenter must call `_visual_api_set_linemap` to map injected lines back to source.

## Nodes not rendering

- Verify `head_id`, `next_ids`, and `value` functions handle `None` and return valid IDs.
- Weighted edges: return `(id, weight)` tuples or list of tuples.

## Performance tips

- Keep `expr=False` for hot loops.
- Limit the number of watchables and breakpoints in tight loops.
- Avoid huge prints; stdout is stored per snapshot.
