all:bin

#Move all of these to own object files if you really want
bin: main.cpp bogoSort/main.cpp bubbleSort/main.cpp cocktailShakerSort/main.cpp combSort/main.cpp countingSort/main.cpp gnomeSort/main.cpp insertionSort/main.cpp utils/max.cpp utils/utils.cpp
	g++ main.cpp\
		bogoSort/main.cpp\
		bubbleSort/main.cpp\
		cocktailShakerSort/main.cpp\
		combSort/main.cpp\
		countingSort/main.cpp\
		gnomeSort/main.cpp\
		insertionSort/main.cpp\
		utils/*.cpp\
		-o bin -O3 -std=c++11