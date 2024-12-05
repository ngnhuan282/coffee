// const PHIVANCHUYEN = 30000;
// let priceFinal = document.getElementById("checkout-cart-price-final");



// let interval;
// // Trang thanh toan
// function thanhtoanpage(option,product) {
//     // Xu ly ngay nhan hang
//     let currentUser = JSON.parse(localStorage.getItem('currentuser'));
//     console.log(currentUser);
//     document.getElementById('diachinhan').value = currentUser.address;
//     let today = new Date();
//     let ngaymai = new Date();
//     let ngaykia = new Date();
//     ngaymai.setDate(today.getDate() + 1);
//     ngaykia.setDate(today.getDate() + 2);
//     let dateorderhtml = `<a href="javascript:;" class="pick-date active" data-date="${today}">
//         <span class="text">Hôm nay</span>
//         <span class="date">${today.getDate()}/${today.getMonth() + 1}</span>
//         </a>
//         <a href="javascript:;" class="pick-date" data-date="${ngaymai}">
//             <span class="text">Ngày mai</span>
//             <span class="date">${ngaymai.getDate()}/${ngaymai.getMonth() + 1}</span>
//         </a>

//         <a href="javascript:;" class="pick-date" data-date="${ngaykia}">
//             <span class="text">Ngày kia</span>
//             <span class="date">${ngaykia.getDate()}/${ngaykia.getMonth() + 1}</span>
//     </a>`
//     document.querySelector('.date-order').innerHTML = dateorderhtml;
//     let pickdate = document.getElementsByClassName('pick-date')
//     for(let i = 0; i < pickdate.length; i++) {
//         pickdate[i].onclick = function () {
//             document.querySelector(".pick-date.active").classList.remove("active");
//             this.classList.add('active');
//         }
//     }

//     let totalBillOrder = document.querySelector('.total-bill-order');
//     let totalBillOrderHtml;
//     // Xu ly don hang
//     switch (option) {
//         case 1: // Truong hop thanh toan san pham trong gio
//             // Hien thi don hang
//             showProductCart();
//             // Tinh tien
//             totalBillOrderHtml = `<div class="priceFlx">
//             <div class="text">
//                 Tiền hàng 
//                 <span class="count">${getAmountCart()} món</span>
//             </div>
//             <div class="price-detail">
//                 <span id="checkout-cart-total">${vnd(getCartTotal())}</span>
//             </div>
//         </div>
//         <div class="priceFlx chk-ship">
//             <div class="text">Phí vận chuyển</div>
//             <div class="price-detail chk-free-ship">
//                 <span>${vnd(PHIVANCHUYEN)}</span>
//             </div>
//         </div>`;
//             // Tong tien
//             priceFinal.innerText = vnd(getCartTotal() + PHIVANCHUYEN);
//             break;
//         case 2: // Truong hop mua ngay
//             // Hien thi san pham
//             showProductBuyNow(product);
//             // Tinh tien
//             totalBillOrderHtml = `<div class="priceFlx">
//                 <div class="text">
//                     Tiền hàng 
//                     <span class="count">${product.soluong} món</span>
//                 </div>
//                 <div class="price-detail">
//                     <span id="checkout-cart-total">${vnd(product.soluong * product.price)}</span>
//                 </div>
//             </div>
//             <div class="priceFlx chk-ship">
//                 <div class="text">Phí vận chuyển</div>
//                 <div class="price-detail chk-free-ship">
//                     <span>${vnd(PHIVANCHUYEN)}</span>
//                 </div>
//             </div>`
//             // Tong tien
//             priceFinal.innerText = vnd((product.soluong * product.price) + PHIVANCHUYEN);
//             break;
//     }

//     // Tinh tien
//     totalBillOrder.innerHTML = totalBillOrderHtml;

//     // Xu ly hinh thuc giao hang
//     let giaotannoi = document.querySelector('#giaotannoi');
//     let tudenlay = document.querySelector('#tudenlay');
//     let tudenlayGroup = document.querySelector('#tudenlay-group');
//     let chkShip = document.querySelectorAll(".chk-ship");
    
//     let totalPrice = 0;

