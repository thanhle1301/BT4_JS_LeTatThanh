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
  return new SinhVien(ma, ten, matKhau, email, toan, ly, hoa);
  

 
}

function renderDSSV(dssv) {
  //   4. show array lên màn hình
  var contentHTML = "";
  for (var index = 0; index < dssv.length; index++) {
    var sv = dssv[index]; // có để lấy dữ liệu từ sv gán qua từng index của dssv. nếu không sẽ ko hiện lên layout
    var trString = `<tr> 
                            <td>${sv.ma}</td>
                            <td>${sv.ten}</td>
                            <td>${sv.email}</td>
                            <td>${sv.tinhDTB()}</td>

                            <td>
                            <button onclick="xoaSV('${
                              sv.ma
                            }')" class="btn btn-danger">Xóa</button>
                            <button onclick="suaSV('${
                              sv.ma
                            }')" class="btn btn-warning">Sửa</button>
                            
                            </td>
                     </tr>`;
    contentHTML = contentHTML + trString;
  }

  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
