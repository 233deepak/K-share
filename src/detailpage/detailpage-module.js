
angular.module( 'apf.detailpageModule', [])
.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/detailpage', {
        templateUrl: 'src/detailpage/detailpage.html',
        controller: 'detailpageController',
        resolve: {
          document : function(storageService) {
            var defaultDocumnt = {
               htmlContent : "<h6></h6><h3><b>Short description</b></h3><div>Heap sort is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for remaining element.<br></div><p><br></p><h4>Explanation</h4><ul><li>​Build a max heap from the input data.</li>"
                    +"<li>At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of heap by 1. Finally, heapify the root of tree.<br></li> <li>Repeat above steps while size of heap is greater than 1.<br></li> </ul>",
               videoLinks : ["https://www.youtube.com/embed/B7hVxCmfPtM"],
               docLinks : [{name:"Note on heap",link:"https://ocw.mit.edu/terms/"},{name:"Heap Sort",link:"https://ocw.mit.edu/terms/"}],  
               documenID : "121",
               metaData : {}
            };
            var metaData =  storageService.getObject("current-meta-data");
            defaultDocumnt.metaData= metaData;
            var currentDocument = storageService.getObject("current-document-id");
            storageService.setObject(defaultDocumnt.documenID , defaultDocumnt);
            
            var comments = [];
            comments.push({userImg : "bandmember.jpg" , altText:"Avatar" , userName:"Anja" ,commentDate:"Sep 29, 2015, 9:12 PM",commentText :"Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."});
            comments.push({userImg : "bird.jpg" , altText:"Avatar" , userName:"John Row" ,commentDate:"Sep 25, 2015, 8:25 PM",commentText :"I am so happy for you man! Finally. I am looking forward to read about your trendy life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."});
            storageService.setObject(defaultDocumnt.documenID+"CMNT" , comments);
            var currentDocument = storageService.getObject(currentDocument);
            //storageService.setObject(currentDocument.documenID+"CMNT" , comments);
            currentDocument.metaData = metaData;
            return currentDocument;
          }
          
        }
      });
  }]);
