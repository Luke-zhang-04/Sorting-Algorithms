run bubble_sort_go:
	go run bubble-sort/bubble_sort.go

build bubble_sort_go:
	go build -o bubble-sortbin bubble-sort/bubble_sort.go
 
clean bubble_sort_go:
	rm bubble-sort/bubble_sortbin

run bubble_sort_js:
	node bubble-Sort/bubble_sort.js

run bubble_sort_py:
	python3 bubble-Sort/bubble_sort.py