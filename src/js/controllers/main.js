
function MainController ($scope) {
  $scope.likes = 0;
  $scope.likeDisplay = "Like";
  $scope.toggleDisplay = "Toggle Like"
  $scope.upVote = true;

  $scope.addLike = function () {
    if($scope.upVote) {
      $scope.likes++
    } else {
      $scope.likes--
    }
    if ($scope.likes === 1) {
      $scope.likeDisplay = $scope.likes + ' Like'
    } else {
      $scope.likeDisplay = $scope.likes + ' Likes'
    }
    console.log("stuff happened");
    console.log($scope.likes)
  };

  $scope.toggleLike = function () {
    $scope.upVote = !$scope.upVote
    if ($scope.upVote) {
      $scope.toggleDisplay = "Toggle Like"
    }
    if (!$scope.upVote) {
      $scope.toggleDisplay = "Toggle Dislike"
    }
  }

};

MainController.$inject = ['$scope'];

export { MainController };
