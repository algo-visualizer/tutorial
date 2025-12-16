# Watching Data Structures

The visual API exposes _watchables_ that describe how to capture and render data.

- Scalars: `var('x', ...)`
- Arrays: `array('arr', ...).index('i', 'j').item('pivot')`
- 2D arrays: `array2d('grid').index('r', 'c')`
- Inherit existing DS bindings: `inherit('arr')`

## Scalars (Var)

```python
from visual import var, breakpoint
with var('i', 'total'):
    breakpoint()
```

- `expr=True` lets you watch expressions (slower): `var('i+j', expr=True)`

## Arrays (Array)

```python
from visual import array, breakpoint
with array('nums').index('i').item('pivot'):
    breakpoint()
```

- `index(...)` marks pointer(s) into the sequence
- `item(...)` marks highlighted values
- `expr=True` treats the name as an expression to eval at capture time

## 2D Arrays (Array2D)

```python
with array2d('grid').index('r', 'c'):
    breakpoint()
```

## Inheriting a complex binding (reuse watchers)

```python
from visual import array, inherit, breakpoint
with array('arr').index('i', 'j'):
    ...
    with inherit('arr').index('k'):
        breakpoint()  # arr has i, j, k pointers here
    breakpoint()      # arr has i, j pointers here
```

## Tips

- Prefer `expr=False` for performance and safety; use `expr=True` only when needed.
- Names must be strings; missing names raise runtime errors.
- Snapshots are captured at `breakpoint()`; ensure you place breakpoints where you need state.
