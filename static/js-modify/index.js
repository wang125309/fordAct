require("../../bower_components/zepto/zepto.js");
require("../../bower_components/zeptojs/src/touch.js");
require("../../bower_components/velocity/velocity.min.js");
require("../../bower_components/angular/angular.js");
require("../../bower_components/angular-sanitize/angular-sanitize.min.js");
require("../js/share.min.js");

indexCtrl = angular.module('app',['ngSanitize']).controller('indexCtrl',['$scope','$sce',function($scope,$sce){
    $scope.detailsShow = false;
    $scope.goNews = function() {
        $scope.detailsShow = true;
        $scope.blur = 'blur';
        $scope.eleShow = true;
        $scope.eleTitle = '新闻稿件';
        $.get("/backend/getNewsById/?id=1",function(data){
            $scope.eleDesc = function() {
                return $sce.trustAsHtml(data.data.desc);  
            }();
            $scope.$apply();
        });

    };

    $scope.goProduct = function() {
        $scope.detailsShow = true;
        $scope.productShow = true;
        $scope.blur = 'blur';
        $scope.type = 'product';
    };
    $scope.goProductAnnc = function() {
        $scope.productListShow = true;
        $scope.productShow = false;
        $scope.backShow = true;
        $.get("/backend/getProductList/",function(data){
            $scope.products = data.data;
            $scope.$apply();
        });
    };
    $scope.back = function() {
        if($scope.type == 'product') {
            $scope.productListShow = false;
            $scope.productShow = true;
            $scope.backShow = false;
        }
        else if($scope.type == 'com') {
            $scope.productListShow = false;
            $scope.comListShow = false;
            $scope.comShow = true;
            $scope.backShow = false;
            $scope.productShow = false;
        }
        else if($scope.type == 'leader') {
            $scope.productListShow = false;
            $scope.leaderListShow = false;
            $scope.comShow = true;
            $scope.backShow = false;
        }
    };
    $scope.goProductSettings = function() {
        location.href = "";
    };

    $scope.goProductDetail = function(id) {
        $.get("/backend/getProductById/?id="+id,function(data){
            $scope.productShow = false;
            $scope.productListShow = false;
            $scope.eleShow = true;
            $scope.backShow = false;
            $scope.upShow = true;
            $scope.type = 'product';
            $scope.eleTitle = data.data.title;
            $scope.eleDesc = function() {
                return $sce.trustAsHtml(data.data.desc);  
            }();
            $scope.$apply();
        });
    };
    $scope.goCul = function() {
        $scope.detailsShow = true;
        $scope.blur = 'blur';
        $scope.eleShow = true;
        $scope.upShow = false;
        $.get("/backend/getCulById/?id=1",function(data){
            $scope.eleTitle = data.data.title; 
            $scope.eleDesc = function() {
                return $sce.trustAsHtml(data.data.desc);  
            }();
            $scope.$apply();
        });
    };
    $scope.goCom = function() {
        $scope.detailsShow = true;
        $scope.blur = 'blur';
        $scope.comShow = true ;
    };
    $scope.goLeader = function() {
        $scope.leaderListShow = true;
        $scope.backShow = true;
        $scope.upShow = false;
        $scope.type = 'leader';
        $scope.comShow = false; 
    };
    $scope.goLeaderDetail = function(id) {
        $scope.comShow = false;
        $scope.detailsShow = true;
        $scope.blur = 'blur';
        $scope.eleShow = true;
        $scope.type = 'leader';
        $scope.upShow = true;
        $scope.leaderListShow = false;
        if(id == 1) {
            id = 6;
        }
        else if(id == 2) {
            id = 7;
        }
        else if(id == 3) {
            id = 8;
        }
        else if(id == 4) {
            id = 9;
        }
        $scope.leaderImgShow = true;
        $scope.leaderImg = "/static/image/" + id + ".jpg";
        $.get("/backend/getCulById/?id="+id,function(data){
            $scope.eleTitle = data.data.title; 
            $scope.eleDesc = function() {
                return $sce.trustAsHtml(data.data.desc);  
            }();
            $scope.$apply();
        });
        
    };
    $scope.goComDesc = function(id) {
        if (!id) {
            $scope.comListShow = true;
            $scope.comShow = false;
            $scope.detailsShow = true;
            $scope.blur = 'blur';
            $scope.backShow = true;
            $scope.type = 'com';
        }
        else if(id == 1) {
            $scope.comListShow = false;
            $scope.eleShow = true;
            $scope.backShow = false;
            $scope.upShow = true;
            $.get("/backend/getCulById/?id=4",function(data){
                $scope.detailsShow = true;
                $scope.blur ='blur';
                $scope.eleTitle = data.data.title;
                $scope.eleDesc = function() {
                    return $sce.trustAsHtml(data.data.desc);  
                }();
                $scope.$apply();
            });
        }
        else if(id == 2) {
            $scope.comListShow = false;
            $scope.eleShow = true;
            $scope.backShow = false;
            $scope.upShow = true;
            $.get("/backend/getCulById/?id=5",function(data){
                $scope.detailsShow = true;
                $scope.blur ='blur';
                $scope.eleTitle = data.data.title;
                $scope.eleDesc = function() {
                    return $sce.trustAsHtml(data.data.desc);  
                }();
                $scope.$apply();
            });
        }
    };
    $scope.goPos = function() {
        $scope.detailsShow = true;
        $scope.eleShow = true;
        $scope.blur = 'blur';
        $scope.eleTitle = '位置信息';
        $scope.eleDesc = function() {
            return $sce.trustAsHtml('<img class="pos" src="/static/image/posimg.jpg"/>');  
        }();
    };
    $scope.goImg = function() {

        location.href = '';
    };
    $scope.up = function() {
        $scope.upShow = false;
        if($scope.type == 'product') {
            $scope.productListShow = true;
            $scope.eleShow = false;
            $scope.backShow = true;

        }
        else if($scope.type == 'com') {
            $scope.comListShow = true;
            $scope.backShow = true; 
            $scope.eleShow = false;
        }
        else if($scope.type == 'leader') {
            $scope.leaderListShow = true;
            $scope.backShow = true; 
            $scope.eleShow = false;

        }
    };
    $scope.close = function() {
        $scope.detailsShow = false;
        $scope.productShow = false;
        $scope.eleShow = false;
        $scope.productShow = false;
        $scope.productListShow = false;
        $scope.blur = '';
        $scope.comShow = false ;
        $scope.comListShow = false;
        $scope.leaderListShow = false;
        $scope.leaderShow = false;
        $scope.leaderImgShow = false;
    };

}])
.directive('init',function(){
    return {
        link : function(scope, element, attr) {
            window.onload = function(){
                w = $(window).width();
                h = $(window).height();
                $(".finger").on('longTap',function(){
                    $(".page1").hide();
                    $(".page2").velocity("fadeIn");
                });
            }

        }
    }
});

indexCtrl.$inject = ['$scope','indexCtrl']; 
