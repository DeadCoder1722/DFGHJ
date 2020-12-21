//切换菜单显示qiehuan.js代码
function qiehuan(num) {
    console.log("In qiehuan")
    console.log(num);
    for (let id = 1; id <= 4; id++) {
        let a= document.querySelectorAll("#change"+id);
        // for (let i = 0; i < divset.length; i++) {
        //     divset[i].style.display = "none";
        // }
        if (id === num) {
            for (let i = 0; i < a.length; i++)
                a[i].style.display = "block";
            // document.getElementById("mynav"+id).className="nav_on";
        } else {
            for (let i = 0; i < a.length; i++)
                a[i].style.display = "none";
            // document.getElementById("mynav"+id).className="";
        }
    }
}

export default qiehuan;
