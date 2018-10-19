import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-post-list-item-component',
    templateUrl: './post-list-item-component.component.html',
    styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

    @Input() title: string;
    @Input() content: string;
    @Input() loveIts: number;
    @Input() created_at: Date;

    constructor() {
    }

    ngOnInit() {
    }

    public increment() {
        this.loveIts += 1;
        console.log(this.loveIts);
    }

    public decrement() {
        this.loveIts -= 1;
    }
    
    public goodRate(){
        return this.loveIts > 0;
    }
    
    public badRate(){
        return this.loveIts < 0;
    }

}
