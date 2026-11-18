const topics = {
  'Strings': { color: '#e6a184', background: '#fff0e8', ink: '#ab6648' },
  'Lists & tuples': { color: '#a4c76d', background: '#eef7df', ink: '#718e47' },
  'Dictionaries': { color: '#e1be6f', background: '#fbf3de', ink: '#a0823d' },
  'Heaps': { color: '#a6a4d5', background: '#f0effa', ink: '#7773a9' },
  'Binary search': { color: '#84b9b3', background: '#e9f5f2', ink: '#588c85' },
  'Queues': { color: '#d8a4b4', background: '#faedf1', ink: '#a66e82' },
  'Patterns': { color: '#8faed2', background: '#edf3fa', ink: '#6585a7' },
  'Python basics': { color: '#b3b69f', background: '#f1f2eb', ink: '#81866f' },
  'Functions': { color: '#d3a674', background: '#fbf0e2', ink: '#96693d' },
  'Classes': { color: '#91b5a2', background: '#eaf5ee', ink: '#587e67' },
  'Files': { color: '#d5a28b', background: '#faeee9', ink: '#9b6b55' },
  'Modules': { color: '#91b3c5', background: '#eaf4f8', ink: '#5c7e90' },
  'JSON': { color: '#c4ae7b', background: '#f8f2e3', ink: '#8e7849' },
  'OS & paths': { color: '#a5b484', background: '#f0f5e8', ink: '#718057' },
  'Math': { color: '#b4a1bf', background: '#f5eef8', ink: '#806b8e' },
  'Exceptions': { color: '#d49796', background: '#faeded', ink: '#a46766' }
};

