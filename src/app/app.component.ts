import { Component } from '@angular/core';

@Component({

  templateUrl: "app.component.html",
  selector: "my-app-root"
})
export class AppComponent{
  title: string = "Hello My Student";
     
   timeNow(){
   const timen=new Date();
   const hour =timen.getHours();
   if (hour >= 6 && hour < 12) {
    return 'בוקר טוב!';
  } else if (hour >= 12 && hour < 18) {
    return  'צהרים טובים!';
  } 
  else if(hour>=0&&hour<6)
  return 'לילה טוב!'
  else {
    return  'ערב טוב!';
  }
   }
   
}
