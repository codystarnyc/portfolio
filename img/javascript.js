console.log('Look at me!')


  $(function() {
    $.scrollify({
      section : ".profilesection",
      sectionName : "section-name",
      interstitialSection : "",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      offset : 0,
      scrollbars: true,
      standardScrollElements: "",
      setHeights: true,
      overflowScroll: true,
      updateHash: true,
      touchScroll:true,


      before: function(i,profilesection) {
            var ref = profilesection[i].attr("data-section-name");


            if(ref==="home") {
              $(".my-name").removeClass("tinier");
            }

            if(ref==="work") {
              $(".my-name").addClass("tinier");
            }

            if(ref==="resume") {
              $(".my-name").addClass("tinier");
            }

          },

      after:function(i,profilesection) {
            var ref = profilesection[i].attr("data-section-name");

            if(ref==="home") {

            }
            for(var j = 0;j < profilesection.length;j++) {
              if(j>i) {
              }
            }
          },
      afterResize:function() {},
      afterRender:function() {}
    });

    // ///
    //
    //
    // function initialPosition() {
    //
    //     var current = $.scrollify.current();
    //
    //     if(current.hasClass("ios7")===false) {
    //       var height = parseInt($(".ios7").height());
    //       var f = parseInt($(".features .gallery1").height()) - 50;
    //
    //       var top = 0 - (height*0.4) - (height-f);
    //       $(".ios7 .gallery0").css("top",top);
    //     } else {
    //       $(".features").find(".gallery0,.gallery1,.gallery2").addClass("moved");
    //     }
    //
    //   };
    //
    //   ///



     $(".links").on("click",$.scrollify.move);
  });
