# Common Patterns

## Accumulation over an array

```python
from visual import var, array, breakpoint

nums = [3, 1, 4]
ans = 0

with var('i', 'ans'):
    with array('nums').index('i'):
        for i, x in enumerate(nums):
            ans += x
            breakpoint()
```

## 2D traversal

```python
from visual import array2d, breakpoint

grid = [[1,2],[3,4]]
with array2d('grid').index('r', 'c'):
    for r, row in enumerate(grid):
        for c, v in enumerate(row):
            breakpoint()
```

## Linked list walk

```python
from visual import nodes, breakpoint

class Node:
    def __init__(self, val, nxt=None):
        self.val = val
        self.next = nxt

def head_id(lst):
    return lst.head

def next_ids(lst, id):
    if id is None:
        return None
    return id.next

def value(lst, id):
    return id.val if id else None

n3 = Node(3)
n2 = Node(2, n3)
n1 = Node(1, n2)
class LinkedList:
    def __init__(self, head):
        self.head = head
ll = LinkedList(n1)

with nodes('ll', head_id, next_ids, value):
    cur = ll.head
    while cur:
        cur = cur.next
        breakpoint()
```

## Weighted graph BFS

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

## Reusing bindings with inherit

```python
from visual import array, inherit, breakpoint

arr = [5, 2, 9]
with array('arr').index('i'):
    for i in range(len(arr)):
        with inherit('arr').index('j'):
            j = len(arr) - 1 - i
            breakpoint()
        breakpoint()
```
