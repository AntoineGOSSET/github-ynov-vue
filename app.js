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
    'Killy85',
    'Nair0fl',
    'raphaelCharre' ,
    'mathiasLoiret' ,
    'AntoineGOSSET' ,
    'etienneYnov' ,
    'KevinPautonnier',
    'AlexDesvallees',
    'Grigusky',
    'gmeunier'
    ],
    checkedNames: [],  
    resultliste: [],
    erreurliste:[],
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
      return moment(v).format('DD-MM-YYYY')
    }
  },

  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      this.resultliste = []
      this.erreurliste = []
      this.checkedNames.forEach(function(name) {
        xhr.open('GET', apiURL + name + '/' + self.selected + '/commits?since='+ startDateReturn.format('YYYY-MM-DD') +'&until=' + endDateReturn.format('YYYY-MM-DD'), false)
        xhr.onload = function () {
          self.commits = JSON.parse(xhr.responseText)
          if (self.commits[0]){
            self.resultliste.push(self.commits)
          }
          else{
            self.erreurliste.push(name)
          }
        }
        xhr.send()
      });
    },

    fetchReadMe: function(name){
      var xhr = new XMLHttpRequest()
      var self = this
      
      xhr.open('GET', apiURL + name + '/' + self.selected + '/readme', false)
      xhr.setRequestHeader('Accept' , 'application/vnd.github.VERSION.html')
      xhr.onload = function () {
        if(xhr.status == 404){
          self.readme = "Aucun Read Me trouvé pour ce projet"
        }
        else{
          self.readme = xhr.responseText
        }
        document.getElementById("readme-modal").innerHTML = self.readme
      }
      xhr.send()
    },

    checkAll: function(){
      var self = this

      if (this.checkedNames.length == this.users.length){
        this.checkedNames = []
      }
      else{
        this.checkedNames = this.users
      }
    }
  }
})
