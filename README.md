# Sorting Algorithms
A collection of sorting algorithms in Python 3, Golang, JavaScript, and C++. Algorithms range from bogo sort to bubble sort to merge sort. I also use tkinter to animate the algorithms with bar graphs.

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
  -bogo, --bogoSort                Run bogo sort algorithm
  -bubble, --bubbleSort            Run bubble sort algorithm
  -cocktail, --cocktailShakerSort  Run cocktail shaker sort algorithm
  -comb, --combSort                Run comb sort algorithm
  -h, --help                       display help for command
```
Example:
```bash
node . -bogo --bubbleSort
```

### Go ###
#### Run directly
```bash
go run main.go <sortnames>
```
```bash
go run main.go bogo bubbleSort
```
#### Compile first ####
##### Build/compile #####
```bash
go build main.go
```
##### Run/execute #####
```bash
./main <sortnames>
```
E.g
```bash
go build main.go
./main bogo bubbleSort
```

### C++ ###
#### Build/compile ####
```bash
g++ -o <executableName> main.cpp -std=c++17
```
#### Run/execute ####
```bash
./<executableName> <sortnames>
```
```bash
./<executableName> bogo bubbleSort
```
E.g
```bash
g++ -o bin main.cpp -std=c++17
./bin bogo bubbleSort
```
