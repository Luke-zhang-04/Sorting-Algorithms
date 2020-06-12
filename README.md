# Sorting Algorithms
I try programming different sorting algorithms in Python 3, Golang, JavaScript, and C++. Algorithms range from bogo sort to bubble sort to merge sort. I also use tkinter to animate the algorithms with bar graphs.

## How to run
### Python
```bash
python3 . <sortNames>
```
E.g
```bash
python3 . bogoSort bubbleSort
```

### Node JS ###
For all options, run
```bash
node . --help
```
```bash
Options:
  -bs, --bogoSort  Run bogosort algorithm
  -h, --help       display help for command
```
Example:
```bash
node . -bs --bubbleSort
```

### Go ###
```bash
go run <sortName>/main.go
```
```bash
go run bogoSort/main.go
```

### C++ ###
```bash
g++ -o bin <sortName>/main.cpp -std=c++17
./bin
```
```bash
g++ -o bin bogoSort/main.cpp -std=c++17
./bin
```
