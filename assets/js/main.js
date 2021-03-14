



 // just some interesting CSS
        // for tabbed content 🙂
        //
        // inspired by:
        // https://www.google.com/intl/en-GB/chrome/devices/chromecast


        $(".sexytabs").tabs({
          show: {
              effect: "slide",
              direction: "left",
              duration: 200,
              easing: "easeOutBack"
          },
          hide: {
              effect: "slide",
              direction: "right",
              duration: 200,
              easing: "easeInQuad"
          }
      });
