var app=angular.module("mainModule",[]);

app.controller("SplashController",['$http',function($http){
    var topScope=this;
    this.testVar=13;
    this.file="laksdf";
    
    this.logFile = function logFile(){
        console.log(this.file);
    }
    
    this.uploadFileForAnalysis = function uploadFileForAnalysis(){
        console.log(this.file);
        $http.post('/fileanalyze',{file:this.file,info:"hi there"}).then(function successCallback(response){
            console.log("success");
        }),(function failureCallback(response){
            
        });
    }
    
	$('input[type=file]').on('change', function(event) {
		topScope.file = event.target.files[0];
	});
	
	
}]);