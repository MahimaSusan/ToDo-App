todoApp.directive('stopwatch', function() { 

  return {
  restrict: 'AE',
  templateUrl: 'stopwatch.html',
      transclude:true,
  scope: {
    title: '@title',
    todo :'=',
    currentTime: '=time'
  },
  
  link: function(scope, element, attrs, ctrl) {

      

  },
  
  controllerAs: 'timerCtrl',
  controller: function($scope, $interval,getLocalStorage,$state) {
      //$scope.todos = getLocalStorage.getTodos();
       //console.log($scope.todos);
       $scope.time=[];

   var self = this;
    var time = 0;  
    var mode = 1;  
    var status = 0;
    var timer_id; 
    self.play = 1;
    this.plays = function(interval) {

      self.play = 0;
      
      var timeRet;
 
    interval = 1000;  
    if(status == 0)
    {
      status = 1;
      function timeRun()
      {       
          if(time < 86400)
          {
            time++;
            timeRet =  self.getElapsedMs();
            //if(time == 10)
            //{
             // alert("Its 10 seconds")
           // }
            
            if(typeof(callback) === 'function') callback(timeRet);
          }               
      };
      return timer_id = setInterval(timeRun, interval);  

    }

    };
    
    self.pauses = function() {
    self.play = 1;
    if(status == 1)
    {
      status = 0;
      clearInterval(timer_id);
    }

    };
  
    self.stop = function() {
      self.play = 1;
       sec = (typeof(sec) !== 'undefined') ? sec : 0;
        time = sec;
      if(status == 1)
      {
        status = 0;
        clearInterval(timer_id);
      }

    
    };
    
    self.getTime = function() {
      return time;

     
    };


    
    self.getElapsedMs = function() {

    var second = time % 60;
    var minute = Math.floor(time / 60) % 60;
    var hour = Math.floor(time / 3600) % 60;
    
    second = (second < 10) ? '0'+second : second;
    minute = (minute < 10) ? '0'+minute : minute;
    hour = (hour < 10) ? '0'+hour : hour;
        
    var timeObj = hour+":"+minute+":"+second
    
    return timeObj;


      
    };
   $scope.completedToDo=[];
this.complete = function(todo){
  //localStorage.clear();
  //$scope.hide =true;
  $scope.showme=true;
    $scope.showme = !$scope.showme;
       console.log(todo);
     todo.done=true;
            console.log(todo);
           console.log($scope.todos);

 getLocalStorage.updateTodos($scope.todos);
     
      // $scope.completedToDo.push(todo.done);
         
        
        
//

};

this.remove = function(item){
  console.log($scope.todos);
  $scope.todos.splice(item, 1);
  $state.reload('activity_logger.todolog');
        localStorage.removeItem(item);
       getLocalStorage.updateTodos($scope.todos);
        
};
this.selectedRow = null; // initialize our variable to null
    $scope.setClickedRow = function(index) { //function that sets the value of selectedRow to current index
        this.selectedRow = index;
    }
    $('.list').on('click', function() {
        $(this).parent().prepend(this);
    });


  }

}});