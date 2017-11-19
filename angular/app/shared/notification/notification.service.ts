import {Injectable} from '@angular/core';
import {NotificationsService} from 'angular2-notifications';
import {ReflectiveInjector} from '@angular/core';
 
@Injectable()
export class NotificationService {
    
    private _notifier;

    constructor() {
        const injector = ReflectiveInjector.resolveAndCreate( [ NotificationsService ] );
        this._notifier = injector.get(NotificationsService);
    }
    
    /**
     * Creates a success notification with the provided title and content.
     */
    success(title: string = 'Success', content: string, override?: any){
        this._notifier.success( title, content, override );
        //override: {timeOut: 5000,showProgressBar: true,pauseOnHover: false,clickToClose: false,maxLength: 10}
    }

    /**
     * Creates an error notification with the provided title and content.
     */
    error(title: string, content: string, override?: any){}

    /**
     * Creates an alert notification with the provided title and content.
     */
    alert(title: string, content: string, override?: any){}

    /**
     * Creates an info notification with the provided title and content. 
     */
    info(title: string, content: string, override?: any){}//

    /**
     * Creates a bare notification with the provided title and content. 
     * This notification type is best used when adding custom html.
     */
    bare(title: string, content: string, override?: any){}

    /**
     * Use this method to create any notification type ['success', 'error', 'alert', 'info', 'bare'].
     */
    create(title: string, content: string, type: string, override?: any){}

    /**
     * Use this method to create a notification with custom html.
     */
    html(html: any, type: string, override?: any){}

    /**
     * Removes the notification that has the provided id 
     * Removes all currently open notifications if no id was provided.
     */
    remove(id?: string){}
}