$(function() {

    var start = moment().subtract(30, 'days');
    var end = moment();

    function cb(start, end) {
        startDateReturn = start
        endDateReturn = end
        $('#reportrange span').html(start.format('D/M/Y') + '-' + end.format('D/M/Y'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment().subtract(1,'days'), moment()],
           'Yesterday': [moment().subtract(2, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(7, 'days'), moment()],
           'Last 30 Days': [moment().subtract(30, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);
    
});

var apiURL = 'https://api.github.com/repos/'
  
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
    { id:6 ,value: 'KevinPautonnier'},
    { id:7 ,value: 'AlexDesvallees'}
    ],

    checkedNames: [],  
      
    resultliste: [],

    startDateReturn: null,
    endDateReturn: null,

    

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
        try{
        xhr.open('GET', apiURL + name + '/' + self.selected + '/commits?since='+ startDateReturn.format('YYYY-DD-MM') +'&until=' + endDateReturn.format('YYYY-DD-MM'), false)
        }
        catch(error){
          console.error(error);
        }
        xhr.onload = function () {
          self.commits = JSON.parse(xhr.responseText)
          self.resultliste.push(self.commits)
        }
        xhr.send()
      });
    }
  }
})
