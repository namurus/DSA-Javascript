#include <iostream>
#include <vector>
#include <algorithm> 

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    int x;
    cin >> n >> x;

    vector<int> coins(n);
    for (int i = 0; i < n; ++i) {
        cin >> coins[i];
    }

    int INF = 1e9 + 7;

    vector<int> dp(x + 1, INF);

    dp[0] = 0;

    for(int i = 1; i < x; i++)
    {

    }

    return 0;
}