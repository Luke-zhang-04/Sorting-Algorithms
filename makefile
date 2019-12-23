run bubble_sort_go:
	go run bubble-sort/bubble-sort.go

build bubble_sort_go:
	go build -o bubble-sortbin bubble-sort/bubble-sort.go
 
clean bubble_sort_go:
	rm bubble-sort/bubble-sortbin

run bubble_sort_js:
	node bubble-sort/bubble-sort.js

run bubble_sort_py:
	python3 bubble-sort/bubble-sort.py

run insertion_sort_go:
	go run insertion-sort/insertion-sort.go

build insertion_sort_go:
	go build -o insertion-sortbin insertion-sort/insertion-sort.go

clean insertion_sort_go:
	rm insertion-sort/insertion-sortbin