#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;
int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);

    int n;
    std::cin >> n;

    std::vector<std::pair<int, int>> coords;

    for (int i = 0; i < n; ++i) {
        int x, y;
        cin >> x >> y;
        coords.push_back({i+1, abs(x) + abs(y)});
    }

    return 0;
}