//     tudenlay.addEventListener('click', () => {
//         tudenlay.classList.add("active");
//         document.getElementById('dathang').style.display = 'block';
//         giaotannoi.classList.remove("active");
//         chkShip.forEach(item => {
//             item.style.display = "none";
//         });
//         tudenlayGroup.style.display = "block";
//         switch (option) {
//             case 1:
//                 let totalprice = getCartTotal();
//                 priceFinal.innerText = vnd(getCartTotal());
//                 totalPrice = totalprice;
//                 break;
//             case 2:
//                 let total = (product.soluong * product.price);
//                 priceFinal.innerText = vnd((product.soluong * product.price));
//                 totalPrice = total;
//                 break;
//         }
//     });

//     giaotannoi.addEventListener('click', () => {
//         giaotannoi.classList.add("active");
//         document.getElementById('dathang').style.display = 'block';
//         tudenlay.classList.remove("active");
//         tudenlayGroup.style.display = "none";
//         chkShip.forEach(item => {
//             item.style.display = "flex";
//         });
//         switch (option) {
//             case 1:
//                 let totalprice =  getCartTotal() + PHIVANCHUYEN;
//                 priceFinal.innerText = vnd(getCartTotal() + PHIVANCHUYEN);
//                 totalPrice = totalprice;
//                 break;
//             case 2:
//                 let total = (product.soluong * product.price) + PHIVANCHUYEN;
//                 priceFinal.innerText = vnd((product.soluong * product.price) + PHIVANCHUYEN);
//                 totalPrice = total;
//                 break;
//         }
//     });
//     // Su kien khu nhan nut dat hang
//     document.querySelector(".complete-checkout-btn").addEventListener('click', function(e){
//         e.preventDefault();
//         if(document.querySelector(".banking-page").classList.contains('active'))
//             document.querySelector(".banking-page").classList.remove('active');
//         let giaoTanNoi = document.querySelector("#giaotannoi");
//         let tuDenLay = document.querySelector("#tudenlay");
//         let tenNguoiNhan = document.getElementById('tennguoinhan').value;
//         let diaChiNhan = document.getElementById('diachinhan').value;
//         let sdtNhan = document.getElementById('sdtnhan').value;
//         let radios = document.querySelectorAll('.radio');
//         let isChecked = false;
//         const error = document.getElementById('error');
//         radios.forEach(radio => {
//             if(radio.checked)
//                 isChecked = true;
//         });
//         if((tenNguoiNhan == "" || diaChiNhan == "" || sdtNhan =="" || isChecked == false) && giaoTanNoi.classList.contains('active') == true){
//             error.innerHTML = `Vui lòng nhập đầy đủ thông tin`;
//             document.getElementById('thanhtoan').style.display = 'none';
//             isChecked = false;
//         }
//         else if((tenNguoiNhan == "" || sdtNhan =="" || isChecked == false) && tuDenLay.classList.contains('active') == true){
//             error.innerHTML = `Vui lòng nhập đầy đủ thông tin`;
//             document.getElementById('thanhtoan').style.display = 'none';
//             isChecked = false;
//         }
//         else{
//             error.innerHTML = "";
//             document.getElementById('thanhtoan').style.display = 'block';
//             document.getElementById('cod').addEventListener('click', function(e){
//                 e.preventDefault();
//                 switch (option) {
//                     case 1:
//                         xulyDathang();
//                         break;
//                     case 2:
//                         xulyDathang(product);
//                         break;
//                 }
//             });
//             document.getElementById('banking').addEventListener('click', function(e){
//                 e.preventDefault();
//                 this.classList.add(".active");
//                 document.getElementById("numberCard").addEventListener('focus', function(e){
//                     this.placeholder = "1111 111 111 1111";
//                 });
//                 document.getElementById("numberCard").addEventListener('blur', function(e){
//                     this.placeholder = "Nhập số thẻ";
//                 });

//                 document.getElementById("ccv").addEventListener('focus', function(e){
//                     this.placeholder = "123";
//                 });
//                 document.getElementById("ccv").addEventListener('blur', function(e){
//                     this.placeholder = "CCV";
//                 });

//                 document.getElementById("expiryDate").addEventListener('focus', function(e){
//                     this.placeholder = "MM/yy";
//                 });
//                 document.getElementById("expiryDate").addEventListener('blur', function(e){
//                     this.placeholder = "Ngày hết hạn";
//                 });

