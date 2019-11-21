let $ = window.$;

window.__lc = window.__lc || {};
window.__lc.license = 7274061;
window.__lc.ga_version = "gaq";
window.__lc.visitor = { name: "", email: "" };

(function() {
  var lc = document.createElement("script");
  lc.type = "text/javascript";
  lc.async = true;
  lc.src =
    ("https:" == document.location.protocol ? "https://" : "http://") +
    "cdn.livechatinc.com/tracking.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(lc, s);
})();

var LC_API = LC_API || {};
LC_API.on_after_load = function() {
  $(".place-order").click(function() {
    var d = new Date();
    var custom_variables = [
      { name: "last place order on: ", value: d.toLocaleString() }
    ];
    LC_API.set_custom_variables(custom_variables);
  });
};
