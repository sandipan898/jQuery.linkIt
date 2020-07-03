/*
 * plugin: linkIt
 * author: Sandipan Das
 * version: 0.1.0
 * license: MIT
 */

 (function($) {
     $.fn.linkIt = function(options) {
        // alert(this.html());
        
        // default settings
        var settings = $.extend({
            href       :null,
            text       :null,
            target     :'_self',
        }, options);
        
        // alert(settings.whatever);
        
        // validation 
        if(settings.href == null) {
            console.log('You need an href option for linIt to work');
            return this;
        }

        return this.each(function() {
            var object = $(this);

            // Check for the text
            if(settings.text == null) {
                settings.text = object.text();
            }

            object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
        });

     }
 } (jQuery))