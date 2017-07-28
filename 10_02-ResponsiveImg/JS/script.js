const IMAGES = document.querySelectorAll("img");
const SIZES = {
    showcase: "100vw",
    reason: "(max-width: 799px) 100 vw, 372px",
    feature: "(max-width: 799px) 100 vw, 558px",
    story: "(max-width: 799px) 100 vw, 670px",
};
//Generate new responsive image name strings
function makeSrcset(imgSrc){
  let markup =[];
  let width = 400;

  for (let i = 0; i<5; i++){
    markup[i] = imgSrc + "-" + width + "w";
    width+=400;
  }

  return markup.join();
}

//Loops each unique image, call func, create 5x images (400,800,1200,1600,2000)
for (let i = 0; i < IMAGES.length; i++){
  let imgSrc = IMAGES[i].getAttribute("src");
  imgSrc = imgSrc.slice(0,-8);
  let srcseta = makeSrcset(imgSrc);
  console.log(srcseta);

  let type = IMAGES[i].getAttribute("data-type");
  let sizes = SIZES[type]; //SIZES.type no work b.c searches for prop name
  console.log(type);
}