const notes = [
  { id: 'slicing', topic: 'Strings', title: 'String slicing', description: 'Grab a substring or reverse a string without changing the original.', code: 'text = "python"\ntext[1:4]  # "yth"\ntext[::-1] # "nohtyp"', use: 'Substrings & palindromes' },
  { id: 'split-join', topic: 'Strings', title: 'Split & join', description: 'Move between strings and lists when working with words or delimiters.', code: 'words = "one two".split()\n"-".join(words)  # "one-two"', use: 'Parsing input' },
  { id: 'string-methods', topic: 'Strings', title: 'Useful string checks', description: 'Check, clean, and search text with built-in string methods.', code: 'text.strip().lower()\ntext.startswith("py")\ntext.find("on")  # -1 if missing', use: 'Text processing' },
  { id: 'list-operations', topic: 'Lists & tuples', title: 'List essentials', description: 'Build and modify a sequence using the operations you reach for most.', code: 'nums.append(4)\nlast = nums.pop()\nnums.sort()  # sorts in place', use: 'Arrays & stacks' },
  { id: 'comprehensions', topic: 'Lists & tuples', title: 'List comprehensions', description: 'Create a transformed or filtered list in a compact expression.', code: 'squares = [n * n for n in nums\n           if n > 0]', use: 'Transforming data' },
  { id: 'tuples', topic: 'Lists & tuples', title: 'Tuple unpacking', description: 'Keep related values together, then unpack them when you need them.', code: 'point = (3, 5)\nrow, col = point\na, b = b, a', use: 'Coordinates & swapping' },
  { id: 'dict', topic: 'Dictionaries', title: 'Dictionary lookups', description: 'Store values by key and provide a default for missing entries.', code: 'counts = {}\ncounts[value] = counts.get(value, 0) + 1\nfor key, count in counts.items():\n    print(key, count)', use: 'Fast lookups' },
  { id: 'counter', topic: 'Dictionaries', title: 'Count frequencies', description: 'Count hashable values in one step with collections.Counter.', code: 'from collections import Counter\ncounts = Counter([1, 2, 1])\ncounts[1]  # 2', use: 'Frequency problems' },
  { id: 'heap', topic: 'Heaps', title: 'Min heap', description: 'Efficiently access the smallest item as values are added or removed.', code: 'import heapq\nheapq.heapify(nums)\nheapq.heappush(nums, 3)\nsmallest = heapq.heappop(nums)', use: 'Priority queues' },
  { id: 'max-heap', topic: 'Heaps', title: 'Max heap trick', description: 'Negate numeric values to use Python\'s min heap as a max heap.', code: 'import heapq\nheapq.heappush(heap, -value)\nlargest = -heapq.heappop(heap)', use: 'Largest elements' },
  { id: 'bisect', topic: 'Binary search', title: 'Find an insertion point', description: 'Use bisect on sorted data to find the left or right boundary.', code: 'from bisect import bisect_left, bisect_right\nleft = bisect_left(nums, target)\nright = bisect_right(nums, target)', use: 'Sorted arrays' },
  { id: 'deque', topic: 'Queues', title: 'Double-ended queue', description: 'Add and remove elements efficiently at either end of a queue.', code: 'from collections import deque\nqueue = deque([start])\nqueue.append(next_item)\nitem = queue.popleft()', use: 'Breadth-first search' },
  { id: 'two-pointers', topic: 'Patterns', title: 'Two pointers', description: 'Move inward from both ends of a sorted array to find a target sum.', code: 'left, right = 0, len(nums) - 1\nwhile left < right:\n    total = nums[left] + nums[right]\n    if total == target: break\n    if total < target: left += 1\n    else: right -= 1', use: 'Sorted pair problems' },
  { id: 'sliding-window', topic: 'Patterns', title: 'Fixed sliding window', description: 'Update a running sum as a window moves through an array.', code: 'window = sum(nums[:k])\nfor right in range(k, len(nums)):\n    window += nums[right] - nums[right - k]\n    # use window', use: 'Contiguous subarrays' },
  { id: 'enumerate', topic: 'Python basics', title: 'Enumerate & zip', description: 'Loop with indices, or pair items from multiple iterables.', code: 'for index, value in enumerate(nums):\n    print(index, value)\nfor name, score in zip(names, scores):\n    print(name, score)', use: 'Cleaner loops' },
  { id: 'sort-key', topic: 'Python basics', title: 'Sort with a key', description: 'Order items by a chosen property without changing the original list.', code: 'ordered = sorted(items, key=lambda item: item[1])\n# reverse=True sorts descending', use: 'Custom ordering' },
  { id: 'string-basics', topic: 'Strings', title: 'String basics', description: 'Strings are immutable. Index or slice them, concatenate with +, and use len() for their length.', code: 'text = "Py" + "thon"\ntext[0]       # "P"\ntext[1:5:2]   # "yh"\nlen(text)     # 6', use: 'Indexing text' },
  { id: 'string-format', topic: 'Strings', title: 'Formatting & printing', description: 'Use f-strings or format() to insert values. print() accepts a separator.', code: 'number = 5\nf"Number: {number}"\n"{} doubled is {}".format(number, 2 * number)\nprint(3, 5, "cat", sep="&")', use: 'Readable output' },
  { id: 'string-tests', topic: 'Strings', title: 'Character checks', description: 'Check prefixes, suffixes, case, digits, letters, or whitespace.', code: 'text.startswith("py")\ntext.endswith("on")\ntext.isupper()\ntext.islower()\ntext.isdigit()\ntext.isalpha()\ntext.isspace()', use: 'Validating text' },
  { id: 'string-transform', topic: 'Strings', title: 'Clean, find & replace', description: 'strip removes characters at both ends; find returns -1 when missing; replace returns a new string.', code: 'text.strip()\ntext.strip("x")\ntext.find("on", 0, len(text))\ntext.replace("old", "new", 1)\n"a,b,c".split(",", 1)', use: 'Cleaning strings' },
  { id: 'list-edit', topic: 'Lists & tuples', title: 'Edit a list', description: 'Create a list, add or remove items, and check membership. remove deletes the first matching value.', code: 'items = list([1, 2])\nitems.extend([3, 4])\nitems.insert(1, 9)\nitems.remove(9)\nlast = items.pop()\ndel items[0]\n2 in items', use: 'Mutable sequences' },
  { id: 'list-order', topic: 'Lists & tuples', title: 'Ordering & searching lists', description: 'sort and reverse mutate the list; sorted returns a new list and reversed returns an iterator. index raises ValueError when missing.', code: 'nums.sort()\nordered = sorted(nums)\nnums.reverse()\nbackwards = list(reversed(nums))\nlen(nums), min(nums), max(nums)\nnums.count(3), nums.index(3)', use: 'List operations' },
  { id: 'list-copy', topic: 'Lists & tuples', title: 'Shallow & deep copies', description: 'A shallow copy shares nested objects; deepcopy recursively copies them. deepcopy is a function in the copy module, not a list method.', code: 'from copy import deepcopy\noriginal = [[1], [2]]\nshallow = original.copy()\ndeep = deepcopy(original)', use: 'Nested lists' },
  { id: 'tuple-operations', topic: 'Lists & tuples', title: 'Working with tuples', description: 'Tuples are immutable; they can be dictionary keys only when all their contents are hashable.', code: 'pair = tuple([1, 2])\npair[0], pair[1:]\npair + (3,)\npair * 2\n2 in pair\nlen(pair), pair.count(1), pair.index(2)', use: 'Immutable sequences' },
  { id: 'generators', topic: 'Lists & tuples', title: 'Generator expressions', description: 'Parentheses create a generator expression, not a tuple comprehension. Use tuple(...) to materialize a tuple.', code: 'squares = (number ** 2 for number in range(5))\nvalues = tuple(number ** 2 for number in range(5))', use: 'Lazy iteration' },
  { id: 'dict-operations', topic: 'Dictionaries', title: 'Dictionary operations', description: 'keys(), values(), and items() return views. get() defaults to None when no default is supplied.', code: 'data = dict(name="Ada")\ndata["score"] = 10\ndata.update({"score": 12})\n"name" in data\ndata.keys(), data.values(), data.items()\ndata.get("missing")\nscore = data.pop("score")\ndel data["name"]', use: 'Managing mappings' },
  { id: 'dict-comprehension', topic: 'Dictionaries', title: 'Dictionary comprehensions', description: 'Create a dictionary from keys, values, or items, optionally filtering entries.', code: 'squared_keys = {key: key ** 2 for key in data.keys()}\nsquared_values = {key: value ** 2 for key, value in data.items()}\neven = {key: value for key, value in data.items() if value % 2 == 0}', use: 'Transforming mappings' },
  { id: 'counter-common', topic: 'Dictionaries', title: 'Most common values', description: 'Counter counts hashable items; most_common(n) returns the n most frequent value-count pairs.', code: 'from collections import Counter\ncounts = Counter("banana")\ncounts.most_common(2)  # [("a", 3), ("n", 2)]', use: 'Frequency rankings' },
  { id: 'heap-top', topic: 'Heaps', title: 'Largest & smallest items', description: 'heapify builds a min heap in O(n). nlargest and nsmallest select items without sorting the entire input yourself.', code: 'import heapq\nheap = [7, 2, 5]\nheapq.heapify(heap)\nheapq.nlargest(2, heap)\nheapq.nsmallest(2, heap)', use: 'Top-k problems' },
  { id: 'bisect-insert', topic: 'Binary search', title: 'Insert into sorted data', description: 'insort uses binary search to find the position, but inserting into a list takes O(n) time.', code: 'from bisect import insort\nnums = [1, 3, 5]\ninsort(nums, 3)  # [1, 3, 3, 5]', use: 'Maintaining sorted lists' },
  { id: 'deque-ends', topic: 'Queues', title: 'Deque ends & rotation', description: 'Append or pop at either end. Positive rotation moves items right; negative rotation moves them left.', code: 'from collections import deque\nqueue = deque([1, 2, 3])\nqueue.appendleft(0)\nqueue.append(4)\nqueue.popleft()\nqueue.pop()\nqueue.rotate(1)\nqueue.rotate(-1)', use: 'Queues & windows' },
  { id: 'range', topic: 'Python basics', title: 'Ranges', description: 'range produces an immutable sequence of integers; stop is excluded and step may be negative.', code: 'list(range(4))        # [0, 1, 2, 3]\nlist(range(1, 7, 2))  # [1, 3, 5]\nlist(range(3, 0, -1)) # [3, 2, 1]', use: 'Index loops' },
  { id: 'functions', topic: 'Functions', title: 'Define a function', description: 'Use def to define a function, give it parameters, and return a result. pass is a placeholder for an empty body.', code: 'def double(number):\n    return number * 2\n\ndef unfinished():\n    pass', use: 'Reusable logic' },
  { id: 'args-kwargs', topic: 'Functions', title: 'Flexible arguments', description: '*args collects extra positional arguments into a tuple; **kwargs collects extra keyword arguments into a dictionary.', code: 'def describe(*args, **kwargs):\n    print(args)\n    print(kwargs)\n\ndescribe(1, 2, name="Ada")', use: 'Flexible APIs' },
  { id: 'classes', topic: 'Classes', title: 'Classes & instances', description: 'A class defines behavior; __init__ initializes an instance and self refers to that instance.', code: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def describe(self):\n        return f"({self.x}, {self.y})"', use: 'Modeling objects' },
  { id: 'inheritance', topic: 'Classes', title: 'Inheritance & super', description: 'A child class inherits from a parent. super() can call the parent initializer or other inherited methods.', code: 'class NamedPoint(Point):\n    def __init__(self, x, y, name):\n        super().__init__(x, y)\n        self.name = name', use: 'Extending classes' },
  { id: 'dunder', topic: 'Classes', title: 'Special methods', description: '__str__ and __repr__ control string representations; __add__ can define addition between objects.', code: 'class Label:\n    def __init__(self, text):\n        self.text = text\n    def __str__(self):\n        return self.text\n    def __repr__(self):\n        return f"Label({self.text!r})"\n    def __add__(self, other):\n        return Label(self.text + other.text)', use: 'Object behavior' },
  { id: 'comparisons', topic: 'Classes', title: 'Comparison methods', description: '__lt__, __le__, __eq__, __ne__, __gt__, and __ge__ customize comparisons. Sorting and heapq use <; inherited equality behavior depends on the class.', code: 'class Score:\n    def __init__(self, value):\n        self.value = value\n    def __lt__(self, other):\n        return self.value < other.value\n    def __eq__(self, other):\n        return isinstance(other, Score) and self.value == other.value', use: 'Sorting custom objects' },
  { id: 'file-read', topic: 'Files', title: 'Reading files', description: 'Use with to close a file automatically. r reads an existing file; read, readline, and readlines offer different ways to consume it.', code: 'with open("input.txt", "r", encoding="utf-8") as file:\n    content = file.read()\n\nwith open("input.txt", "r", encoding="utf-8") as file:\n    first = file.readline()\n    remaining = file.readlines()', use: 'Reading input' },
  { id: 'file-write', topic: 'Files', title: 'Writing & appending files', description: 'w creates or truncates a file; a appends. A context manager closes it automatically, or call close() when managing it manually.', code: 'with open("output.txt", "w", encoding="utf-8") as file:\n    file.write("Hello\\n")\nwith open("output.txt", "a", encoding="utf-8") as file:\n    file.write("More text\\n")', use: 'Saving output' },
  { id: 'imports', topic: 'Modules', title: 'Imports & packages', description: 'Import modules, aliases, specific names, or package submodules. Relative imports work inside packages; wildcard imports are usually avoided.', code: 'import math\nimport math as maths\nfrom math import sqrt\nfrom package import module\nfrom package.subpackage import module\nfrom . import sibling_module\n# from math import *', use: 'Reusing code' },
  { id: 'main-guard', topic: 'Modules', title: 'The main guard', description: '__name__ is "__main__" when a script runs directly; imported modules use their module name instead.', code: 'def main():\n    print("Running directly")\n\nif __name__ == "__main__":\n    main()', use: 'Reusable scripts' },
  { id: 'sys', topic: 'Modules', title: 'The sys module', description: 'Read command-line arguments and the platform identifier, or exit with a status code.', code: 'import sys\narguments = sys.argv\nplatform = sys.platform\nsys.exit(0)', use: 'Command-line scripts' },
  { id: 'traceback', topic: 'Modules', title: 'Stack traces', description: 'An exception unwinds the call stack until it is handled. traceback.print_stack() prints the current call stack.', code: 'import traceback\n\ndef inspect_stack():\n    traceback.print_stack()\n\ninspect_stack()', use: 'Debugging calls' },
  { id: 'json-strings', topic: 'JSON', title: 'JSON strings', description: 'dumps encodes a Python object as a JSON string; loads parses a JSON string into Python objects.', code: 'import json\nencoded = json.dumps({"score": 10})\ndata = json.loads(encoded)\nprint(data["score"])', use: 'Data exchange' },
  { id: 'json-files', topic: 'JSON', title: 'JSON files', description: 'dump writes JSON to a file; load reads it. indent makes the output easier to read.', code: 'import json\nwith open("data.json", "w", encoding="utf-8") as file:\n    json.dump({"score": 10}, file, indent=2)\nwith open("data.json", "r", encoding="utf-8") as file:\n    data = json.load(file)', use: 'Structured files' },
  { id: 'os-files', topic: 'OS & paths', title: 'Files & directories', description: 'List directory contents, create directories, rename paths, or remove files. makedirs can create parent directories.', code: 'import os\nos.listdir(".")\nos.mkdir("new_folder")\nos.makedirs("parent/child", exist_ok=True)\nos.rename("old.txt", "new.txt")\nos.remove("new.txt")', use: 'File management' },
  { id: 'os-paths', topic: 'OS & paths', title: 'Working with paths', description: 'Join path components and inspect paths using os.path. os.sep gives the platform separator.', code: 'import os\npath = os.path.join("folder", "file.txt")\nos.path.exists(path)\nos.path.isfile(path), os.path.isdir(path)\nos.path.dirname(path), os.path.basename(path)\nos.path.split(path), os.path.splitext(path)\nos.sep', use: 'Portable paths' },
  { id: 'math-constants', topic: 'Math', title: 'Math constants', description: 'The math module provides pi, e, positive infinity, and NaN. Use math.isnan to test for NaN.', code: 'import math\nmath.pi, math.e\nmath.inf, math.nan\nmath.isnan(math.nan)', use: 'Numerical calculations' },
  { id: 'math-powers', topic: 'Math', title: 'Powers & logarithms', description: 'math.pow returns a float, while ** preserves integer results for nonnegative integer powers. log defaults to the natural logarithm.', code: 'import math\nmath.pow(2, 3), 2 ** 3\nmath.sqrt(9), math.exp(1)\nmath.log(8, 2), math.log10(100)', use: 'Numerical calculations' },
  { id: 'math-rounding', topic: 'Math', title: 'Rounding & number theory', description: 'ceil and floor round toward positive and negative infinity; trunc removes the fractional part. factorial requires a nonnegative integer.', code: 'import math\nmath.ceil(2.4), math.floor(2.4)\nmath.trunc(-2.4), math.fabs(-2)\nmath.factorial(5), math.gcd(12, 18)\nmath.isclose(0.1 + 0.2, 0.3)', use: 'Integer & float math' },
  { id: 'math-trig', topic: 'Math', title: 'Trigonometry & distance', description: 'Trigonometric functions take radians. Convert angles with radians and degrees; hypot computes the Euclidean norm.', code: 'import math\nangle = math.radians(30)\nmath.sin(angle), math.cos(angle), math.tan(angle)\nmath.degrees(angle)\nmath.hypot(3, 4)  # 5.0', use: 'Geometry' },
  { id: 'try-except', topic: 'Exceptions', title: 'Handling exceptions', description: 'except handles a matching error, else runs when no exception occurs, and finally runs on exit from the try statement.', code: 'try:\n    value = int("42")\nexcept ValueError as error:\n    print(error)\nelse:\n    print(value)\nfinally:\n    print("Finished")', use: 'Recovering from errors' },
  { id: 'raise', topic: 'Exceptions', title: 'Raise & assert', description: 'Raise an exception explicitly or define a custom exception. Assertions can be disabled, so do not use them for essential input validation.', code: 'class InvalidInputError(Exception):\n    pass\n\nif value < 0:\n    raise InvalidInputError("Must be nonnegative")\nassert value >= 0, "Expected nonnegative value"', use: 'Validation & debugging' },
  { id: 'exception-types', topic: 'Exceptions', title: 'Common exception types', description: 'IndexError: invalid sequence index; KeyError: missing key; TypeError: wrong type; ValueError: invalid value; ZeroDivisionError: division by zero; OSError (including IOError): I/O failures. Exception catches most application errors.', code: 'try:\n    result = 10 / int(input("Divisor: "))\nexcept (ValueError, ZeroDivisionError) as error:\n    print(error)\nexcept Exception as error:\n    print("Unexpected error:", error)', use: 'Choosing what to catch' }
];

const grid = document.querySelector('#notes-grid');
const search = document.querySelector('#search');
const filter = document.querySelector('#topic-filter');
const topicNav = document.querySelector('#topic-nav');
const emptyState = document.querySelector('#empty-state');
let view = 'all';
let saved = [];
try { saved = JSON.parse(localStorage.getItem('pynotes-saved') || '[]'); if (!Array.isArray(saved)) saved = []; } catch { saved = []; }

function renderIcons() { if (window.lucide) window.lucide.createIcons(); }
function escapeHtml(value) { return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]); }
function renderTopics() {
  topicNav.innerHTML = Object.entries(topics).map(([name, style]) => `<button class="topic-item ${filter.value === name && view === 'all' ? 'active' : ''}" data-topic="${escapeHtml(name)}"><span class="topic-dot" style="--topic-color:${style.color}"></span>${escapeHtml(name)}<span class="topic-count">${notes.filter(note => note.topic === name).length}</span></button>`).join('');
}
function render() {
  const query = search.value.trim().toLowerCase();
  const visible = notes.filter(note => (view !== 'saved' || saved.includes(note.id)) && (filter.value === 'all' || note.topic === filter.value) && [note.title, note.topic, note.description, note.code, note.use].some(value => value.toLowerCase().includes(query)));
  grid.innerHTML = visible.map(note => {
    const style = topics[note.topic];
    const isSaved = saved.includes(note.id);
    return `<article class="note-card"><div class="card-body"><div class="card-top"><span class="tag" style="--tag-bg:${style.background};--tag-ink:${style.ink}">${escapeHtml(note.topic)}</span><button class="save-button ${isSaved ? 'saved' : ''}" data-save="${note.id}" aria-label="${isSaved ? 'Remove ' : 'Save '}${escapeHtml(note.title)}" aria-pressed="${isSaved}" title="${isSaved ? 'Remove from saved' : 'Save note'}"><i data-lucide="bookmark"></i></button></div><h3 class="card-title">${escapeHtml(note.title)}</h3><p class="card-description">${escapeHtml(note.description)}</p><div class="code-wrap"><pre><code>${escapeHtml(note.code)}</code></pre><button class="copy-button" data-copy="${note.id}" aria-label="Copy ${escapeHtml(note.title)} example" title="Copy example"><i data-lucide="copy"></i></button></div></div><div class="card-footer"><span>GOOD FOR <strong>${escapeHtml(note.use)}</strong></span><span>&#8599;</span></div></article>`;
  }).join('');
  document.querySelector('#result-count').textContent = `SHOWING ${visible.length} ${visible.length === 1 ? 'NOTE' : 'NOTES'}`;
  document.querySelector('#saved-count').textContent = saved.length;
  document.querySelector('#total-count').textContent = String(notes.length).padStart(2, '0');
  document.querySelector('#library-title').innerHTML = `${view === 'saved' ? 'Saved notes' : 'Explore the library'}<span class="heading-period">.</span>`;
  document.querySelector('#library-description').textContent = view === 'saved' ? 'Your go-to notes, all in one place.' : 'A handy collection for your next problem.';
  document.querySelector('#breadcrumb-current').textContent = view === 'saved' ? 'SAVED NOTES' : 'EXPLORE';
  document.querySelector('#empty-message').textContent = view === 'saved' && !saved.length ? 'Save a note to keep it close for later.' : 'Try another search or topic.';
  emptyState.hidden = visible.length > 0;
  document.querySelectorAll('.nav-item').forEach(button => button.classList.toggle('active', button.dataset.view === view));
  renderTopics();
  renderIcons();
}
Object.keys(topics).forEach(topic => { const option = document.createElement('option'); option.value = topic; option.textContent = topic; filter.append(option); });
search.addEventListener('input', render);
filter.addEventListener('change', render);
document.querySelector('.main-nav').addEventListener('click', event => { const button = event.target.closest('[data-view]'); if (!button) return; view = button.dataset.view; search.value = ''; filter.value = 'all'; render(); });
topicNav.addEventListener('click', event => { const button = event.target.closest('[data-topic]'); if (!button) return; view = 'all'; filter.value = button.dataset.topic; search.value = ''; render(); document.querySelector('.library').scrollIntoView({ behavior: 'smooth' }); });
document.querySelector('#clear-filters').addEventListener('click', () => { view = 'all'; search.value = ''; filter.value = 'all'; render(); });
let toastTimer;
function notify(message) { const toast = document.querySelector('#toast'); toast.textContent = message; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 2200); }
grid.addEventListener('click', async event => {
  const saveButton = event.target.closest('[data-save]');
  const copyButton = event.target.closest('[data-copy]');
  if (saveButton) {
    const id = saveButton.dataset.save;
    saved = saved.includes(id) ? saved.filter(item => item !== id) : [...saved, id];
    try { localStorage.setItem('pynotes-saved', JSON.stringify(saved)); } catch { notify('Saved for this session only'); }
    render();
  }
  if (copyButton) {
    const code = notes.find(note => note.id === copyButton.dataset.copy).code;
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(code);
      else { const input = document.createElement('textarea'); input.value = code; input.style.position = 'fixed'; input.style.opacity = '0'; document.body.append(input); input.select(); const copied = document.execCommand('copy'); input.remove(); if (!copied) throw new Error('Copy failed'); }
      notify('Example copied');
    } catch { notify('Copy unavailable. Select the code to copy it.'); }
  }
});
render();