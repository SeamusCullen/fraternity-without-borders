
$(document).ready(function(){


    $('#fullpage').fullpage({

        anchors :['video-section','first-section','second-section','third-section','fourth-section','fifth-section']

    });

    $(".closebtn").click(function(){
        $("#myNav").css("height", "0%");
    });

    $("#menu_vertical").click(function(){
        $("#myNav").css("height", "100%");
    });
});
