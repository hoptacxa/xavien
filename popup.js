// Hàm chạy ngay khi popup mở
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
        const currentTab = tabs[0];
        const url = currentTab.url; // URL của tab hiện tại
        document.getElementById("urlDisplay").textContent = url;
    } else {
        document.getElementById("urlDisplay").textContent = "No active tab found!";
    }
});
