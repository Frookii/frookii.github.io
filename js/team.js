var greater748=`<div class="row justify-content-center">
<div class="col-5 col-md-5 m-3">
  <div class="card border-0 shadow" style="width:20em;">
    <img src="img/team/brandon.jpeg" class="card-img-top mx-auto"style="height:322px;">
    <div class="card-body text-center">
      <h5 class="card-title mb-0">Brandon Scolnik</h5>
      <div class="card-text text-black-50">Client Communication Liason</div>
    </div>
  </div>
</div>
<div class="col-5 col-md-5 m-3">
  <div class="card border-0 shadow" style="width:20em;">
    <img src="img/team/dylan.png" class="card-img-top mx-auto" style="height:322px;">
    <div class="card-body text-center">
      <h5 class="card-title mb-0">Dylan Wunsch</h5>
      <div class="card-text text-black-50">Team Leader</div>
    </div>
  </div>
</div>
</div>
<div class="row justify-content-center">
<div class="col-5 col-md-5 m-3">
  <div class="card border-0 shadow" style="width:20em;">
    <img src="img/team/nathan.jpeg" class="card-img-top mx-auto" style="height:322px;">
    <div class="card-body text-center">
      <h5 class="card-title mb-0">Nathan Jin</h5>
      <div class="card-text text-black-50">Head of Documentation</div>
    </div>
  </div>
</div>

<div class="col-5 col-md-5 m-3">
  <div class="card border-0 shadow" style="width:20em;">
    <img src="img/team/james.png" class="card-img-top mx-auto" style="height:322px;">
    <div class="card-body text-center">
      <h5 class="card-title mb-0">James Nader</h5>
      <div class="card-text text-black-50">Operational Manager</div>
    </div>
  </div>
</div>
</div>
<div class="row justify-content-center">
<div class="col-5  col-md-5 m-3">
  <div class="card border-0 shadow" style="width:20em;">
    <img src="img/team/clint.jpeg" class="card-img-top mx-auto" style="height:340px;">
    <div class="card-body text-center">
      <h5 class="card-title mb-0">Clint Bishop</h5>
      <div class="card-text text-black-50">Unity Development Lead</div>
    </div>
  </div>
</div>
</div>`;

var less748 = `<div class="row justify-content-center mb-4" style="padding-top:5%;">
<div class="card border-0 shadow" style="width:20em;">
  <img src="img/team/brandon.jpeg" class="card-img-top mx-auto"style="height:322px;">
  <div class="card-body text-center">
    <h5 class="card-title mb-0">Brandon Scolnik</h5>
    <div class="card-text text-black-50">Client Communication Liason</div>
  </div>
</div>
</div>
<div class="row justify-content-center mb-4">
<div class="card border-0 shadow" style="width:20em;">
  <img src="img/team/dylan.png" class="card-img-top mx-auto" style="height:322px;">
  <div class="card-body text-center">
    <h5 class="card-title mb-0">Dylan Wunsch</h5>
    <div class="card-text text-black-50">Team Leader</div>
  </div>
</div>
</div>
<div class="row justify-content-center mb-4">
<div class="card border-0 shadow" style="width:20em;">
  <img src="img/team/nathan.jpeg" class="card-img-top mx-auto" style="height:322px;">
  <div class="card-body text-center">
    <h5 class="card-title mb-0">Nathan Jin</h5>
    <div class="card-text text-black-50">Head of Documentation</div>
  </div>
</div>
</div>
<div class="row justify-content-center mb-4">
<div class="card border-0 shadow" style="width:20em;">
  <img src="img/team/james.png" class="card-img-top mx-auto" style="height:322px;">
  <div class="card-body text-center">
    <h5 class="card-title mb-0">James Nader</h5>
    <div class="card-text text-black-50">Operational Manager</div>
  </div>
</div>
</div>
<div class="row justify-content-center" style="padding-bottom:5%;">
<div class="card border-0 shadow" style="width:20em;">
  <img src="img/team/clint.jpeg" class="card-img-top mx-auto" style="height:340px;">
  <div class="card-body text-center">
    <h5 class="card-title mb-0">Clint Bishop</h5>
    <div class="card-text text-black-50">Unity Development Lead</div>
  </div>
</div>
</div>`;

function adjustImageOnResize()
{
  // console.log(document.getElementById('team-cardDiv'))
    if($(document).width() >=748){
       document.getElementById('team-cardDiv').innerHTML = greater748;
    }
    else {
     document.getElementById('team-cardDiv').innerHTML = less748;
    }
}

$(window).resize(function() {
    adjustImageOnResize()
  });

$(document).ready(function() {
    
});
