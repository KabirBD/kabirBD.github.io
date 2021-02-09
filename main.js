console.log("main.js connected!")

var divisionObject = {
  "Barisal": ["Barguna",
    "Barisal",
    "Bhola",
    "Jhalokati",
    "Patuakhali",
    "Pirojpur"],
  "Chittagong": ["Bandarban",
    "Brahmanbaria",
    "Chandpur",
    "Chittagong",
    "Comilla",
    "Cox's Bazar",
    "Feni",
    "Khagrachhari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati"],
  "Dhaka": ["Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Rajbari",
    "Shariatpur",
    "Tangail"],
  "Khulna": ["Bagerhat",
    "Chuadanga",
    "Jessore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira"],
  "Mymensingh": ["Jamalpur",
    "Mymensingh",
    "Netrakona",
    "Sherpur"],
  "Rajshahi": ["Bogra",
    "Chapainawabganj",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Pabna",
    "Rajshahi",
    "Sirajganj"],
  "Rangpur": ["Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon"],
  "Sylhet": ["Habiganj",
    "Moulvibazar",
    "Sunamganj",
    "Sylhet"]
};
let quoteObject;


/* Code for Navigation Highlight and Call funcion on Navigation change*/
window.onhashchange = function() {
  highlightLocation();
}
function highlightLocation() {
  var location = window.location.hash;
  // console.log(location);
  if (location.includes("about")) {
    activity("about");
  } else if (location.includes("projects")) {
    activity("projects");
  } else if (location.includes("blogs")) {
    activity("blogs");
  } else {
    activity("home");
    weatherOfUserLocation();
    fetchQuote();
    dateTimeView();
  }
}
function activity (activePage) {
  var home = document.getElementById("home");
  var about = document.getElementById("about");
  var projects = document.getElementById("projects");
  var blogs = document.getElementById("blogs");
  var activePage = document.getElementById(activePage);

  home.setAttribute("class", "nav-item nav-link");
  about.setAttribute("class", "nav-item nav-link");
  blogs.setAttribute("class", "nav-item nav-link");
  projects.setAttribute("class", "nav-item nav-link");
  activePage.setAttribute("class", "nav-item nav-link active");
}


// Function for typing effect text
function typeEffect() {
  window.onload = function() {
    var typed = new Typed('#typed', {
      strings: ["Welcome to CodeWithHarry", "Learn Python", "Web development", "Data Science", "Machine Learning", "and other awesome programming concepts with me :)"],
      backSpeed: 15,
      smartBackspace: true,
      backDelay: 1200,
      startDelay: 1000,
      typeSpeed: 25,
      loop: true,
    });
  };
}

// Funtion to colapse navbar on outer click
$(document).click(function(event) {
  $('#navbarNavAltMarkup').collapse('hide');
});

var lastScrollTop = 200;
$('#navbarNavAltMarkup').scroll(function(event){
var st = $(this).scrollTop();
if (st > lastScrollTop){
   // downscroll code
  
} else {
  // upscroll code
  $('#navbarNavAltMarkup').collapse('hide');
  
}
lastScrollTop = st +200;
});
// timeView and dateView
eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return (c < a ? '': e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29): c.toString(36))
  }; if (!''.replace(/^/, String)) {
    while (c--) {
      d[e(c)] = k[c] || e(c)
    } k = [function (e) {
        return d[e]
      }]; e = function () {
      return '\\w+'
    }; c = 1
  }; while (c--) {
    if (k[c]) {
      p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
    }
  } return p
}('8 y(f,9,b){0 5=n x();0 h=5.z();0 k=5.A()+1;0 g=5.w();0 3=9;7(!3){3=\'i\'}e{3=3.v()}0 l=\'q://i.r/s/u/m/?t=\'+h+\'&D=\'+k+\'&Q=\'+g+\'&9=\'+3;j(l,8(K,a){7(a){0 c=J.F(f);0 4="";7(b){4=b+" "}4+=a.I;c.N=4}})}8 j(o,d){0 2=n E();2.L(\'M\',o,C);2.p=\'m\';2.P=8(){0 6=2.6;7(6==B){d(H,2.O)}e{d(6)}};2.G()}', 53, 53, 'var||xhr|lang|dateString|today|status|if|function|language|result|prefix||callback|else|containerId|yyyy|dd|bangla|getJSON|mm|jsonUrl|json|new|url|responseType|https|plus|api|day|converttobangladate|toLowerCase|getFullYear|Date|dateToday|getDate|getMonth|200|true|month|XMLHttpRequest|getElementById|send|null|FullDate|document|err|open|GET|innerText|response|onload|year'.split('|'), 0, {}))
function dateTimeView() {
    document.getElementById("copyRightDate").innerHTML = moment().format('YYYY')
  dateToday('dateViewBangla',
    'bangla');
  setInterval(function() {
    document.getElementById("timeView").innerHTML = moment().format('h:mm:ss A')
    document.getElementById("dateView").innerHTML = moment().format('Do MMMM YYYY')
    document.getElementById("dayView").innerHTML = moment().format('dddd')
  },
    1000);
}

// weatherView
function weatherOfUserLocation() {
  var location = localStorage.getItem("userLocation");
  if (location == null) {
    weatherFind("Rajshahi");
  } else {
    weatherFind(location);
  }
  //console.log(location)
}
function selectDistrict() {
  let selectedDivisionName = document.getElementById("divisionList");
  let selectedDictrict = document.getElementById("districtList");
  let selectedDivisionObject = selectedDivisionName.value;
  let selectedDivision = divisionObject[selectedDivisionObject]
  //console.log(selectedDivision);
  let html = "";
  for (district of selectedDivision) {
    html = html +`<option value="${district}">${district}</option>`
  }
  selectedDictrict.innerHTML = html;
  //console.log(html)
}
function myLocationWeather() {
  let selectedDictrict = document.getElementById("districtList");
  var location = selectedDictrict.value
  localStorage.setItem("userLocation", location);
  weatherFind(location);
}
function weatherFind(cityName) {
  var key = '048a398aac902d1906be52e9a4fd8e2e';
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ ',bd&appid=' + key)
  .then(function(resp) {
    return resp.json()
  }) // Convert data to json
  .then(function(data) {
    document.getElementById("location").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp-273) +"°C";
    document.getElementById("weather").innerHTML = data.weather[0].description;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("weatherLoadAnim").style.display = "none";
    //console.log(data);
  })
  .catch(function() {
    console.log("Could load weather info");
  });
}


// Function to generate random number
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Fetch quotes
function fetchQuote() {
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quoteObject = data;
    var rndm = randomNumber(0, 1640);
    document.getElementById("quoteText").innerHTML = data[rndm].text;
    document.getElementById("quoteAuthor").innerHTML = data[rndm].author;
  })
  .catch(function() {
    console.log("Could not load quote");
  });
}
// function for the quoteChanger button
function anotherQuote() {
  //console.log("Quote Changed");
  var rndm = randomNumber(0, 1640);
  document.getElementById("quoteText").innerHTML = quoteObject[rndm].text;
  document.getElementById("quoteAuthor").innerHTML = quoteObject[rndm].author;

}
