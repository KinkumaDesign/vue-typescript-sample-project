/// <reference path="../../../typings/index.d.ts" />

import * as Vue from 'vue'
import { ChildComponent } from './child/ChildComponent'
import { VueComponent, Prop } from 'vue-typescript'

@VueComponent('app', {
    template:'#events-example',
    events:{
        'child-msg': function(msg){
            this.addMessage(msg);
        }
    },
    components:{
        'child':ChildComponent
    }
})
export default class ApplicationMain extends Vue {
    messages:string[] = [];

    constructor(){
        super();
    }

    addMessage(msg){
        this.messages.push(msg);
    }
}

(function(){
    new Vue({
        el:'#app_root'
    })
})();
