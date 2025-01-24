// Biến để lưu trữ URL hiện tại
let currentUrl = null;

// Hàm hiển thị iframe
function showIframe() {
  // Xóa iframe cũ (nếu có)
  const existingIframe = document.getElementById("custom-iframe");
  if (existingIframe) {
    existingIframe.remove();
  }

  // Tạo iframe mới
  const iframe = document.createElement("iframe");
  iframe.id = "custom-iframe";
  iframe.width = "352";
  iframe.height = "288";
  iframe.src = "https://htx.schnworks.com/" + currentUrl.replace(/[^a-zA-Z0-9]+/g, '_');
  iframe.title = "YouTube video player";
  iframe.style.border = '0px'
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;

  // Định vị iframe trên trang
  iframe.style.position = "fixed";
  iframe.style.bottom = "10px";
  iframe.style.right = "10px";
  iframe.style.zIndex = "9999";

  // Thêm iframe vào trang
  document.body.appendChild(iframe);

  // Tự động xóa iframe sau 10 giây (nếu cần)
  // setTimeout(() => {
  //   iframe.remove();
  // }, 10000);
}

// Hàm kiểm tra URL thay đổi
function checkUrlChange() {
  if (currentUrl !== window.location.href) {
    currentUrl = window.location.href; // Cập nhật URL hiện tại
    showIframe(); // Hiển thị iframe mới
  }
}

// Thiết lập interval để kiểm tra URL mỗi 1 giây
setInterval(checkUrlChange, 1000);
