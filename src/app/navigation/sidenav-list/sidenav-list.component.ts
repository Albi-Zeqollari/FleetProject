import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output()
  public sidenavClose =  new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  onSidenavClose(){

    this.sidenavClose.emit();
  }

}
