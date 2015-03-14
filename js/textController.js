(function() {

  var module = angular.module("dogtown",[]);

  var TextController = function($scope) {

    $scope.date = new Date();
    $scope.season = "Fall";

    //Header Section
    $scope.headerTournament = $scope.season + " 2014";
    $scope.headerDates = "September 20th & 21st";

    //Info Section
    $scope.infoSaturdayDate = "September 20th";
    $scope.infoSaturdayCourse = "Columbia Golf Course";
    $scope.infoSaturdayStartTime = "10:30 a.m.";

    $scope.infoSundayDate = "September 21st";
    $scope.infoSundayCourse = "Tamarack Golf Course";
    $scope.infoSundayStartTime = "10:30 a.m.";

    $scope.infoTournamentPrice = "$90.00";
    $scope.infoTournamentEntryDeadline = "Friday September 5, 2014";

    //Tee Times Section
    $scope.teeTimeSaturday = $scope.infoSaturdayDate + ' ' + $scope.infoSaturdayCourse;
    $scope.teeTimeSaturdayGroups = [
      {
        group:1,
        time: '10:30 a.m.',
        player1: 'Art Reel',
        player2: 'Bill Reel ',
        player3: 'Mike Parentin ',
        player4: 'Steve Stillwell '
      },
      {
        group:2,
        time: '10:38 a.m.',
        player1: 'Mark Curry',
        player2: 'Vince Spain',
        player3: 'John Sharamitaro',
        player4: 'Charlie Barden'
      },
      {
        group:3,
        time: '10:46 a.m.',
        player1: 'Rick Kroeger Jr',
        player2: 'Don Dillow',
        player3: 'Joe Finn',
        player4: 'Dennis Cordia'
      },
      {
        group:4,
        time: '10:54 a.m.',
        player1: 'Keith Crowe',
        player2: 'Mike A Colombo',
        player3: 'Tom Neaf',
        player4: 'Mike Colombo'
      },
      {
        group:5,
        time: '11:02 a.m.',
        player1: 'Jim Caruso',
        player2: 'Tim S OBrien',
        player3: 'Nate Hampton',
        player4: 'Sean Mattingly'
      },
      {
        group:6,
        time: '11:10 a.m.',
        player1: 'Steve Roper',
        player2: 'Steve Haley',
        player3: 'Clyde Woolbright',
        player4: 'Jon Long '
      },
      {
        group:7,
        time: '11:18 a.m.',
        player1: 'Jake King',
        player2: 'Dan Fahy',
        player3: 'Dave Cramer',
        player4: 'Jay Keeley '
      },
      {
        group:8,
        time: '11:26 a.m.',
        player1: 'Jim Dolan Jr.',
        player2: 'Mike Ebert',
        player3: 'Tim Fahy',
        player4: 'Brian Cramer'
      },
      {
        group:9,
        time: '11:34 a.m.',
        player1: 'Kevin Fromme',
        player2: 'Kevin Crowe',
        player3: 'Kevin Cramer',
        player4: 'Kevin Fahy '
      },
      {
        group:10,
        time: '11:42 a.m.',
        player1: 'Matt Crowe',
        player2: 'Jerry Vogt',
        player3: 'Bill Dame',
        player4: 'Patrick Wrzesinski'
      }
//      ,
//      {
//        group:11,
//        time: '',
//        player1: '',
//        player2: '',
//        player3: '',
//        player4: ''
//      },
//      {
//        group:12,
//        time: '',
//        player1: '',
//        player2: '',
//        player3: '',
//        player4: ''
//      }

    ];


    $scope.teeTimeSunday = $scope.infoSundayDate + ' ' + $scope.infoSundayCourse;
    $scope.teeTimeSundayGroups = [
      {
        "group":1,
        "time":"10:30",
        "player1":"Jon Long",
        "player2":"Steve Haley",
        "player3":"Bill Dame",
        "player4":"Don Dillow"
      },
      {
        "group":2,
        "time":"10.38",
        "player1":"Keith Crowe",
        "player2":"Jay Keeley",
        "player3":"Kevin Crowe",
        "player4":"Rick Kroeger Jr"
      },
      {
        "group":3,
        "time":"10:46",
        "player1":"Mike Colombo",
        "player2":"Mike Parentin ",
        "player3":"Steve Stillwell",
        "player4":"Tom Neaf "
      },
      {
        "group":4,
        "time":"10:54",
        "player1":"Mike A Colombo",
        "player2":"Mark Curry",
        "player3":"Dan Fahy",
        "player4":"John Sharamitaro "
      },
      {
        "group":5,
        "time":"11:02",
        "player1":"Vince Spain",
        "player2":"Joe Finn ",
        "player3":"Jake King",
        "player4":"Kevin Cramer"
      },
      {
        "group":6,
        "time":"11:10",
        "player1":"Clyde Woolbright",
        "player2":"Nate Hampton",
        "player3":"Tim Fahy",
        "player4":"Jim Dolan Jr. "
      },
      {
        "group":7,
        "time":"11:18",
        "player1":"Dennis Cordia",
        "player2":"Jim Caruso",
        "player3":"Charlie Barden",
        "player4":"Steve Roper"
      },
      {
        "group":8,
        "time":"11:26",
        "player1":"Tim O'Brien",
        "player2":"Matt Crowe",
        "player3":"Sean Mattingly",
        "player4":"Brian Cramer"
      },
      {
        "group":9,
        "time":"11:34",
        "player1":"Jerry Vogt",
        "player2":"Dave Cramer",
        "player3":"Kevin Fahy",
        "player4":"Mike Ebert"
      },
      {
        "group":10,
        "time":"11:42",
        "player1":"Kevin Fromme",
        "player2":"Art Reel",
        "player3":"Bill Reel",
        "player4":"Patrick Wrzesinski"
      }
//      ,
//      {
//        group:11,
//        time: '',
//        player1: '',
//        player2: '',
//        player3: '',
//        player4: ''
//      },
//      {
//        group:12,
//        time: '',
//        player1: '',
//        player2: '',
//        player3: '',
//        player4: ''
//      }
    ];

    //Flights Section

    //Rules Section

  };

  module.controller('TextController', ['$scope', TextController]);
}());