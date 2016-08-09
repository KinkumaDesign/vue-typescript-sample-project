//2つに分けたやり方
//var MyComponent = Vue.extend({
//    template: '<div>custom component!</div>'
//});
//
//Vue.component('my-component', MyComponent);


//componentメソッドを使って
//var Child = Vue.component('my-component', {
//    template:'<p>Hello vue2!</p>'
//})
//
//var Parent = Vue.extend({
//    components:{
//        'my-component':Child
//    }
//})
//
//new Parent({
//    el: '#example'
//})

Vue.component('child', {
    template: '#child-template',
    data: function(){
        return { msg: 'hello'}
    },
    methods: {
        notify: function(){
            console.log(this.$dispatch);
            if(this.msg.trim()){
                this.$dispatch('child-msg', this.msg);
                this.msg = '';
            }
        }
    }
});

var parent = new Vue({
    el: '#events-example',
    data: {
        messages:[]
    },
    events: {
        'child-msg': function(msg){
            this.messages.push(msg);
        }
    },
    handleIt: function(msg){
        console.log('child event');
    }
});
