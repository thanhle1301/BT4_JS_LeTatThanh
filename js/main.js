//  3. tao array chứa object..
var dssv = [];
const DSSV_LOCAL = "DSSV_LOCAL";
var dataJson = localStorage.setItem(DSSV_LOCAL);
function themSV() {
  var sv = layThongTinNhapVao();
  // 3.1 đẩy lên array dssv
  dssv.push(sv);
  console.log("🚀 - layThongTinNhapVao - dssv:", dssv);

  var dataJson = JSON.stringify(dssv);
  console.log("🚀 - themSV - dataJson:", dataJson);
  localStorage.setItem(DSSV_LOCAL, dataJson);
  renderDSSV(); // nhấn 1 cái sẽ được chạy qua renderDSSV() tạo 1 dòng hiển thị layout
}
