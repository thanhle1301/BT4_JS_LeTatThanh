//  3. tao array chứa object..
var dssv = [];
// 4.1 lấy dữ liệu ra + chuyển về lại array
const DSSV_LOCAL = "DSSV_LOCAL";
var dataJson = localStorage.getItem(DSSV_LOCAL);
// chuyển dữ liệu convert =>array nếu ko có dữ liệu để ko mất dữ liệu cũ đã lưu
if (dataJson != null) {
  dssv = JSON.parse(dataJson);
}
renderDSSV();
function themSV() {
  var sv = layThongTinNhapVao();
  // 3.1 đẩy lên array dssv
  dssv.push(sv);
  console.log("🚀 - layThongTinNhapVao - dssv:", dssv);
  //  4.  convert sang dataJson + lưu vào localStorage
  var dataJson = JSON.stringify(dssv);

  localStorage.setItem(DSSV_LOCAL, dataJson);
  renderDSSV(dssv); // nhấn 1 cái sẽ được chạy qua renderDSSV() tạo 1 dòng hiển thị layout
}

// 5. xóa
function xoaSV(id) {
  var index;
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].ma == id) {
      index = i;
    }
  }
  dssv.splice(index, 1); // xóa phần tử tại vị trí index
  renderDSSV(dssv); // renderDSSV lại
}

function suaSV(id) {
  var index = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  console.log("🚀 - index - index:", index);
  var sv = dssv[index];
  // hiển thị lên form
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemLy").value = sv.ly;
  document.getElementById("txtDiemHoa").value = sv.hoa;
}
