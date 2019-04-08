function appendScript(src, destination){
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = src;
  destination.appendChild(s);
}
function authenticated(){
  var cookie = $j( "body" ).hasClass("logged-in");
  if(cookie){
    return true;
  }else{
    return false;
  }
}
function initDate(){
  var date = new Date();
  return {
    "day": date.getDate(),
    "month": date.getMonth(),
    "year": date.getFullYear()
  }
}
function fixCurrentPageReload(location, hrefSelectors){
  $j( hrefSelectors ).each(function( index ) {
    var loc = $j( this ).attr("href").replace(/\//gi, "");
    var pathname = location.pathname.replace(/\//gi, "");
    if(typeof loc !== 'undefined' && loc.indexOf(pathname) !== -1 || typeof loc !== 'undefined' && loc === pathname){
      $j( this ).click(function(e){
        e.preventDefault();
      });
    }
  });
}
function fixSubmenuClick(selector, fn){
  $j( selector ).each(function( index ) {
  $j( this ).on("click", fn);
});
}
