Webcam.attach('#camera');

camera = document.getElementById('#camera');

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality:90
});

function take_snapshot
{
    Webcam.snap(function(data_uri){
        document.get
        ElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

console.log('m15 version:', m15.version);


classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1QXRaD4rF/model,jsol',modelLoaded)

function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }

     

  function gotResult(error,result) {
    if (error){
        console.error(error;)
    } else{
        console.log(results;)
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
  }