import { Component } from '@angular/core';
import { Model, TodoItem } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();

  getName(){
    return this.model.user;
  }
  addItem(newItem,prioridade,data){
    if(newItem != ""){
    this.model.items.push(new TodoItem(newItem,false,prioridade,data));
    }
  }
  
  getTodoItens=()=> this.getItensOrdenados().filter(item=>!item.done);

  getAlta=()=>this.getTodoItens().filter(atem=>atem.prioridade==="alta")
  getMedia=()=>this.getTodoItens().filter(mtem=>mtem.prioridade==="media")
  getBaixa=()=>this.getTodoItens().filter(btem=>btem.prioridade==="baixa")

  corrigirTarefa(Tarefa){
    Tarefa.done= false;
  }
  getItensOrdenados(){
    return this.model.items.sort((a,b)=>{
      return <any>new Date(b.data)-<any>new Date(a.data);
    });
  }
  getItensFeitos=()=> this.model.items.filter(item=>item.done);

  
}

