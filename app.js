$(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('D/M/Y') + '-' + end.format('D/M/Y'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});

var apiURL = 'https://api.github.com/repos/'

/**
 * Actual demo
 */


/**var param = new Vue({

    el: '#param',
    data: {
      selected: 'github-ynov-vue',
      projets: [
        { value: 'github-ynov-vue' },
        { value: 'Airbnb-exercice' },
        { value: 'Project 3' }
      ],

      users: [
        { id:0 ,value: 'Killy85' },
        { id:1 ,value: 'Nair0fl' },
        { id:2 ,value: 'raphaelCharre' },
        { id:3 ,value: 'mathiasLoiret' },
        { id:4 ,value: 'AntoineGOSSET' },
        { id:5 ,value: 'etienneYnov' }
      ],

      checkedNames: ['AntoineGOSSET'],
    }
  })*/


  
var demo = new Vue({


  el: '#demo',

  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null,
    selected: 'github-ynov-vue',

    projets: [
    { value: 'github-ynov-vue' },
    { value: 'dev_mobile' },
    { value: 'Airbnb_exercice' },
    { value: 'Shifumi'}
    ],

    users: [
    { id:0 ,value: 'Killy85' },
    { id:1 ,value: 'Nair0fl' },
    { id:2 ,value: 'raphaelCharre' },
    { id:3 ,value: 'mathiasLoiret' },
    { id:4 ,value: 'AntoineGOSSET' },
    { id:5 ,value: 'etienneYnov' },
    { id:6 ,value: 'KevinPautonnier'}
    ],

    checkedNames: ['AntoineGOSSET'],  
      
    resultliste: []

  },

  created: function () {
    this.fetchData()
  },

  watch: {
    currentBranch: 'fetchData'
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },

  methods: {
    fetchData: function () {
        var xhr = new XMLHttpRequest()
        var self = this
        this.resultliste = []
        this.checkedNames.forEach(function(name) {
          console.log(name);
          xhr.open('GET', apiURL + name + '/' + self.selected + '/commits?', false)
          xhr.onload = function () {
            self.commits = JSON.parse(xhr.responseText)
            console.log("URL REQUEST:" + self.commits[0].html_url)
            console.log("RESULT:" + self.commits)  
            console.log("Commit :" + self.commits)
            self.resultliste.push(self.commits)
            console.log("LIST RESULT:" + self.resultliste)
          }
          
          xhr.send() 
          });
          
        
        


    }
  }
})
