prediction_1="";
prediction_2="";

Webcam.set({
 width:350,
 height:350,
 image_format:'png',
 png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snap(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="Captured_img" src="'+data_uri+'"/>';
});
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/train/image/1tFv8IFIQO84a93St204s5TL-mUnGom2C',modelLoaded);
function modelLoaded(){
 console.log('Model Loaded!');
}
function speak(){
    var synth = window.speechSynthesis; 
    speak_data_1 = "The first prediction is " + prediction_1; 
    speak_data_2 = "And the second prediction is " + prediction_2; 
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2); 
    synth.speak(utterThis);
}