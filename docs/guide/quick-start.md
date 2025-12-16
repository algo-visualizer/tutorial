# Quick Start

This section walks you through instrumenting a Python script to capture snapshots in the browser.

## 1) Watch variables and arrays

```python
from visual import var, array, breakpoint

with var('i', 'ans'):
    with array('nums').index('i'):
        for i, x in enumerate(nums):
            ans += x
            breakpoint()
```

- `var(name, ...)` tracks scalar variables by name (fast path). Use `expr=True` if you need expressions.
- `array(name).index('i')` tracks 1D sequences and marks indices.
- `breakpoint()` captures a snapshot: line, graphs of all watchables, stdout content.

## 3) Render snapshots (frontend)

The frontend (already in this repo) reads snapshots via `visual.core._visual_api_get_snapshots_json()` and renders them. When you run in the playground, snapshots will appear in the visualizer panel.

## 4) Full minimal example

```python
from visual import var, array, breakpoint

nums = [3, 1, 4]
ans = 0

with var('i', 'ans'):
    with array('nums').index('i'):
        for i, x in enumerate(nums):
            ans += x
            print('adding', x)
            breakpoint()
```

What you get:

- Snapshots after each `breakpoint()`
- `stdout` messages stored with each snapshot
- Index pointer highlighting on `nums`

## 5) 2D arrays

```python
from visual import array2d, breakpoint

grid = [[1,2],[3,4]]
with array2d('grid').index('r', 'c'):
    for r, row in enumerate(grid):
        for c, v in enumerate(row):
            breakpoint()
```

## 6) Nodes / Graph structures (high level)

See the dedicated section: [Graph/Nodes Visualization](/guide/nodes).
