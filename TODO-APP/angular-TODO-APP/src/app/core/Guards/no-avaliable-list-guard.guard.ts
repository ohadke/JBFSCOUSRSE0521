import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from,  Observable } from 'rxjs';
import { DataService } from '../services/data.service';


@Injectable({
  providedIn: 'root'
})
export class NoAvailableListGuard implements CanActivate {
  constructor(  private data : DataService, private router: Router) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise< true | UrlTree> {
      console.log('Guard is checking if the list is empty');

      let numberOfLists=0;
      await this.data.loadLists().then(lists=> numberOfLists =lists.length);
      console.log(numberOfLists)
      if(numberOfLists>0){
        return true;
      }
      return this.router.createUrlTree(['lists', -1 , 'edit']);
    }
  }



