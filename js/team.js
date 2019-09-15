var greater748=`<div class="row justify-content-center">
<div class="col-5 col-md-5 m-3">
  <div class="card border-0 shadow" style="width:20em;">
    <img src="img/team/brandon.jpeg" class="card-img-top mx-auto"style="height:322px;">
    <div class="card-body text-center">
      <h3 class="card-title mb-0">Brandon Scolnik</h3>
      <div class="card-text text-black-50">Client Communication Liason</div>
      <div>I am a Computer Science student and in my spare time i visit schools and teach beginner programming.
      I enjoy puzzles and problem solving. </div>
    </div>
  </div>
</div>
<div class="col-5 col-md-5 m-3">
  <div class="card border-0 shadow" style="width:20em;">
    <img src="img/team/dylan.png" class="card-img-top mx-auto" style="height:322px;">
    <div class="card-body text-center">
      <h3 class="card-title mb-0">Dylan Wunsch</h3>
      <div class="card-text text-black-50">Team Leader</div>
      <div>
      I am completing a double degree in Computer Science and Graphic Design.
      I enjoy interacting with communites and learning about new cultures. </div>
    </div>
  </div>
</div>
</div>
<div class="row justify-content-center">
<div class="col-5 col-md-5 m-3">
  <div class="card border-0 shadow" style="width:20em;">
    <img src="img/team/nathan.jpeg" class="card-img-top mx-auto" style="height:322px;">
    <div class="card-body text-center">
      <h3 class="card-title mb-0">Nathan Jin</h3>
      <div class="card-text text-black-50">Head of Documentation</div>
      <div>I am an Information Technology student and i am majoring in Network Management.
      I enjoy broadening my horizons by meeting new people day to day. </div>
    </div>
  </div>
</div>

<div class="col-5 col-md-5 m-3">
  <div class="card border-0 shadow" style="width:20em;">
    <img src="img/team/james.png" class="card-img-top mx-auto" style="height:322px;">
    <div class="card-body text-center">
      <h3 class="card-title mb-0">James Nader</h3>
      <div class="card-text text-black-50">Operational Manager</div>
      <div>
      I am an computer science student.
      In my spare time i enjoy playing football and learning about new interesting things.</div>
    </div>
  </div>
</div>
</div>
<div class="row justify-content-center">
<div class="col-5  col-md-5 m-3">
  <div class="card border-0 shadow" style="width:20em;">
    <img src="img/team/clint.jpeg" class="card-img-top mx-auto" style="height:340px;">
    <div class="card-body text-center">
      <h3 class="card-title mb-0">Clint Bishop</h3>
      <div class="card-text text-black-50">Unity Development Lead</div>
      <div>I am a Computer Science student. 
      In my spare time i enjoy using Unity for side projects e.g. (creating 3D chess).</div>
    </div>
  </div>
</div>
</div>`;

var less748 = `<div class="row justify-content-center mb-4" style="padding-top:5%;">
<div class="card border-0 shadow" style="width:20em;">
  <img src="img/team/brandon.jpeg" class="card-img-top mx-auto"style="height:322px;">
  <div class="card-body text-center">
    <h3 class="card-title mb-0">Brandon Scolnik</h3>
    <div class="card-text text-black-50">Client Communication Liason</div>
    <div>I am a Computer Science student and in my spare time i visit schools and teach beginner programming.
    I enjoy puzzles and problem solving. 
    </div>
  </div>
</div>
</div>
<div class="row justify-content-center mb-4">
<div class="card border-0 shadow" style="width:20em;">
  <img src="img/team/dylan.png" class="card-img-top mx-auto" style="height:322px;">
  <div class="card-body text-center">
    <h3 class="card-title mb-0">Dylan Wunsch</h3>
    <div class="card-text text-black-50">Team Leader</div>
    <div>I am completing a double degree in Computer Science and Graphic Design.
    I enjoy interacting with communites and learning about new cultures. 
    </div>
  </div>
</div>
</div>
<div class="row justify-content-center mb-4">
<div class="card border-0 shadow" style="width:20em;">
  <img src="img/team/nathan.jpeg" class="card-img-top mx-auto" style="height:322px;">
  <div class="card-body text-center">
    <h3 class="card-title mb-0">Nathan Jin</h3>
    <div class="card-text text-black-50">Head of Documentation</div>
    <div>I am an Information Technology student and i am majoring in Network Management.
    I enjoy broadening my horizons by meeting new people day to day. </div>
  </div>
</div>
</div>
<div class="row justify-content-center mb-4">
<div class="card border-0 shadow" style="width:20em;">
  <img src="img/team/james.png" class="card-img-top mx-auto" style="height:322px;">
  <div class="card-body text-center">
    <h3 class="card-title mb-0">James Nader</h3>
    <div class="card-text text-black-50">Operational Manager</div>
    <div>
    I am an computer science student.
    In my spare time i enjoy playing football and learning about new interesting things.</div>
  </div>
</div>
</div>
<div class="row justify-content-center" style="padding-bottom:5%;">
<div class="card border-0 shadow" style="width:20em;">
  <img src="img/team/clint.jpeg" class="card-img-top mx-auto" style="height:340px;">
  <div class="card-body text-center">
    <h3 class="card-title mb-0">Clint Bishop</h3>
    <div class="card-text text-black-50">Unity Development Lead</div>
    <div>I am a Computer Science student. 
    In my spare time i enjoy using Unity for side projects e.g. (creating 3D chess).</div>
  </div>
</div>
</div>`;

function adjustImage()
{
    if($(document).width() >=748){
       document.getElementById('team-cardDiv').innerHTML = greater748;
    }
    else {
     document.getElementById('team-cardDiv').innerHTML = less748;
    }
}

$(window).resize(function() {
    adjustImage();
  });

$(document).ready(function() {
  console.log('ready');
  adjustImage();
});

