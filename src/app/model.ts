export class Model {
    user;
    items;
    constructor(){
        this.user = "Guilherme";
        this.items = [ new TodoItem("Be happy", false, "alta", "2019-12-25"),
                        new TodoItem("Don't Worry", false, "media", "2019-12-12"),
                        new TodoItem("Keep Calm", false, "baixa", "2019-10-10"),
                        new TodoItem("Give my phone number for someone who's worry to the person be happy too", false, "alta", "2019-10-09")]
    }
}
    export class TodoItem {
    action;
    done;
    prioridade;
    data;
    constructor(action,done,prioridade,data){
        this.action=action;
        this.done=done;
        this.prioridade=prioridade;
        this.data=data;
    }
}
    

