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
  Time: 10:07 AM
  Desc: the config about the project
 */


module.exports = function () {
    var configInfo = {

        //mysql max connections
        default_max_conns : 50,

        mysqlConfig       : {
            "host"      : "172.16.206.16",
            "user"      : "root",
            "password"  : "123456",
            "database"  : "fixedAsset"
        },

        // mysqlConfig       : {
        //     "host"      : "127.0.0.1",
        //     "user"      : "root",
        //     "password"  : "123456",
        //     "database"  : "fixedAsset"
        // },

        default_page_size : 50,

        statusCode        : {
            SATUS_OK                  : 0,
            STATUS_NOTFOUND           : 1,        //means data not found not url request
            STATUS_SERVER_ERROR       : 2,
            STATUS_INVAILD_PARAMS     : 3,
            STATUS_DBERROR            : 4
            //....
        }
    };

    return configInfo;
};