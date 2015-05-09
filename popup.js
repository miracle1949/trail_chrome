// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 **/
chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('currentLink').innerHTML = tab.url;
    // trail.append(tab.url)
});

function getTrails(done) {
  //
  data = ['name1', 'name2', 'name3'];
  done(data)
};

function render(done) {
  getTrails(function(trails){
    list_of_trails = JSON.parse(trails);
    for (var i=0; i < list_of_trails.length(), i++) {
      // need to parse JSON ?!
      // json.parse
      trail_name = list_of_trails[i];
      // this needs to become a link
      document.body.innerHTML = "<div>trail_name</div>";
    }
    done();
  });
}



// send this somewhere
