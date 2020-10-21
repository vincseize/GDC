const titleSiteName = document.getElementById("titleSiteName");
const logo = document.getElementById("divLogo");
const b = document.getElementById("close-icon");
const sp = document.getElementById("searchInput");

const imgF = document.getElementById("imgFolder");
const iconParam = document.getElementById("iconParam");

titleSiteName.addEventListener("click", function() {
  refresh();
}, false);
logo.addEventListener("click", function() {
  refresh();
}, false);
b.addEventListener("click", function() {
  hideClearButton();
}, false);
sp.addEventListener("input", function() {
  showClearButton();
}, false);

try {
imgF.addEventListener("imgFolder", function() {
  imgFolder();
}, false);
} catch (error) {
  // console.error(error);
}

try {
  iconParam.addEventListener("click", function() {
    settings();
  }, false);
  } catch (error) {
    // console.error(error);
  }

sp.addEventListener('input', evt => {
  const value = sp.value.trim()
  if (value) {
    // console.log('not empty')
  } else {
    hideClearButton()
  }
})

function settings() {
  window.location = "login.php";
}

function imgFolder(folder) {
  window.location = "indexGallery.php?g="+folder;
}

function refresh() {
  // b.style.opacity = 0;
  window.location = "index.php";
}

function reload() {
  // b.style.opacity = 0;
  window.location = "index.php";
}

function hideClearButton() {
  b.style.opacity = 0;
  reload();
}

function showClearButton() {
  b.style.opacity = 100;
}

// $(window).scroll(function() {
  window.addEventListener("scroll", function() { 
    
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
  
    if ($(this).scrollTop() > 0) {
      $('.header').fadeOut(1000);
      $('.toolbar').fadeOut(1000);
      $('.divTotal2').fadeOut(1000);
    } else {
      $('.header').fadeIn(1000);
      $('.toolbar').fadeIn(1000);
      $('.divTotal2').fadeIn(1000);
    }
  
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      // when scroll to bottom of the page
      $('.footerHome').fadeIn(500);
      // console.log('bottom');
    } else {
      $('.footerHome').fadeOut(1000);
      // console.log('not b');
    }

    if ( scrollPosition > scrollHeight * 2) {
      $('.scrollTopButton').fadeIn(1000);
      // console.log(scrollPosition);
      // console.log(scrollHeight);
    } else {
      $('.scrollTopButton').fadeOut(500);
    }



});



window.addEventListener("load", function() { 

    const iconParam = document.getElementById("iconParam");

    if(LOGGED=='True'){
      console.log(LOGGED);
      iconParam.style.opacity = "1";

    }

});


function topFunction() {
  window.location.href = "#top";
}

