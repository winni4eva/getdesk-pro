import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private newSearchTerm: string;
  private channels: String[];
  private pusher: any;
  private channel;
  private messages = [];

  constructor() {
    // this.pusher = new Pusher('09e4f420472bbc06f762', {
    //   encrypted: true,
    //   //authEndpoint: '{{ baseUrl() }}/pusher_auth',
    //   cluster: 'eu'
    // });  
    
  }

  ngOnInit(){
    this.channels = [];
    //this.subscribeToChannel();
    //console.log(this.messages);
  }

  public newSubscription() {
    this.channels.push(this.newSearchTerm);
    this.newSearchTerm = '';
  }

  private subscribeToChannel() {
    var encoded = btoa('task-channel');
    this.channel = this.pusher.subscribe(encoded);
    this.channel.bind('pusher:subscription_succeeded', function() {
      console.log('Channel Binding succeeded');
    });

    // this.channel.bind('new_message', function(data) {
    //   console.log('Getting data');
    //   console.log(data);
    //   this.newMessage(data);
    // }.bind(this));
  }

  private newMessage(data: Object) {
    console.log('Retrieving data');
    console.log(data);
    this.messages.push(data);
  }

}
