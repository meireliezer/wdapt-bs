import { Injectable } from '@angular/core';
import { IActionLog, ACTION_TYPE } from 'src/app/model/actions-log.interface';

@Injectable({
  providedIn: 'root'
})
export class ActionsLogService {

  private _actionsLog:IActionLog[];
  private _nextId:number;


  constructor() {
    this._actionsLog  = [
      {id:1, action: ACTION_TYPE.ADD, websiteName:'Ynet', url: 'http://ynet.co.il' },
      {id:2, action: ACTION_TYPE.ADD, websiteName:'cnn', url: 'http://cnn.com' },
      {id:3, action: ACTION_TYPE.EDIT, websiteName:'CNN', url: 'http://cnn.com' },
    ];  
    this._nextId = this._actionsLog.length + 1;

   }


   public getList():Array<IActionLog>{
     return this._actionsLog;
   }


   public remove(websiteName:string, url:string){
     this.addLog(ACTION_TYPE.REMOVE, websiteName, url);
   }

   public edit (websiteName:string, url:string){
    this.addLog(ACTION_TYPE. EDIT, websiteName, url);
   }

   public add (websiteName:string, url:string){
    this.addLog(ACTION_TYPE. ADD, websiteName, url);
   }

   private addLog(actionType:string, websiteName:string, url:string) : IActionLog {
    let logItem: IActionLog = {
       id: this._nextId,
       action: actionType,
       websiteName, 
       url
    }
    ++this._nextId;
    this._actionsLog.push(logItem);
    return logItem;
  }





}
