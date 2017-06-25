module.exports = {
    pageAdapt: function (footer) {
        $(footer).removeClass("navbar-fixed-bottom");

        if($(window).height() === $(document).height()){
            $(footer).addClass("navbar-fixed-bottom");
        }else{
            $(footer).removeClass("navbar-fixed-bottom");
        }
    }
}