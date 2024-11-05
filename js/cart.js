function chuyenDoiTuongItemGioHangSangHTMLDOM (itemcart)
{   
    /* 
    Mô tả: Chuyển một đối tượng thành HTML
    Input: đối tượng giỏ hàng
    Output: HTML hiển thị item giỏ hàng
    */
    var html ="";
    html = '<div class="gio-hang">\n'+
'        <div class="item-cart">\n'+
'            <div class="anh">\n'+
'                <img src="./images/bacxiu.png"/>\n'+
'            </div>\n'+
'            <div class="ten">Bạc Sỉu</div>\n'+
'            <div class="gia">29.000 đ</div>\n'+
'            <input type="number" class="soluong" value="1">\n'+
'            <div class="tong">29.000 đ</div>\n'+
'            <div class="thaotac"><i class="fa-solid fa-trash"></i></div>\n'+
'        </div>\n'+
'    </div>';
    return html;
}   

function chuyenDanhSachItemGioHangSangHTMLDOM (ListItemCart){
    /* 
    Mô tả: Chuyển một danh sách thành HTML DOM
    Input: Danh sách item giỏ hàng
    Output: HTML hiển thị danh sách item giỏ hàng
    */
    var htmlTong = "";
    for(var i =0; i < ListItemCart.length; i++)
        htmlTong = html + chuyenDanhSachItemGioHangSangHTMLDOM(ListItemCart[i]);
    return htmlTong;
}

function showListProduct (){
    
}