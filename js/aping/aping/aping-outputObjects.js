"use strict";

apingApp.service('outputObjects', function () {

    this.getNew = function(_type, _platform) {

        var outputObject = {};

        switch(_type) {
            case "social":
                outputObject = {
                    platform : _platform || false,
                    blog_name : false,
                    blog_id : false,
                    blog_link : false,
                    type : false,
                    timestamp : false,
                    post_url : false,
                    intern_id : false,
                    text : false,
                    caption : false,
                    img_url : false,
                    img_isSmall : false,
                    source : false,
                    tag : false
                };
        }

        return outputObject;
    }

});