/**
 * Slices a vector
 * @param v - vector to slice
 * @param m - beginning of slice
 * @param n - end of slice, non-inclusive
 * @returns sliced vector
 */
std::vector<int> slice(std::vector<int> const &v, int m, int n) {
   auto first = v.begin() + m;
   auto last = v.begin() + n + 1;
   std::vector<int> vector(first, last);
   return vector;
}