//                 document.getElementById("cardholderName").addEventListener('focus', function(e){
//                     this.placeholder = "Huynh Anh Nhut";
//                 });
//                 document.getElementById("cardholderName").addEventListener('blur', function(e){
//                     this.placeholder = "Tên chủ thẻ";
//                 });
                
                
//                 document.getElementById("numberCard").addEventListener('input', function(e){
//                     let input = e.target;
//                     let value = input.value.replace(/\D/g, '');
//                     if(value.length > 16){
//                         value = value.substring(0, 16);
//                     }
//                     let formattedValue = value.replace(/(.{4})(?=.)/g, '$1 ');
//                     input.value = formattedValue;
//                 });

//                 document.getElementById('expiryDate').addEventListener('input', function(e){
//                     let input = e.target;
//                     let value = input.value.replace(/\D/g, '');
//                     if(value.length > 4){
//                         value = value.substring(0, 4);
//                     }
//                     let formattedValue = value.replace(/(.{2})(?=.)/g, '$1/');
//                     input.value = formattedValue;
//                 });
//                 document.getElementById('ccv').addEventListener('input', function(e){
//                     let input = e.target;
//                     let value = input.value.replace(/\D/g, '');
//                     if(value.length > 3){
//                         value = value.substring(0,3);
//                     }
//                     input.value = value;
//                 });
//                 document.getElementById('cardholderName').addEventListener('input', function(e){
//                     let input = e.target;
//                     let value = input.value.replace(/[^a-zA-Z\s]/g, '');
//                     input.value = value;
//                 })

//                 document.getElementById('xacthuc').addEventListener("click", function(e){
//                     e.preventDefault();
//                     let numberCard = document.getElementById('numberCard').value;
//                     let expiryDate = document.getElementById('expiryDate').value;
//                     let cardholderName = document.getElementById('cardholderName').value;
//                     let ccv = document.getElementById('ccv').value;

//                     if(numberCard && expiryDate && cardholderName && ccv){
//                         let errorCard = document.getElementById('errorCard');
//                         let errorDate = document.getElementById('errorDate');
//                         let errorCCV = document.getElementById('errorCCV');
//                         let ok = true;
//                         if(numberCard.length < 19){
//                            errorCard.innerText = "Số thể không hợp lệ";
//                            ok = false;
//                         }
//                         else{
//                             errorCard.innerText = "";
//                             ok = true;
//                         }
//                         if(ccv.length < 3){
//                                errorCCV.innerText = "CCV không hợp lệ";
//                                ok = false;
//                         }
//                         else{
//                             errorCCV.innerText = "";
//                             ok = true;
//                         }
//                         if(expiryDate.length < 5){
//                             errorDate.innerText = "Ngày hết hạn không hợp lệ";
//                             ok = false;
//                         }
//                         else{
//                             errorDate.innerText = "";
//                             ok = true;
//                         }
//                             const checkExpiryDate = (expiryDate) => {
//                                 const [month, year] = expiryDate.split("/");
//                                 const currentYear = new Date().getFullYear();
//                                 const currentMonth = new Date().getMonth() + 1; 
                                
//                                 const expiryMonth = parseInt(month, 10);
//                                 let expiryYear = parseInt("20" + year, 10); 
//                                 if(expiryMonth > 12)
//                                     return {valid: false, message: "Tháng hết hạn không hợp lệ"};
//                                 if (expiryYear < currentYear) {
//                                     return {valid: false, message: "Năm hết hạn không nhỏ hơn năm hiện tại"};
//                                 }
//                                 if (expiryYear === currentYear && expiryMonth < currentMonth) {
//                                     return {valid: false, message: "Tháng hết hạn không nhỏ hơn tháng hiện tại"};
//                                 }
                            
//                                 return {valid: true , message: "Thành công"};
//                             };
//                             const result = checkExpiryDate(expiryDate);
//                             if(!result.valid){
//                                 errorDate.innerText = result.message;
//                                 ok = false;
//                             }
//                             else{
//                                 ok = true;
//                             }
//                             if(ok){
//                                 switch (option) {
//                                     case 1:
//                                         xulyDathang();
//                                         break;
//                                     case 2:
//                                         xulyDathang(product);
//                                         break;
//                                 }
//                             }
//                     }
//                     else 
//                         alert("Thanh toán thất bại !!! ");
//                 });

