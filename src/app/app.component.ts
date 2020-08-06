import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sigr';
  public list=[];
  public task1: string;
  public tick=false;
  addtask()
  {
    if (this.task1!='')
    {
      this.list.push(this.task1);
      this.task1='';
    }
    else
    {
    }
  }
  remove(index)
  {
    this.list.splice(index,1);
  }
}
