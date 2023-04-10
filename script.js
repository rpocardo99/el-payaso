var narizx = 0;
var narizy = 0;
var narizRoja="";
function preload(){
  narizRoja=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function setup(){
    canvas = createCanvas(300, 300);
    background("white");
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poses = ml5.poseNet(video, listo)
    poses.on("pose" ,obtenerposes)
}

function draw(){
    image(video, 0, 0, 300, 300);
    circle(narizx,narizy,20)
  image(narizRoja,narizx-25,narizy-25,50,50)
}
function listo(){
  console.log("ando chido :)")
} 
function obtenerposes(resultados){
  if(resultados.length > 0){
   narizx = resultados[0].pose.nose.x; 
     narizy = resultados[0].pose.nose.y; 
  }
}function tomarFoto(){
  save("la fljera.png")
}