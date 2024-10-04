let pos=0;
array_name = ["../images/Orange_se_retire_bourse_NY_figaro.webp","../images/img_test_foo.png"];     
function swap_image(index_change){
    pos=pos+index_change;
    image=document.getElementById("image_liste");
    if (index_change==1 && pos==array_name.length){
        pos-=array_name.length;
    }
    else if (index_change==-1 && pos==-1){
        pos+=array_name.length;
    }
    image.src=array_name[pos];
}