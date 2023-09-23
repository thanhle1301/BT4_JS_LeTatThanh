function kiemTraRong(value, idErr) {
  // 6.1 hiển thị ra báo user
  if (value != "") {
    // ko lỗi
    document.getElementById(idErr).innerHTML = "";
    return true;
  } else {
    document.getElementById(idErr).innerHTML = "Vui lòng điền đầy đủ thông tin";
    return false;
  }
}
function kiemTraTrung(value, idErr, dssv, message, key) {
  var index = dssv.findIndex(function (item) {
    return item[key] == value;
  });
  if (index == -1) {
    // ko tìm thấy value nằm trong dssv => hợp lệ
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).innerText = message;
    return false;
  }
}
