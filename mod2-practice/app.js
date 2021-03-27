new Vue({
  el: '#app',
  
  data () {
    return {
      courses: [

      ],

      course_title: '',
      course_time: ''
    }
  },
  
  computed: {
    totalTime () {
      var sum = this.courses.reduce(function(prev, cur) {
        return prev + parseInt(cur.time);
      }, 0);
      
      return sum;
    }
  },
  
  methods: {
    addCourse () {
      if (!this.course_title || !this.course_time){
        return;
      }

      this.courses.push({
        title: this.course_title,
        time: this.course_time
      });

      this.course_title = '';
      this.course_time = '';
    }
  }
})