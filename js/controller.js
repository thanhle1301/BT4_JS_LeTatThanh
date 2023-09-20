//  1.lấy thông tin
function layThongTinNhapVao() {
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var toan = document.getElementById("txtDiemToan").value * 1;
  var ly = document.getElementById("txtDiemLy").value * 1;
  var hoa = document.getElementById("txtDiemHoa").value * 1;
  //    2.tạo object
  var sv = {
    ma: ma,
    ten: ten,
    email: email,
    matKhau: matKhau,
    toan: toan,
    ly: ly,
    hoa: hoa,
    tinhDTB: function () {
      var dtb = (this.toan + this.ly + this.hoa) / 3;
      return dtb;
    },
  };
  console.log("🚀 - layThongTinNhapVao - sv:", sv);

  return sv;
}

function renderDSSV() {
  //   4. show array lên màn hình
  var contentHTML = "";
  for (var index = 0; index < dssv.length; index++) {
    var sv = dssv[index]; // có để lấy dữ liệu từ sv gán qua từng index của dssv. nếu không sẽ ko hiện lên layout
    var trString = `<tr> 
                            <td>${sv.ma}/td>
                            <td>${sv.ten}/td>
                            <td>${sv.email}/td>
                            <td>0</td>
                     </tr>`;
    contentHTML = contentHTML + trString;
  }
  console.log("🚀 - layThongTinNhapVao - contentHTML:", contentHTML);
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