//                 const bankingpage = document.querySelector('.banking-page');
//                 bankingpage.classList.add('active');
//                 checkoutpage.classList.remove('active');
//                 const renderOrderContent = document.querySelector('.banking-content');
//                 const lastContent = `LucyBanking${Math.ceil(Math.random()*100000000)}`;
//                 let ordercontentHTML = "";
//                     ordercontentHTML += `
//                     <img src="https://img.vietqr.io/image/MB-0926213561-qr_only.png?amount=${totalPrice}&addInfo=${lastContent}">
//                     <p>Nội dung chuyển khoản: ${lastContent}</p>
//                     <p>Số tiền: ${vnd(totalPrice)} </p>`;
//                     renderOrderContent.innerHTML = ordercontentHTML;
//                     setTimeout(() => {
//                         interval = setInterval(() => {
//                             checkPaid(totalPrice, lastContent, option, product);
//                         }, 3000);
//                     }, 20000);
//             });
            
//         }
//     });
// } 

// async function checkPaid(totalPrice, lastContent, option, product) {
//     try {

//         const reponse = await fetch("https://script.google.com/macros/s/AKfycby09GbKlnV30fo0OMUJnXx6T8I1sJgcG31CuZsNoXGmkTWAzU8H9T0HLduPluh_18yCBw/exec");
//         const data = await reponse.json();
//         const lastPaid = data.data[data.data.length - 1];
//         if(lastPaid["Giá trị"] >= totalPrice && lastPaid["Mô tả"].includes(lastContent)){
//             clearInterval(interval);
//             switch(option) {
//                 case 1:
//                     xulyDathang();
//                 case 2:
//                     xulyDathang(product);
//             }
//         }
//         else
//             console.log("Giao dịch không thành công");
//     }
//     catch{
//         console.error("loiii");
//     }
// }



// // Hien thi hang trong gio
// function showProductCart() {
//     let currentuser = JSON.parse(localStorage.getItem('currentuser'));
//     let listOrder = document.getElementById("list-order-checkout");
//     let listOrderHtml = '';
//     currentuser.cart.forEach(item => {
//         let product = getProduct(item);
//         listOrderHtml += `<div class="food-total">
//         <div class="count">${product.soluong}x</div>
//         <div class="info-food">
//             <div class="name-food">${product.title}</div>
//         </div>
//     </div>`
//     })
//     listOrder.innerHTML = listOrderHtml;
// }

// // Hien thi hang mua ngay
// function showProductBuyNow(product) {
//     let listOrder = document.getElementById("list-order-checkout");
//     let listOrderHtml = `<div class="food-total">
//         <div class="count">${product.soluong}x</div>
//         <div class="info-food">
//             <div class="name-food">${product.title}</div>
//         </div>
//     </div>`;
//     listOrder.innerHTML = listOrderHtml;
// }

// //Open Page Checkout
// let nutthanhtoan = document.querySelector('.thanh-toan')
// let checkoutpage = document.querySelector('.checkout-page');
// let bankingpage = document.querySelector('banking-page');
// nutthanhtoan.addEventListener('click', () => {
//     checkoutpage.classList.add('active');
//     thanhtoanpage(1);   
//     closeCart();
//     body.style.overflow = "hidden"
// })

// // Đặt hàng ngay
// function dathangngay() {
//     let productInfo = document.getElementById("product-detail-content");
//     let datHangNgayBtn = productInfo.querySelector(".button-dathangngay");
//     datHangNgayBtn.onclick = () => {
//         if(localStorage.getItem('currentuser')) {
//             let productId = datHangNgayBtn.getAttribute("data-product");
//             let soluong = parseInt(productInfo.querySelector(".buttons_added .input-qty").value);
//             let notevalue = productInfo.querySelector("#popup-detail-note").value;
//             let ghichu = notevalue == "" ? "Không có ghi chú" : notevalue;
//             let products = JSON.parse(localStorage.getItem('products'));
//             let a = products.find(item => item.id == productId);
//             a.soluong = parseInt(soluong);
//             a.note = ghichu;
//             checkoutpage.classList.add('active');
//             thanhtoanpage(2,a);
//             closeCart();
//             body.style.overflow = "hidden"
//         } else {
//             toast({ title: 'Warning', message: 'Chưa đăng nhập tài khoản !', type: 'warning', duration: 3000 });
//         }
//     }
// }

// // Close Page Checkout
// function closecheckout() {
//     checkoutpage.classList.remove('active');
//     body.style.overflow = "auto"
// }

