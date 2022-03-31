var list_of_bars = document.querySelectorAll('.skills-progress > div');
function set_width_to_zero()
{
    for (let bar of list_of_bars) {
        bar.style.width = "0";
    }
}
function in_view(bar)
{
    let element_distance = bar.getBoundingClientRect().top;
    if (element_distance < window.innerHeight) {
        return true;
    }
    return false;
}
function fill_bar(bar, percentage)
{
    let count = 0;
    let id = setInterval(function ()
    {
        bar.style.width = count + "%";
        if (count++ == percentage) {
            clearInterval(id);
        }
    }, 10)
}
function is_filled(bar)
{
    if (parseInt(bar.style.width) != 0) {
        return true;
    }
    return false;
}
function checker_in_view()
{
    for (let bar of list_of_bars) {
        if (in_view(bar) && !is_filled(bar)) {
            fill_bar(bar, bar.getAttribute("data-value"));
        }
    }
}
function again_on_top()
{
    let skills = document.getElementById("skills")
    let skills_distance = skills.getBoundingClientRect().top;
    if (skills_distance > window.innerHeight) {
        set_width_to_zero();
    }
}
function listener()
{
    checker_in_view();
    again_on_top()
}

set_width_to_zero();
window.addEventListener('scroll', listener);

//for hamburger bar

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.width === "45%") {
      x.style.width = "0%";
    } else {
      x.style.width = "45%";
    }
  }

  var myNav = document.querySelector('.nav');
  window.onscroll = function () { 
      "use strict";
      if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
          myNav.classList.add("nav-colored");
          myNav.classList.remove("nav-transparent");
      } 
      else {
          myNav.classList.add("nav-transparent");
          myNav.classList.remove("nav-colored");
      }
  };



function mailMe() {
    
    Email.send({
        Host : "smtp.gmail.com",
        Username : "deepakkumarg968@gmail.com",
        Password : "D2pk@2808",
        To : 'deepakkumarg968@gmail.com',
        From : "deepakkumarg968@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
}
  