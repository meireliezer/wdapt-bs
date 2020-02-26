import { Component, OnInit } from '@angular/core';
import { ActionsLogService } from '../common/actions-log/actions-log.service';

@Component({
  selector: 'app-actions-log',
  templateUrl: './actions-log.component.html',
  styleUrls: ['./actions-log.component.css']
})
export class ActionsLogComponent implements OnInit {

  public getActionsLog() {
    return this.actionsLogService.getList();
  }

  constructor(private actionsLogService: ActionsLogService) { }

  ngOnInit() {
  }

}