// // Thong tin cac don hang da mua - Xu ly khi nhan nut dat hang
// function xulyDathang(product) {
//     let currentUser = JSON.parse(localStorage.getItem('currentuser'));
//     document.getElementById('diachinhan').value = currentUser.address;
//     let diachinhan = "";
//     let hinhthucgiao = "";
//     let thoigiangiao = "";
//     let phuongthucthanhtoan = "";
//     let giaotannoi = document.querySelector("#giaotannoi");
//     let tudenlay = document.querySelector("#tudenlay");
//     let giaongay = document.querySelector("#giaongay");
//     let giaovaogio = document.querySelector("#deliverytime");
//     let hinhthucthanhtoan = document.querySelector(".banking-page");
//     // Hinh thuc giao & Dia chi nhan hang
//     if(giaotannoi.classList.contains("active")) {
//         diachinhan = document.querySelector("#diachinhan").value;
//         hinhthucgiao = giaotannoi.innerText;
//     }
//     if(tudenlay.classList.contains("active")){
//         let chinhanh1 = document.querySelector("#chinhanh-1");
//         let chinhanh2 = document.querySelector("#chinhanh-2");
//         if(chinhanh1.checked) {
//             diachinhan = "273 An Dương Vương, Phường 3, Quận 5";
//         }
//         if(chinhanh2.checked) {
//             diachinhan = "04 Tôn Đức Thắng, Phường Bến Nghé, Quận 1";
//         }
//         hinhthucgiao = tudenlay.innerText;
//     }

//     if(hinhthucthanhtoan.classList.contains("active")){
//         phuongthucthanhtoan = "Chuyển khoản";
//     }
//     else
//         phuongthucthanhtoan = "Thanh toán sau khi nhận hàng";
//     // Thoi gian nhan hang
//     if(giaongay.checked) {
//         thoigiangiao = "Giao ngay khi xong";
//     }

//     if(giaovaogio.checked) {
//         thoigiangiao = document.querySelector(".choise-time").value;
//     }

//     let orderDetails = localStorage.getItem("orderDetails") ? JSON.parse(localStorage.getItem("orderDetails")) : [];
//     let order = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
//     let madon = createId(order);
//     let tongtien = 0;
//     if(product == undefined) {
//         currentUser.cart.forEach(item => {
//             item.madon = madon;
//             item.price = getpriceProduct(item.id);
//             tongtien += item.price * item.soluong;
//             orderDetails.push(item);
//         });
//     } else {
//         product.madon = madon;
//         product.price = getpriceProduct(product.id);
//         tongtien += product.price * product.soluong;
//         orderDetails.push(product);
//     }   
    
//     let tennguoinhan = document.querySelector("#tennguoinhan").value;
//     let sdtnhan = document.querySelector("#sdtnhan").value

//     if(tennguoinhan == "" || sdtnhan == "" || diachinhan == "") {
//        alert("vui lòng nhập thông tin đầy đủ !!!");
//     } else {
//         let donhang = {
//             id: madon,
//             khachhang: currentUser.phone,
//             hinhthucgiao: hinhthucgiao,
//             phuongthucthanhtoan: phuongthucthanhtoan,
//             ngaygiaohang: document.querySelector(".pick-date.active").getAttribute("data-date"),
//             thoigiangiao: thoigiangiao,
//             ghichu: document.querySelector(".note-order").value,
//             tenguoinhan: tennguoinhan,
//             sdtnhan: sdtnhan,
//             diachinhan: diachinhan,
//             thoigiandat: new Date(),
//             tongtien:tongtien,
//             trangthai: 0
//         }
    
//         order.unshift(donhang);
//         if(product == null) {
//             currentUser.cart.length = 0;
//         }
    
//         localStorage.setItem("order",JSON.stringify(order));
//         localStorage.setItem("currentuser",JSON.stringify(currentUser));
//         localStorage.setItem("orderDetails",JSON.stringify(orderDetails));
//         alert("Thanh toán thành công !!! ");
//         setTimeout((e)=>{
//             window.location = "/";
//         },2000);  
//     }
// }

// function getpriceProduct(id) {
//     let products = JSON.parse(localStorage.getItem('products'));
//     let sp = products.find(item => {
//         return item.id == id;
//     })
//     return sp.price;
// }