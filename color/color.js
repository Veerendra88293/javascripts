let back_color=document.getElementById("bgColorInput");
let font_color=document.getElementById("fontColorInput");
let back_size=document.getElementById("fontSizeInput");
let back_weight=document.getElementById("fontWeightInput");
let back_padding=document.getElementById("paddingInput");
let back_radius=document.getElementById("borderRadiusInput");

function changeproperties(){
let bc=back_color.value;
let fc=font_color.value;
let fs=back_size.value;
let fw=back_weight.value;
let bp=back_padding.value;
let br=back_radius.value;

document.getElementById("customButton").style.backgroundColor=bc;
document.getElementById("customButton").style.color=fc;
document.getElementById("customButton").style.fontSize=fs;
document.getElementById("customButton").style.fontWeight=fw;
document.getElementById("customButton").style.padding=bp;
document.getElementById("customButton").style.borderRadius=br;
}