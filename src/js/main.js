/*** MAIN.JS ***/

(function(){
    
    /*Mobile menu*/
    
    var headerMenuBtn = $('.header-menu-btn'),
        headerMenu    = $('.header-menu');
    
    function toggleMenu(par){
        
        if(par == "toggle"){
            headerMenuBtn.toggleClass('m--open');
            
            if(headerMenuBtn.hasClass('m--open')){
                headerMenu.slideDown(100);
            }else headerMenu.slideUp(100);
        }else if(par == "close" ){
            headerMenuBtn.removeClass('m--open')
            headerMenu.slideUp(100);
        }
        

        
    }
    
    headerMenuBtn.on('click', function(){
        toggleMenu('toggle')
    });
    $(window).on('resize', function(){
        toggleMenu('close')
    });
})();