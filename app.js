const box= document.querySelector(".box-shadow .box")
const generatecodeBtn = document.querySelector(".box-shadow .generador")

const controls= document.querySelectorAll("generador .control")

let xvalue= 0;
let yvalue= 0;
let blurvalue= 6;
let opacityvalue=0.3;
let spreadvalue=0;
let colorvalue= "rgba(0, 0, 0, 0.3)";
let insetvalue=false;

const hexToRGBA= (hex)=>{
  let r=parseInt(hex.slice(1, 3), 16)
  let g=parseInt(hex.slice(3, 5), 16)
  let b=parseInt(hex.slice(5, 7), 16)

  return `rgba(${r}, ${g}, ${b}, ${opacityvalue})`
};

const generadorBoxshadow= ()=>{

  if(insetvalue){
    box.style.boxShadow = `inset ${xvalue}px ${yvalue}px ${blurvalue}px ${spreadvalue}px ${colorvalue}px`;

  }else{
    box.style.boxShadow = `${xvalue}px ${yvalue}px ${blurvalue}px ${spreadvalue}px ${colorvalue}px`;
  }
}

const updateValues= ()=>{
  xvalue= document.querySelector("#x-value").value
  yvalue= document.querySelector("#y-value") .value
  blurvalue= document.querySelector("#blur").value
  opacityvalue= document.querySelector("#o-pacity").value
  spreadvalue= document.querySelector("#spread").value
  colorvalue= hexToRGBA( document.querySelector("#color").value)
  insetvalue= document.querySelector("#inset").value

  generadorBoxshadow()

}
controls.forEach(c=>{
  c.addEventListener("input", updateValues)
})
