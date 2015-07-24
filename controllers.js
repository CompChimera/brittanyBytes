var brittanyBytes = angular.module('brittanyBytes', []);

brittanyBytes.controller('AboutPage', function ($scope) {
  $scope.schools = [
    {'name': 'Dalhousie University',
     'Degree': 'Bachelor of Computer Science'},
    {'name': 'Halifax West Highschool',
     'snippet': 'Grade 12'}
  ];
  
  $scope.navigation = [
	{'url' : 'http://web.cs.dal.ca/~bkelly/angularTest/',
	'title' : 'About Me'},
	{'url':'http://web.cs.dal.ca/~bkelly/angularTest/blog.html',
	'title': 'Blog'},
	{'url':'http://web.cs.dal.ca/~bkelly/angularTest/github.html',
	'title': 'GitHub'}
  ];
});

