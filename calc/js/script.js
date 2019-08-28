$(document).ready(function () {
    
    if (delement_floatblock.de_url_img != '' && delement_floatblock.de_include_up == "Y")
    {
        $("body").append("<div class='de-fl-upScroll' href='#'><img src='" + delement_floatblock.de_url_img + "'></a>");
        scroll_block = $('.de-fl-upScroll');
        scroll_block.css("bottom", delement_floatblock.de_up_pos_xy + 'px');

        if (delement_floatblock.de_up_pos == 0) {
            scroll_block.css("left", delement_floatblock.de_up_pos_yx + 'px');
        } else if (delement_floatblock.de_up_pos == 1) {
            scroll_block.css("right", delement_floatblock.de_up_pos_yx + 'px');
        }

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                scroll_block.fadeIn();
            } else {
                scroll_block.fadeOut();
            }
        });

        scroll_block.click(function () {
            $("html, body").animate({scrollTop: 0}, 500);
            return false;
        });
    }


}); 
