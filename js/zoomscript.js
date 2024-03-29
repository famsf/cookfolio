
      var viewer = OpenSeadragon({
        id: "foliozoom",
        prefixUrl: "../lib/openseadragon/images/",
        tileSources: [
          "../../dzi/reception/dzc_output.xml",
          "../../dzi/night-dance/dzc_output.xml",
          "../../dzi/night-dance-1/dzc_output.xml",
          "../../dzi/kava-king/dzc_output.xml",
          "../../dzi/sacrifice/dzc_output.xml",
          "../../dzi/otaheite-dance/dzc_output.xml",
          "../../dzi/offering/dzc_output.xml",
          "../../dzi/presents/dzc_output.xml",
          "../../dzi/dancing-man/dzc_output.xml",
          "../../dzi/young-woman/dzc_output.xml",
          "../../dzi/helmet/dzc_output.xml",
          "../../dzi/canoe/dzc_output.xml"
        ],
        overlays: [
          {
            id: 'overlay-1',
            x: 0,
            y: 82,
            width: 512,
            height: 350,
            className: 'overlay'
          },
          {
            id: 'overlay-2',
            x: 575,
            y: 82,
            width: 512,
            height: 350,
            className: 'overlay'
          },
          {
            id: 'overlay-3',
            x: 1151,
            y: 82,
            width: 512,
            height: 350,
            className: 'overlay'
          },
          {
            id: 'overlay-4',
            x: 1727,
            y: 86,
            width: 512,
            height: 342,
            className: 'overlay'
          },
          {
            id: 'overlay-5',
            x: 0,
            y: 680,
            width: 512,
            height: 308,
            className: 'overlay'
          },
          {
            id: 'overlay-6',
            x: 575,
            y: 664,
            width: 512,
            height: 340,
            className: 'overlay'
          },
          {
            id: 'overlay-7',
            x: 1151,
            y: 667,
            width: 512,
            height: 334,
            className: 'overlay'
          },
          {
            id: 'overlay-8',
            x: 1727,
            y: 665,
            width: 512,
            height: 338,
            className: 'overlay'
          },
          {
            id: 'overlay-9',
            x: 74,
            y: 1152,
            width: 362,
            height: 512,
            className: 'overlay'
          },
          {
            id: 'overlay-10',
            x: 632,
            y: 1152,
            width: 405,
            height: 512,
            className: 'overlay'
          },
          {
            id: 'overlay-11',
            x: 1202,
            y: 1152,
            width: 410,
            height: 512,
            className: 'overlay'
          },
          {
            id: 'overlay-12',
            x: 1730,
            y: 1241,
            width: 512,
            height: 333,
            className: 'overlay'
          }
        ],
        collectionMode: true,
        collectionRows: 3,
        collectionTileSize: 512,
        collectionTileMargin: 64,
        toolbar: "toolBar",
        autoHideControls: false,
        showZoomControl: false,
        homeButton: "home",
        showFullPageControl: false,
        visibilityRatio: 0.5,
        constrainDuringPan: true,
        zoomPerClick: 1,
        viewportMargins: {
          top: 64,
          left: 64,
          right: 64,
          bottom: 64
        },        
      });
      
   new OpenSeadragon.MouseTracker({
     element:'overlay-1',
     clickHandler: function(e) {
       var myoverlay = viewer.getOverlayById('overlay-1');
       viewer.viewport.fitBounds(myoverlay.getBounds());
       document.getElementById('overlay-1').style.display = "none";
     }
   });
   
   new OpenSeadragon.MouseTracker({
     element:'overlay-2',
     clickHandler: function(e) {
       var myoverlay1 = viewer.getOverlayById('overlay-2');
       viewer.viewport.fitBounds(myoverlay1.getBounds());
       document.getElementById('overlay-2').style.display = "none";
     }
   });
   
   new OpenSeadragon.MouseTracker({
     element:'overlay-3',
     clickHandler: function(e) {
       var myoverlay2 = viewer.getOverlayById('overlay-3');
       viewer.viewport.fitBounds(myoverlay2.getBounds());
       document.getElementById('overlay-3').style.display = "none";
     }
   });
   
   new OpenSeadragon.MouseTracker({
     element:'overlay-4',
     clickHandler: function(e) {
       var myoverlay3 = viewer.getOverlayById('overlay-4');
       viewer.viewport.fitBounds(myoverlay3.getBounds());
       document.getElementById('overlay-4').style.display = "none";
     }
   });
   
   new OpenSeadragon.MouseTracker({
     element:'overlay-5',
     clickHandler: function(e) {
       var myoverlay4 = viewer.getOverlayById('overlay-5');
       viewer.viewport.fitBounds(myoverlay4.getBounds());
       document.getElementById('overlay-5').style.display = "none";
     }
   });
   
   new OpenSeadragon.MouseTracker({
     element:'overlay-6',
     clickHandler: function(e) {
       var myoverlay5 = viewer.getOverlayById('overlay-6');
       viewer.viewport.fitBounds(myoverlay5.getBounds());
       document.getElementById('overlay-6').style.display = "none";
     }
   });
   
   new OpenSeadragon.MouseTracker({
     element:'overlay-7',
     clickHandler: function(e) {
       var myoverlay6 = viewer.getOverlayById('overlay-7');
       viewer.viewport.fitBounds(myoverlay6.getBounds());
       document.getElementById('overlay-7').style.display = "none";
     }
   });
   
   new OpenSeadragon.MouseTracker({
     element:'overlay-8',
     clickHandler: function(e) {
       var myoverlay7 = viewer.getOverlayById('overlay-8');
       viewer.viewport.fitBounds(myoverlay7.getBounds());
       document.getElementById('overlay-8').style.display = "none";
     }
   });
   
   new OpenSeadragon.MouseTracker({
     element:'overlay-9',
     clickHandler: function(e) {
       var myoverlay8 = viewer.getOverlayById('overlay-9');
       viewer.viewport.fitBounds(myoverlay8.getBounds());
       document.getElementById('overlay-9').style.display = "none";
     }
   });
   
   new OpenSeadragon.MouseTracker({
     element:'overlay-10',
     clickHandler: function(e) {
       var myoverlay9 = viewer.getOverlayById('overlay-10');
       viewer.viewport.fitBounds(myoverlay9.getBounds());
       document.getElementById('overlay-10').style.display = "none";
     }
   });
   
   new OpenSeadragon.MouseTracker({
     element:'overlay-11',
     clickHandler: function(e) {
       var myoverlay10 = viewer.getOverlayById('overlay-11');
       viewer.viewport.fitBounds(myoverlay10.getBounds());
       document.getElementById('overlay-11').style.display = "none";
     }
   });
   
   new OpenSeadragon.MouseTracker({
     element:'overlay-12',
     clickHandler: function(e) {
       var myoverlay11 = viewer.getOverlayById('overlay-12');
       viewer.viewport.fitBounds(myoverlay11.getBounds());
       document.getElementById('overlay-12').style.display = "none";
     }
   }); 
   
   
   viewer.addHandler('canvas-double-click', function() {
     event.preventDefaultAction = true;
     viewer.viewport.goHome();
     viewer.viewport.panTo(center);
   });
     
   viewer.addHandler('home', function() { 
     setTimeout(function() {
       for (var ii = 1; ii < 13; ii++) {
         document.getElementById('overlay-'+ii).style.display = "block";
       }
     }, 500);
   });
   
 function idleLogout() {
   var t;
   window.onload = resetTimer;
   window.onmousemove = resetTimer;
   window.onmousedown = resetTimer; // catches touchscreen presses
   window.onclick = resetTimer;     // catches touchpad clicks
   window.onscroll = resetTimer;    // catches scrolling with arrow keys
   window.onkeypress = resetTimer;

   function logout() {
     viewer.viewport.goHome();
   }

   function resetTimer() {
     clearTimeout(t);
     t = setTimeout(logout, 30000);  // time is in milliseconds
   }
}
idleLogout();
   
   // Can this be on scroll out only? Check this out on OSD docs
   
//   viewer.addHandler('canvas-scroll', function() {
//     setTimeout(function() {
//       for (var ii = 1; ii < 13; ii++) {
//       document.getElementById('overlay-'+ii).style.display = "block";
//       }
//     }, 500);
//   });
   
//   viewer.addHandler('canvas-drag', function() {
//     setTimeout(function() {
//       for (var ii = 1; ii < 13; ii++) {
//       document.getElementById('overlay-'+ii).style.display = "none";
//       }
//     }, 0);
//   });



