import * as Vue from 'vue'
import { VueComponent } from 'vue-typescript'

@VueComponent({
    template:'#child-template'
})
export class ChildComponent extends Vue {
    msg:string = "hello";
    notify(){
        if(this.msg.trim()){
            this.$dispatch('child-msg', this.msg);
            this.msg = '';
        }
    }
}
