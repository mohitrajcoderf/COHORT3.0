#include <iostream>
#include <queue>
#include <unordered_set>
#include <vector>

using namespace std;

int FIFOPageReplacement(vector<int>& pages, int frameSize) {
    unordered_set<int> frames;   // Set to store the current pages in memory
    queue<int> indexQueue;       // Queue to track the order of pages for FIFO
    int pageFaults = 0;

    for (int page : pages) {
        // If the page is not in memory (Page Fault)
        if (frames.find(page) == frames.end()) {
            pageFaults++;

            // If memory is full, remove the oldest page
            if (frames.size() == frameSize) {
                int oldestPage = indexQueue.front();  // Get the oldest page
                indexQueue.pop();                    // Remove it from the queue
                frames.erase(oldestPage);            // Remove it from the set
            }

            // Insert the new page
            frames.insert(page);
            indexQueue.push(page);  // Add the new page to the queue
        }
    }

    return pageFaults;
}

int main() {
    int n, frameSize;
    cout << "Enter the number of pages: ";
    cin >> n;

    vector<int> pages(n);
    cout << "Enter the page reference string: ";
    for (int i = 0; i < n; i++) {
        cin >> pages[i];
    }

    cout << "Enter the number of frames: ";
    cin >> frameSize;

    int pageFaults = FIFOPageReplacement(pages, frameSize);
    cout << "Total page faults: " << pageFaults << endl;
}
    return 0;
