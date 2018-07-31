var SourceSansProRegular = new FontFaceObserver('SourceSansPro');

var SourceSansProLight = new FontFaceObserver('SourceSansPro', {
    weight: 300
});

var SourceSansProSemibold = new FontFaceObserver('SourceSansPro', {
    weight: 600
});
  
var SourceSansProBold = new FontFaceObserver('SourceSansPro', {
    weight: 700
});


Promise.all([SourceSansProRegular.load(), SourceSansProLight.load(), SourceSansProSemibold.load(), SourceSansProBold.load()]).then(function () {
    document.documentElement.className += "fonts-loaded";
})