import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,
IonItem, IonLabel, IonList, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { RouterLinkWithHref } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { TabsNavComponent } from '../tabs-nav/tabs-nav.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, RouterLinkWithHref,
    IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonGrid, IonButton, TabsNavComponent]
  })
export class ActivitiesPage implements OnInit {

  places: any;
  type: any;
  expandedDescriptions: { [key: string]: boolean } = {};
  hidden: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  //getting data from the external json url 
  getData() {
    this.type = history.state.type; 
    const url = 'https://www.jsonblob.com/api/jsonBlob/1236431268022706176'; 
    this.http.get<any>(url).subscribe(data => {
      this.places = data.places.activities; 
      console.log(this.places);

    });
  }

  //if the place name from the json file matches the string in the method call it falls into their aloocated namespace 
  img(placeName: string): string {
    if (placeName === 'Galway City Museum') {
      return 'assets/images/activities/museum.jpg';
    } 
    else if (placeName === 'Wildlands Galway') {
      return 'assets/images/activities/wildlands.png';
    } 
    else if (placeName === 'Great Escape Rooms'){
      return 'assets/images/activities/rooms.jpg'
    }
    else if (placeName === 'Electric Nightclub'){
      return 'assets/images/activities/electric.jpg'
    } 
    else if (placeName === 'Palas'){
      return 'assets/images/activities/palas.jpg'
    }
    else if (placeName === 'River Corrib Kayaking'){
      return 'assets/images/activities/kayaking.jpg'
    }
    else {
      return ''; 
    }
  }

  show(place: any) {
    place.hidden = !place.hidden;
  }

    //if the place name from the json file matches the string in the method call it falls into their aloocated namespace 
  openBrowser(placeName: string): void {
    try {
      if (placeName === 'Galway City Museum') {
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g186609-d215899-Reviews-Galway_City_Museum-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Wildlands Galway'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g1386579-d21243974-Reviews-Wildlands-Moycullen_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Great Escape Rooms'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g186609-d8692835-Reviews-Great_Escape_Rooms-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Electric Nightclub'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g186609-d7264273-Reviews-Electric-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Palas'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g186609-d14174343-Reviews-Palas_Cinema-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'River Corrib Kayaking'){
        Browser.open({
          url: 'https://www.tripadvisor.com/ShowUserReviews-g186609-d2300946-r159299609-Kayakmor-Galway_County_Galway_Western_Ireland.html'
        });
      }
    } catch (error) {
      console.error('Error opening browser:', error);
    }
  }

}