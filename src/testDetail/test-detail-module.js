
angular.module( 'apf.testDetailModule', [])
.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/testDetail', {
        templateUrl: 'src/testDetail/test-detail.html',
        controller: 'testDetailController',
        resolve: {
          testDetail : function(storageService,awsStorageService,$route) {
            
            var testDetail = {
              questions : [
                {
                  description : "Transport of water across aquaporins is regulated by the presence of which of the following sequence of three " +
                  "highly conserved amino acid ?",
                  response:"",
                  options :[
                    {text:"Ala-Asn-Pro",id:1},
                    {text:"Pro-Asn-Ala",id:2},
                    {text:"Asn-Pro-Ala",id:3},
                    {text:"Pro-Ala-Asn",id:4}
                  ]
                } ,
                {
                  description : "Which of the cyclins have/has essential functions in S-phase of cell cycle ?",
                  response:"",
                  options :[
                    {text:"A-type",id:1},
                    {text:"B-type",id:2},
                    {text:"D-type",id:3},
                    {text:"Both B and D -types",id:4}
                  ]
                },
                {
                  description : "During generation of an action potential ,depolarization is due to ",
                  response:"",
                  options :[
                    {text:"K+efflux",id:1},
                    {text:"Na+efflux",id:2},
                    {text:"Na+infflux",id:3},
                    {text:"K+efflux",id:4}
                  ]
                },
                {
                  description : "Transport of water across aquaporins is regulated by the presence of which of the following sequence of three " +
                  "highly conserved amino acid ?",
                  response:"",
                  options :[
                    {text:"Ala-Asn-Pro",id:1},
                    {text:"Pro-Asn-Ala",id:2},
                    {text:"Asn-Pro-Ala",id:3},
                    {text:"Pro-Ala-Asn",id:4}
                  ]
                } ,
                {
                  description : "Transport of water across aquaporins is regulated by the presence of which of the following sequence of three " +
                  "highly conserved amino acid ?",
                  response:"",
                  options :[
                    {text:"Ala-Asn-Pro",id:1},
                    {text:"Pro-Asn-Ala",id:2},
                    {text:"Asn-Pro-Ala",id:3},
                    {text:"Pro-Ala-Asn",id:4}
                  ]
                } ,
                {
                  description : "Transport of water across aquaporins is regulated by the presence of which of the following sequence of three " +
                  "highly conserved amino acid ?",
                  response:"",
                  options :[
                    {text:"Ala-Asn-Pro",id:1},
                    {text:"Pro-Asn-Ala",id:2},
                    {text:"Asn-Pro-Ala",id:3},
                    {text:"Pro-Ala-Asn",id:4}
                  ]
                } ,
                {
                  description : "Which of the cyclins have/has essential functions in S-phase of cell cycle ?",
                  response:"",
                  options :[
                    {text:"A-type",id:1},
                    {text:"B-type",id:2},
                    {text:"D-type",id:3},
                    {text:"Both B and D -types",id:4}
                  ]
                },
                {
                  description : "During generation of an action potential ,depolarization is due to ",
                  response:"",
                  options :[
                    {text:"K+efflux",id:1},
                    {text:"Na+efflux",id:2},
                    {text:"Na+infflux",id:3},
                    {text:"K+efflux",id:4}
                  ]
                },
                {
                  description : "Transport of water across aquaporins is regulated by the presence of which of the following sequence of three " +
                  "highly conserved amino acid ?",
                  response:"",
                  options :[
                    {text:"Ala-Asn-Pro",id:1},
                    {text:"Pro-Asn-Ala",id:2},
                    {text:"Asn-Pro-Ala",id:3},
                    {text:"Pro-Ala-Asn",id:4}
                  ]
                } ,
                {
                  description : "Transport of water across aquaporins is regulated by the presence of which of the following sequence of three " +
                  "highly conserved amino acid ?",
                  response:"",
                  options :[
                    {text:"Ala-Asn-Pro",id:1},
                    {text:"Pro-Asn-Ala",id:2},
                    {text:"Asn-Pro-Ala",id:3},
                    {text:"Pro-Ala-Asn",id:4}
                  ]
                } 
          
              ],
              title : "Life science Test"
            };
           
            return testDetail;
          }
        }
      });
  }]);
