# Snapshots & Breakpoints

Snapshots capture the state of all active watchables plus stdout at a specific line.

- API: `visual.breakpoint(condition_expr: str | None = None)`
- If `condition_expr` is provided, it is `eval`-ed in the caller frame; if False, no snapshot is taken.
- Line numbers are mapped back to original source with `_visual_api_set_linemap` (used by the instrumenter).
- Each snapshot includes: `{ line, graph_group, event="line", stdout }`.

Minimal pattern:

```python
from visual import var, breakpoint

with var('i', 'x'):
    for i, x in enumerate([10, 20, 30]):
        breakpoint()
```

### Conditional snapshots

```python
breakpoint("i % 2 == 0")  # only even i
```

### stdout capture

Stdout prints are stored with each snapshot:

```python
print('debug message')
# later: snapshot.stdout includes this message
```
