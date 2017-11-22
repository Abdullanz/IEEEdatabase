var inDropdown = false;

function toggleCourses() {
  if (document.getElementById("course-arrow").className == "fa fa-caret-right")
  {
    document.getElementById("course-arrow").className = "fa fa-caret-down";
    var courses = document.getElementsByClassName("course");
    for (var i = 0; i<courses.length;i++)
    {
      courses[i].style.display = "list-item";
    }
  }
  else if (document.getElementById("course-arrow").className == "fa fa-caret-down")
  {
    document.getElementById("course-arrow").className = "fa fa-caret-right";
    var courses = document.getElementsByClassName("course");
    for (var i = 0; i<courses.length;i++)
    {
      courses[i].style.display = "none";
    }
  }
}

function toggleLabs() {
  if (document.getElementById("lab-arrow").className == "fa fa-caret-right")
  {
    document.getElementById("lab-arrow").className = "fa fa-caret-down";
    var courses = document.getElementsByClassName("lab");
    for (var i = 0; i<courses.length;i++)
    {
      courses[i].style.display = "list-item";
    }
  }
  else if (document.getElementById("lab-arrow").className == "fa fa-caret-down")
  {
    document.getElementById("lab-arrow").className = "fa fa-caret-right";
    var courses = document.getElementsByClassName("lab");
    for (var i = 0; i<courses.length;i++)
    {
      courses[i].style.display = "none";
    }
  }
}

function select(number) {
  var courses = document.getElementsByClassName("course");
  var labs = document.getElementsByClassName("lab");
  var search = document.getElementById("search");
  var selectedCourse = document.getElementById("selected-course");
  var course;
    for (var i=0;i<courses.length;i++)
    {
      if (courses[i].value == number)
      {
        courses[i].style.backgroundColor = "#0099cc";
        course = courses[i].innerHTML;
      }
      else {
        courses[i].style.backgroundColor = "black";
      }
    }
    for (var j=0;j<labs.length;j++)
    {
      if (labs[j].value == number)
      {
        labs[j].style.backgroundColor = "#0099cc";
        course = labs[j].innerHTML;
      }
      else {
        labs[j].style.backgroundColor = "black";
      }
    }
    search.placeholder = "Search " + course;
    selectedCourse.innerHTML = course;
}

function barsHoverEnter() {
  var dropdown = document.getElementById("dropdown");
  if (inDropdown == false)
  {
    inDropdown = true;
    dropdown.style.display = "initial";
  }
}

function barsHoverLeave() {
  var dropdown = document.getElementById("dropdown");
  inDropdown = false;
  setTimeout(
    function() {
      if (inDropdown == false)
      {
        dropdown.style.display = "none";
      }
    }
  , 500);
}

function dropdownHoverEnter() {
  var dropdown = document.getElementById("dropdown");
  inDropdown = true;
}

function dropdownHoverLeave() {
  var dropdown = document.getElementById("dropdown");
  inDropdown = false;
  setTimeout(
    function() {
      if (inDropdown == false)
      {
        dropdown.style.display = "none";
      }
    }
  , 500);
}
