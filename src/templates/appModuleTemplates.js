angular.module('apf.appModule').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/admin/automated-tasks/automated-tasks.html',
    "<div class=\"container-fluid apf-objects-view\"><div ng-if=\"automatedTasksLoaded\"><div ng-if=\"automatedTasks && automatedTasks.length > 0\"><div pf-toolbar=\"\" class=\"row\" config=\"toolbarConfig\"></div><div object-list=\"\" list-class=\"row\" list-id=\"{{listId}}\" list-config=\"listConfig\" items=\"automatedTasks\" columns=\"columns\"></div></div><div ng-if=\"!automatedTasks || automatedTasks.length < 1\"><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-cogs\"></i></div><h1>Deploy an AutomatedTask</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><div class=\"blank-slate-pf-main-action\"><button class=\"btn btn-primary btn-lg\">Deploy New AutomatedTask</button></div></div></div></div></div>"
  );


  $templateCache.put('src/admin/backups/backups.html',
    "<div class=\"container-fluid container-cards-pf apf-objects-view\"><div ng-if=\"backupsLoaded\"><div ng-if=\"backups && backups.length > 0\"><div pf-toolbar=\"\" class=\"row\" config=\"toolbarConfig\"></div><div object-list=\"\" list-class=\"row\" list-id=\"{{listId}}\" list-config=\"listConfig\" items=\"backups\" columns=\"columns\"></div></div><div ng-if=\"!backups || backups.length < 1\"><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-cogs\"></i></div><h1>Create a Backup</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><div class=\"blank-slate-pf-main-action\"><button class=\"btn btn-primary btn-lg\">Create a New Backup</button></div></div></div></div></div>"
  );


  $templateCache.put('src/admin/user-admin/groups.html',
    "<div class=\"container-fluid container-cards-pf apf-objects-view\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Admin</li><li>User Admin</li><li>Groups</li></ol><div ng-if=\"groupsLoaded\"><div ng-if=\"groups && groups.length > 0\"><div pf-toolbar=\"\" class=\"row\" config=\"toolbarConfig\"></div><div object-list=\"\" list-class=\"row\" list-id=\"{{listId}}\" list-config=\"listConfig\" items=\"groups\" columns=\"columns\"></div></div><div ng-if=\"!groups || groups.length < 1\"><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-cogs\"></i></div><h1>Add Groups</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><div class=\"blank-slate-pf-main-action\"><button class=\"btn btn-primary btn-lg\">Add Groups</button></div></div></div></div></div>"
  );


  $templateCache.put('src/admin/user-admin/roles.html',
    "<div class=\"container-fluid container-cards-pf apf-objects-view\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Admin</li><li>User Admin</li><li>Roles</li></ol><div ng-if=\"rolesLoaded\"><div ng-if=\"roles && roles.length > 0\"><div pf-toolbar=\"\" class=\"row\" config=\"toolbarConfig\"></div><div object-list=\"\" list-class=\"row\" list-id=\"{{listId}}\" list-config=\"listConfig\" items=\"roles\" columns=\"columns\"></div></div><div ng-if=\"!roles || roles.length < 1\"><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-cogs\"></i></div><h1>Add Roles</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><div class=\"blank-slate-pf-main-action\"><button class=\"btn btn-primary btn-lg\">Add Roles</button></div></div></div></div></div>"
  );


  $templateCache.put('src/admin/user-admin/users.html',
    "<div class=\"container-fluid container-cards-pf apf-objects-view\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Admin</li><li>User Admin</li><li>Users</li></ol><div ng-if=\"usersLoaded\"><div ng-if=\"users && users.length > 0\"><div pf-toolbar=\"\" class=\"row\" config=\"toolbarConfig\"></div><div object-list=\"\" list-class=\"row\" list-id=\"{{listId}}\" list-config=\"listConfig\" items=\"users\" columns=\"columns\"></div></div><div ng-if=\"!users || users.length < 1\"><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-cogs\"></i></div><h1>Add Users</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><div class=\"blank-slate-pf-main-action\"><button class=\"btn btn-primary btn-lg\">Add Users</button></div></div></div></div></div>"
  );


  $templateCache.put('src/app/controllers/heading.html',
    "<span class=\"heading-class\">{{notificationGroup.heading}}</span> <span class=\"panel-counter sub-heading\">{{notificationGroup.unreadCount}} New {{notificationGroup.heading}}</span>"
  );


  $templateCache.put('src/app/controllers/notification-body.html',
    "<div ng-if=\"!customScope.drawerExpanded\" ng-click=\"customScope.markNotificationRead(notification, notificationGroup)\"><div class=\"dropdown pull-right dropdown-kebab-pf\"><button class=\"btn btn-link dropdown-toggle\" type=\"button\" ng-click=\"customScope.clearNotification(notification, notificationGroup)\"><span class=\"pficon pficon-close\"></span></button></div><span ng-if=\"notification.data.status\" class=\"pull-left {{customScope.getNotficationStatusIconClass(notification)}}\" ng-click=\"customScope.markRead(notification, notificationGroup)\"></span> <span class=\"drawer-pf-notification-message apf-notification-message\" ng-click=\"customScope.markRead(notification, notificationGroup)\" tooltip-popup-delay=\"500\" tooltip-placement=\"bottom\" tooltip=\"{{notification.data.message}}\">{{notification.data.message}}</span><div ng-if=\"!notification.data.inProgress\" class=\"drawer-pf-notification-info\" ng-click=\"customScope.markRead(notification, notificationGroup)\"><span class=\"date\">{{notification.timeStamp | date:'MM/dd/yyyy'}}</span> <span class=\"time\">{{notification.timeStamp | date:'h:mm:ss a'}}</span></div><div ng-if=\"notification.data.inProgress\" class=\"mini-progress clearfix\"><span class=\"time\">{{notification.timeStamp | date:'h:mm:ss a'}}</span><div class=\"mini-progress-area\"><div class=\"progress\"><span class=\"progress-bar progress-bar-info\" ng-style=\"{width: notification.data.percentComplete + '%'}\" tooltip=\"{{notification.data.percentComplete}}% Complete\"></span></div></div></div></div><div ng-if=\"customScope.drawerExpanded\" class=\"container-fluid expanded-notification\" ng-click=\"customScope.markNotificationRead(notification, notificationGroup)\"><div class=\"row\"><div ng-class=\"{'col-md-4': notificationGroup.notificationType == 'task'}\" class=\"col-sm-6\"><span ng-if=\"notification.data.status\" class=\"pull-left {{customScope.getNotficationStatusIconClass(notification)}}\" ng-click=\"customScope.markRead(notification, notificationGroup)\"></span> <span class=\"drawer-pf-notification-message apf-notification-message\" ng-click=\"customScope.markRead(notification, notificationGroup)\" tooltip-append-to-body=\"true\" tooltip-popup-delay=\"500\" tooltip-placement=\"bottom\" tooltip=\"{{notification.data.message}}\">{{notification.data.message}}</span></div><div class=\"col-md-4 col-sm-3\" ng-if=\"notificationGroup.notificationType == 'task'\"><div class=\"drawer-pf-notification-info expanded-info\" ng-click=\"customScope.markRead(notification, notificationGroup)\"><span class=\"info-title\">Started:</span> <span class=\"date\">{{notification.data.startTime | date:'MM/dd/yyyy'}}</span> <span class=\"time\">{{notification.data.startTime | date:'h:mm:ss a'}}</span></div><div ng-if=\"notification.data.inProgress\" class=\"progress\"><div class=\"progress-bar progress-bar-info\" ng-style=\"{width: notification.data.percentComplete + '%'}\" tooltip=\"{{notification.data.percentComplete}}% Complete\"></div></div></div><div class=\"col-md-4 col-sm-3\" ng-if=\"notificationGroup.notificationType == 'task'\"><div class=\"drawer-pf-notification-info\" ng-click=\"customScope.markRead(notification, notificationGroup)\"><span class=\"info-title\">Completed:</span> <span class=\"date\">{{notification.data.endTime | date:'MM/dd/yyyy'}}</span> <span class=\"time\">{{notification.data.endTime | date:'h:mm:ss a'}}</span></div></div><div class=\"col-sm-6\" ng-if=\"notificationGroup.notificationType == 'event'\"><div class=\"drawer-pf-notification-info\" ng-click=\"customScope.markRead(notification, notificationGroup)\"><span class=\"date\">{{notification.data.timeStamp | date:'MM/dd/yyyy'}}</span> <span class=\"time\">{{notification.data.timeStamp | date:'h:mm:ss a'}}</span></div></div><div class=\"pull-right dropdown-kebab-pf\"><button class=\"btn btn-link dropdown-toggle\" type=\"button\" ng-click=\"customScope.clearNotification(notification, notificationGroup)\"><span class=\"pficon pficon-close\"></span></button></div></div></div>"
  );


  $templateCache.put('src/app/controllers/notification-footer.html',
    "<div class=\"drawer-pf-action\"><a class=\"btn btn-link btn-block\" role=\"button\" ng-class=\"{'disabled': !notificationGroup.notifications || notificationGroup.notifications.length === 0}\" ng-click=\"customScope.clearAllNotifications(notificationGroup)\"><span class=\"pficon pficon-close\"></span> <span>Clear All</span></a></div>"
  );


  $templateCache.put('src/app/controllers/subheading.html',
    "<span class=\"subheading-class\">{{notificationGroup.unreadCount}} New</span>"
  );


  $templateCache.put('src/contribute/contribute-detail.html',
    "<div ng-controller=\"DetailsGeneralController\"><div pf-wizard-substep=\"\" step-title=\"Topic Details\" next-enabled=\"detailsGeneralComplete\" step-id=\"details-general\" step-priority=\"0\" on-show=\"onShow\" focus-selectors=\"focusSelectors\" review-template=\"{{reviewTemplate}}\" show-review-details=\"true\"><form class=\"form-horizontal\"><div pf-form-group=\"\" pf-label=\"Topic Title\" pf-label-class=\"col-sm-3 col-md-2\" pf-input-class=\"col-sm-9 col-md-10\" required><input id=\"new-name\" name=\"name\" ng-model=\"data.title\" type=\"text\" ng-change=\"updateName()\" required></div><div pf-form-group=\"\" pf-label=\"Category\" pf-label-class=\"col-sm-5 col-md-2\" pf-input-class=\"col-sm-7 col-md-4\"><select class=\"selectpicker\" ng-model=\"data.category\" title=\"Select category here...\"><option data-hidden=\"true\"><option>Mathematics<option>Computer-science<option>Biology<option disabled>Physics</select></div><div pf-form-group=\"\" pf-label=\"Add tags to your topic\" pf-label-class=\"col-sm-5 col-md-2\" pf-input-class=\"col-sm-7 col-md-7\"><tags-input ng-model=\"data.tags\"></tags-input></div></form></div></div>"
  );


  $templateCache.put('src/contribute/contribute-review-content.html',
    "<div ng-controller=\"DetailsReviewController\"><form class=\"form\"><div class=\"wizard-pf-review-item\"><span class=\"wizard-pf-review-item-label\">Content:</span> <span class=\"wizard-pf-review-item-value\" id=\"content\"></span></div></form></div>"
  );


  $templateCache.put('src/contribute/contribute-review-second.html',
    "<div ng-controller=\"DetailsReviewController\"><form class=\"form\"><div class=\"wizard-pf-review-item\"><span class=\"wizard-pf-review-item-label\">Videos:</span> <span class=\"wizard-pf-review-item-value\"><span ng-repeat=\"video in data.videos\">{{video.link}},</span></span></div><div class=\"wizard-pf-review-item\"><span class=\"wizard-pf-review-item-label\">Files:</span> <span class=\"wizard-pf-review-item-value\"><span ng-repeat=\"file in data.files\">{{file.name}},</span></span></div></form></div>"
  );


  $templateCache.put('src/contribute/contribute-review.html',
    "<div ng-controller=\"DetailsReviewController\"><form class=\"form\"><div class=\"wizard-pf-review-item\"><span class=\"wizard-pf-review-item-label\">Title:</span> <span class=\"wizard-pf-review-item-value\">{{data.title}}</span></div><div class=\"wizard-pf-review-item\"><span class=\"wizard-pf-review-item-label\">Category:</span> <span class=\"wizard-pf-review-item-value\">{{data.category}}</span></div><div class=\"wizard-pf-review-item\"><span class=\"wizard-pf-review-item-label\">Tags:</span> <span class=\"wizard-pf-review-item-value\">{{data.tags}}</span></div></form></div>"
  );


  $templateCache.put('src/contribute/contribute-second-step.html',
    "<div ng-controller=\"SecondStepController\"><div pf-wizard-step=\"\" focus-selectors=\"focusSelectors\" step-title=\"Documents\" next-tooltip=\"secondStepNextTooltip\" prev-tooltip=\"secondStepPrevTooltip\" substeps=\"false\" step-id=\"configuration\" step-priority=\"1\" show-review=\"true\" review-template=\"src/contribute/contribute-review-second.html\"><form class=\"form-horizontal\"><div ng-repeat=\"video in data.videos\" pf-form-group=\"\" pf-label=\"Video Link{{video.id}}\" pf-label-class=\"col-sm-3 col-md-2\" pf-input-class=\"col-sm-9 col-md-6\"><input id=\"video.id\" name=\"ipsum\" ng-model=\"video.link\" type=\"text\"></div><div pf-form-group=\"\" pf-label=\"Add/Remove Videos\"><button type=\"button\" ng-click=\"addMoreVideo()\"><span class=\"fa fa-plus\"></span></button> <button type=\"button\" ng-click=\"removeVideo()\"><span class=\"fa fa-minus\"></span></button></div><div pf-form-group=\"\" pf-label=\"Add Notes\"><ng-dropzone class=\"dropzone\" options=\"dzOptions\" callbacks=\"dzCallbacks\" methods=\"dzMethods\"></ng-dropzone></div></form></div></div>"
  );


  $templateCache.put('src/contribute/contribute-submit.html',
    "<div ng-controller=\"SubmitDraftController\"><div pf-wizard-substep=\"\" step-title=\"Submit Draft\" step-id=\"review-progress\" step-priority=\"1\" next-enabled=\"true\" prev-enabled=\"false\" ok-to-nav-away=\"true\" wz-disabled=\"false\" on-show=\"onShow\"><div class=\"wizard-pf-contents\" ng-controller=\"SubmitDraftController\"><div class=\"wizard-pf-process blank-slate-pf\" ng-if=\"!deploymentComplete\"><div class=\"spinner spinner-lg blank-slate-pf-icon\"></div><h5 class=\"blank-slate-pf-main-action\" id=\"example_source_deployment-in-progress\">Draft creation in progress</h5><p class=\"blank-slate-pf-secondary-action\">Thank you for helping us grow</p></div><div class=\"wizard-pf-complete blank-slate-pf\" ng-if=\"deploymentComplete\"><div class=\"wizard-pf-success-icon\"><span class=\"glyphicon glyphicon-ok-circle\"></span></div><h5 class=\"blank-slate-pf-main-action\" id=\"example_source_deployment-was-successful\">Draft was submitted successful</h5><p class=\"blank-slate-pf-secondary-action\">Your Topic will be published soon</p></div></div></div></div>"
  );


  $templateCache.put('src/contribute/contribute-summary.html',
    "<div ng-controller=\"SummaryController\"><div pf-wizard-substep=\"\" step-title=\"Summary\" step-id=\"review-summary\" step-priority=\"0\" next-enabled=\"true\" prev-enabled=\"true\" ok-to-nav-away=\"true\" wz-disabled=\"false\" on-show=\"onShow\"><div pf-wizard-review-page=\"\" shown=\"pageShown\" wizard-data=\"data\"></div></div></div>"
  );


  $templateCache.put('src/contribute/contribute-wizard.html',
    "<div pf-wizard=\"\" wizard-title=\"Wizard Title\" wizard-ready=\"wizardReady\" on-finish=\"finishedWizard()\" on-cancel=\"cancelDeploymentWizard()\" next-title=\"nextButtonTitle\" next-callback=\"nextCallback\" back-callback=\"backCallback\" wizard-done=\"deployComplete || deployInProgress\" sidebar-class=\"example-wizard-sidebar\" step-class=\"example-wizard-step\" loading-secondary-information=\"secondaryLoadInformation\" content-height=\"450\" on-step-changed=\"stepChanged(step, index)\"><div pf-wizard-step=\"\" step-title=\"Details\" next-tooltip=\"firstStepNextTooltip\" prev-tooltip=\"firstStepPrevTooltip\" substeps=\"true\" step-id=\"details\" step-priority=\"0\" show-review=\"true\" show-review-details=\"true\"><div ng-include=\"'src/contribute/contribute-detail.html'\"></div><div pf-wizard-substep=\"\" step-title=\"Content\" next-enabled=\"true\" step-id=\"details-extra\" step-priority=\"1\" show-review=\"true\" show-review-details=\"true\" review-template=\"src/contribute/contribute-review-content.html\"><div text-angular=\"text-angular\" name=\"htmlcontent\" ng-model=\"data.htmlcontent\" ta-disabled=\"disabled\" class=\"ta-editor\"></div></div></div><div ng-include=\"'src/contribute/contribute-second-step.html'\"></div><div pf-wizard-step=\"\" step-title=\"Review\" next-tooltip=\"reviewStepNextTooltip\" prev-tooltip=\"reviewStepPrevTooltip\" substeps=\"true\" step-id=\"review\" step-priority=\"2\"><div ng-include=\"'src/contribute/contribute-summary.html'\"></div><div ng-include=\"'src/contribute/contribute-submit.html'\"></div></div></div>"
  );


  $templateCache.put('src/contribute/contribute.html',
    "contribute"
  );


  $templateCache.put('src/dashboard/dashboard.html',
    "<div class=\"col-md-12\"><div pf-toolbar=\"\" id=\"exampleToolbar\" config=\"toolbarConfig\"><div class=\"input-group\" id=\"adv-search\"><input type=\"text\" class=\"form-control\" placeholder=\"Search for snippets\" id=\"searchkey\"><div class=\"input-group-btn\"><div class=\"btn-group\" role=\"group\"><button type=\"button\" class=\"btn btn-primary\" ng-click=\"searchByKeyWord()\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></button></div></div></div></div></div><div class=\"col-md-12\" ng-if=\"viewType == 'listView' && showComponent\"><div pf-list-view=\"\" config=\"listConfig\" page-config=\"pageConfig\" items=\"items\" empty-state-config=\"items.length === 0 && filterConfig.appliedFilters.length > 0 ? noItemsConfig : emptyStateConfig\"><div class=\"list-view-pf-description\"><div class=\"list-group-item-heading list-group-item-text\">{{item.title}}</div></div><div class=\"list-view-pf-additional-info\"><div class=\"list-view-pf-additional-info-item\">{{item.createdBy}}</div><div class=\"list-view-pf-additional-info-item\">{{item.createdOn}}</div><div class=\"list-view-pf-additional-info-item\">{{item.views}}</div></div></div></div><div class=\"col-md-12\" ng-if=\"viewType == 'cardView' && showComponent\"><div pf-card-view=\"\" config=\"listConfig\" page-config=\"{}\" items=\"items\" empty-state-config=\"items.length === 0 && filterConfig.appliedFilters.length > 0 ? noItemsConfig : emptyStateConfig\"><div class=\"card-pf-top-element\"><div class=\"img\"><img src=\"../styles/images/Array.jpeg\"></div><h2 class=\"card-pf-title text-center\">{{item.title}}</h2><div class=\"card-pf-items text-center\"><div class=\"card-pf-item\"><span class=\"pficon pficon-screen\"></span> <span class=\"card-pf-item-text\">{{item.views}}</span></div></div><p class=\"card-pf-info text-center\"><strong>Created By</strong> {{item.createdBy}}<br><strong>On</strong> {{item.createdOn}}</p></div></div></div>"
  );


  $templateCache.put('src/detailpage/detailpage.html',
    "<div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-6\"><h4><strong>Algorithms</strong>&gt;<strong>{{document.metaData.title}}</strong></h4></div><div class=\"col-md-6 card-social-element\"><span><ul><li><a href=\"\" onclick=\"shareOnfacebook()\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li><li><a href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li><li><a href=\"#\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li><!--<li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n" +
    "                  <li><a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>--></ul></span></div></div><div class=\"row content\"><div class=\"col-sm-12\"><div id=\"content\"></div><div ng-repeat=\"videoLink in document.videoLinks\"><iframe width=\"500\" height=\"315\" ng-src=\"{{trustSrc(videoLink)}}\" allowfullscreen></iframe></div><h2>Download Notes</h2><ul ng-repeat=\"doc in document.docLinks\"><li><a href=\"{{doc.link}}\">{{doc.name}}</a></li></ul><h4>Leave a Comment:</h4><form role=\"form\"><div class=\"form-group\"><textarea class=\"form-control\" rows=\"3\" ng-model=\"commentText\"></textarea></div><button type=\"submit\" class=\"btn btn-success\" ng-click=\"addComment()\">Submit</button></form><br><br><p><span class=\"badge\">2</span> Comments:</p><br><div class=\"row\"><div ng-repeat=\"comment in comments\"><div class=\"col-sm-2 text-center\"><img src=\"{{comment.userImg}}\" class=\"img-circle\" height=\"65\" width=\"65\" alt=\"{{comment.altText}}\"></div><div class=\"col-sm-10\"><h4>{{comment.userName}}<small>{{comment.commentDate}}</small></h4><p>{{comment.commentText}}</p><br></div></div></div></div></div></div><footer class=\"container-fluid\"><p>Footer Text</p></footer>"
  );


  $templateCache.put('src/login/login-form.html',
    "<div class=\"modal-overlay\" ng-attr-id=\"id-mo\" tabindex=\"-1\" aria-labelledby=\"modal\" aria-hidden=\"true\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" ng-click=\"cancel()\" aria-hidden=\"true\" aria-label=\"Close\"><span class=\"pficon pficon-close\"></span></button><h4 class=\"modal-title\" ng-attr-id=\"id\">Sign Up</h4></div><div class=\"modal-body\"><div class=\"row\"><div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2\"><div class=\"card-pf\"><header class=\"login-pf-header\"><h1>Log In to Your Account</h1></header><form><div class=\"form-group\"><label class=\"sr-only\" for=\"exampleInputEmail1\">Email address</label><input type=\"email\" class=\"form-control input-lg\" id=\"exampleInputEmail1\" placeholder=\"Email address\"></div><div class=\"form-group\"><label class=\"sr-only\" for=\"exampleInputPassword1\">Password</label><input type=\"password\" class=\"form-control input-lg\" id=\"exampleInputPassword1\" placeholder=\"Password\"></div><div class=\"form-group login-pf-settings\"><label class=\"checkbox-label\"><input type=\"checkbox\">Keep me logged in for 30 days</label><a href=\"#\">Forgot password?</a></div><button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" ng-click=\"login()\">Log In</button></form><p class=\"login-pf-signup\">Need an account?<a href=\"#\">Sign up</a></p></div><!-- card --></div><!-- col --></div><!-- row --></div><!-- col --></div><!-- row --><div class=\"row\"><div class=\"col-sm-6\"><div id=\"fb-login-button\" class=\"fb-login-button spacer\" data-max-rows=\"1\" data-size=\"large\" data-button-type=\"continue_with\" data-show-faces=\"false\" data-auto-logout-link=\"false\" data-use-continue-as=\"false\" onlogin=\"checkLoginState()\"></div></div><div class=\"col-sm-6\"><div class=\"g-signin2 spacer\" data-longtitle=\"true\" data-onsuccess=\"onSignIn\"><!--<div class=\"g-signin2 spacer\" data-onsuccess=\"onSignIn()\"></div> --></div></div><div class=\"row\"></div></div><div class=\"modal-footer\"></div><script src=\"https://apis.google.com/js/platform.js\" async defer></script><script>/* function signOut() {\n" +
    "        var auth2 = gapi.auth2.getAuthInstance();\n" +
    "        auth2.signOut().then(function () {\n" +
    "          console.log('User signed out.');\n" +
    "        });\n" +
    "      }*/</script>"
  );


  $templateCache.put('src/login/login.html',
    ""
  );


  $templateCache.put('src/reports/reports.html',
    "<div class=\"container-fluid apf-objects-view\"></div>"
  );

}]);
