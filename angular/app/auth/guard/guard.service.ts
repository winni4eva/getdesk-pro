import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {AuthService} from '../auth.service';
import {StorageService} from '../../shared/storage/storage.service';


@Injectable()
export class LoginGuard implements CanActivate{
    private _store;

    private _storeId;

    constructor(
        private _router: Router, 
        private _loginService: AuthService,
        private _activedRoute: ActivatedRoute,
        private _storageService: StorageService){

            _router.events
                    .filter(e => e instanceof NavigationEnd) 
                    .forEach(e => {
                        //console.log(_router.routerState.root.params);
                        //console.log(_router.routerState.root.firstChild.params['store_id']);
                    });
        }
    
    // ngOnInit() {
    //     //this._store = this._userService.getUserStore();
    //     this._activedRoute.params.subscribe(params => {
    //         this._storeId = params['store_id'];
    //         console.log(params);
    //         console.log(`route store id ${this._storeId}`);
    //     });
    // }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        //this._store = this._userService.getUserStore(); //Get store from storage

        //this._loginService.redirectUrl = state.url;//Store the attempted URL for redirecting

        //console.log(this._loginService.routeStoreId);
        //console.log(this._storeId);

        if (this._storageService.get('gdToken')) {
            //console.log('Intercepted : ', state.url);
            //console.log(this._storageService.get('gdToken'));
            //this._router.navigate([this._loginService.redirectUrl]);// Navigate to the stored attempted URL
            return true;
        }

        this._router.navigate(['/login']);

        return false;
    }
}