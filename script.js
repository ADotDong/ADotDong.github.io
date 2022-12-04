//The pay range goes from 80%-125% of the median pay 

//if we assume a range from 151,000 to 242,000, with 196,000 is median..
var min = 151000
var max = 242000

document.getElementById("submit").onclick = function(event){
  var inputIntrinsic = parseInt(document.getElementById("intrinsic").value)
  var inputIntrinsicWeight = parseInt(document.getElementById("intrinsic-weight").value)
  
  var inputOkr = parseInt(document.getElementById("okr").value)
  var inputOkrWeight = parseInt(document.getElementById("okr-weight").value)
  
  var inputLocation = parseInt(document.getElementById("location").value)
  var inputLocationWeight = parseInt(document.getElementById("location-weight").value)
  // document.getElementById("countdown").innerHTML = `range for ${document.getElementById("level").value} level`
   document.getElementById("countdown").innerHTML = `range for 30 level`
   
//    var competence_score = ((inputIntrinsic*inputIntrinsicWeight*0.2) +(inputOkr*inputOkrWeight*0.2))/(6)
  
//   //using competence score, find percentile in a normal distribution (of weight 3 and )
   
   //OR
   
   function ncdf(x, mean, std) {
  var x = (x - mean) / std
  var t = 1 / (1 + .2315419 * Math.abs(x))
  var d =.3989423 * Math.exp( -x * x / 2)
  var prob = d * t * (.3193815 + t * ( -.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))))
  if( x > 0 ) prob = 1 - prob
  return prob
}
  
   //using each instrinsic and okr score, find the percentile in normal distribution
   //intrinsic
   var intrinsicMean = 2
   //99.7% of values are within · 3 standard - 1 to 3
   var intrinsicStd = 1/3
     //z = (x-μ)/σ
   //var intrinsicZ = (inputIntrinsic - intrinsicMean)/intrinsicStd
   var intrinsicPercentile = ncdf(inputIntrinsic, intrinsicMean, intrinsicStd)
   
   //OKR
   var okrMean = 2
   var okrStd = 1/3
   var okrPercentile = ncdf(inputOkr, okrMean, okrStd)
   
   //weight percentiles using weight to calculate final percentile
   var weighted_percentile = ((intrinsicPercentile*inputIntrinsicWeight) + (okrPercentile*inputOkrWeight))/(inputIntrinsicWeight + inputOkrWeight)
   
   //using percentile, find where falls
  var meanCalculated = ((max-min)*weighted_percentile)+min;
  
  //not quite sure how to get std yet.....
  //use the scale from before, 80% - 125%?
  
  if ((1.25*(meanCalculated)) > max){
    document.getElementById('max').innerText = max;
  }
  else{
    document.getElementById('max').innerText = Math.trunc(1.25*meanCalculated);
  }
  
  if ((0.8*meanCalculated) < min){
    document.getElementById('min').innerText = min;
  }
  else{
    document.getElementById('min').innerText = Math.trunc(0.8*meanCalculated);
  }
  // document.getElementById('min').innerText = Math.floor(distance / (day))
  // document.getElementById('max').innerText = Math.floor((distance % (day)) / (hour))
  
}
