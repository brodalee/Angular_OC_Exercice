import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    posts = [
        {
            title: 'Mon premier post',
            content: 'Lorem ipsum',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Mon deuxième post',
            content: 'Lorem ipsum',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Encore un autre post',
            content: 'Lorem ipsum',
            loveIts: 0,
            created_at: new Date()
        }
    ];

}
