 angular.module("myapp", [])

 .controller("SearchController", function($scope,$http) {
   $scope.search = {
   
   title :'Search Application',
   
   books:[
     {name:'Physics',dis:'Lorem Ipsum is simply dummy text of the printing and typesetting industr', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs45ZcvvZ8xE7FV7siHHIo-8Eg6RsRjUw4cxuBOsMUnxaYEFrkeQ'},
     {name:'Maths',dis:'Lorem Ipsum is simply dummy text of the printing and typesetting industr',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs45ZcvvZ8xE7FV7siHHIo-8Eg6RsRjUw4cxuBOsMUnxaYEFrkeQ'},
     {name:'Jquery',dis:'Lorem Ipsum is simply dummy text of the printing and typesetting industr',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs45ZcvvZ8xE7FV7siHHIo-8Eg6RsRjUw4cxuBOsMUnxaYEFrkeQ'},
     {name:'History',dis:'Lorem Ipsum is simply dummy text of the printing and typesetting industr',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs45ZcvvZ8xE7FV7siHHIo-8Eg6RsRjUw4cxuBOsMUnxaYEFrkeQ'},
     {name:'Chemistry',dis:'Lorem Ipsum is simply dummy text of the printing and typesetting industr',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs45ZcvvZ8xE7FV7siHHIo-8Eg6RsRjUw4cxuBOsMUnxaYEFrkeQ'}
      
   ]
   
   
 };
  //$scope.servicecall = 
    $http.get('http://it-ebooks-api.info/v1/search/jquery').then(function(response){
     //console.log(response.data)
	 $scope.mydata=response.data;
        });
    
   
});