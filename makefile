run bubble_sort_go:
	go run bubble-sort/bubble_sort.go

build bubble_sort:
	go build -o bubble-sortbin bubble-sort/bubble_sort.go
 
clean bubble_sort:
	rm bubble-sort/bubble_sortbin

