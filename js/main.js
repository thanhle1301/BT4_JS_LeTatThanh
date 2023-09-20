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
