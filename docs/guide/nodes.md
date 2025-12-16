# Graph / Nodes Visualization

Use `nodes()` to visualize linked lists, trees, or graphs. You provide small callbacks that describe how to traverse the structure.

Signature (wrapped by `visual.nodes`):

```python
nodes(var,
      head_id=default_head,
      next_ids=default_next,
      value=default_value,
      *,
      expr=False)
```

Defaults assume a simple array-of-next-pointers representation:

- `head_id(nodes) -> id`
- `next_ids(nodes, id) -> id | (id, weight) | list[id] | list[(id, weight)]`
- `value(nodes, id) -> node_value`

## Singly linked list example

```python
from visual import nodes, breakpoint

class Node:
    def __init__(self, val, nxt=None):
        self.val = val
        self.next = nxt

def head_id(lst):
    return lst.head

def next_ids(lst, id):
    node = id
    if node is None:
        return None
    return node.next

def value(lst, id):
    return id.val if id else None

class LinkedList:
    def __init__(self, head):
        self.head = head

n3 = Node(3)
n2 = Node(2, n3)
n1 = Node(1, n2)
ll = LinkedList(n1)

with nodes('ll', head_id, next_ids, value):
    cur = ll.head
    step = 0
    while cur:
        step += 1
        cur = cur.next
        breakpoint()
```

## Weighted graph example

```python
from visual import nodes, breakpoint

graph = {
    'A': [('B', 1), ('C', 3)],
    'B': [('C', 2)],
    'C': []
}

head_id = lambda g: 'A'

def next_ids(g, id):
    return g[id]  # list of (neighbor, weight)

def value(g, id):
    return id

with nodes('graph', head_id, next_ids, value):
    frontier = ['A']
    seen = set()
    while frontier:
        cur = frontier.pop()
        if cur in seen:
            continue
        seen.add(cur)
        for nei, _w in graph[cur]:
            frontier.append(nei)
        breakpoint()
```

Tips:

- IDs can be int or str; for complex IDs, use `repr`/`eval` pair to serialize.
- `expr=True` if `var` is an expression (e.g., `graphs[i]`).
- Combine with `inherit` if you build layered node views.
