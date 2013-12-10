/*
  #!/usr/local/bin/node
  -*- coding:utf-8 -*-
 
  Copyright 2013 freedom Inc. All Rights Reserved.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  ---
  Created with Sublime Text 2.
  Date: Dec 10, 2013
  Time: 10:12 AM
  Desc: the error handler
 */


//mode
'use strict';

var mailServie = require("../services/mail");

/**
 * process app errors
 * @param  {object} app the instance of application
 * @return {null}     
 */
exports.appErrorProcess = function (app) {
    //config for production env
    app.configure("production", function () {
        //error hanlder
        app.error(function(err, req, res, next) {
            console.log(err);
            console.log("error:" + err.stack || err.message);
            mailServie.sendMail({
              subject : "FixedAssetManager_Server[App Error]",
              text    : err.message + "\n" + err.stack + "\n" + err.toString()
            });
            if (err instanceof PageNotFoundError) {
                res.render("errors/404");
            } else if (err instanceof ServerError) {
                res.render("errors/500");
            }
        });

        //catch all errors on process and send mail
        process.on("uncaughtException", function (err) {
            mailServie.sendMail({
                subject : "GiftManager[App Error]",
                text    : err.message + "\n" + err.stack + "\n" + err.toString()
            });
        });
    });
};