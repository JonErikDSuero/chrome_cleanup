///////////////////////////// Youtube

// 'Home' Page
$("#feed").remove();

// 'Watch' Page
$("#watch7-sidebar-contents").remove();
$("#watch-discussion").remove();
$(".ytp-endscreen-content").remove();

var sheet = document.createElement('style') // css() of jQuery is not working...
sheet.innerHTML = "#watch7-content{ margin: 0 auto; } .watch-main-col{ float: inherit; }";
document.body.appendChild(sheet);

///////////////////////////// Youtube (end)
