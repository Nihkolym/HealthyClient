
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AgmMarker, MarkerManager } from '@agm/core';

declare var H: any;

const svgMarkup = '<svg width="24" height="24" ' +
  'xmlns="http://www.w3.org/2000/svg">' +
  '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
  'height="22" /><text x="12" y="18" font-size="12pt" ' +
  'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
  'fill="white">H</text></svg>';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
})
export class GoogleComponent implements OnInit, AfterViewInit {
  @ViewChild('map')
  public mapElement: ElementRef;
  private platform: any;
  private map: any;
  private behavior;
  private ui;
  private selectedObject;
  lat = 51.678418;
  lng = 7.809007;

  public appId = 'zfApXobovhtnVwzfVvMc';
  public appCode = '8CO0RsZODx09IPnxk7fz7Q';

  constructor() {}


  placeMarker($event) {
  }

  public ngOnInit() {
    this.platform = new H.service.Platform({
        "app_id": this.appId,
        "app_code": this.appCode
    });


  }

  public ngAfterViewInit() {
    const pixelRatio = window.devicePixelRatio || 1;
    const defaultLayers = this.platform.createDefaultLayers({
      tileSize: pixelRatio === 1 ? 256 : 512,
      ppi: pixelRatio === 1 ? undefined : 320
    });
    this.map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.normal.map,
        {
            zoom: 10,
            center: { lat: this.lat, lng: this.lng }
        },
        pixelRatio
    );
    this.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);

    this.map.addEventListener('tap', (evt) => {
      const coord = this.map.screenToGeo(evt.currentPointer.viewportX,
        evt.currentPointer.viewportY);

      fetch(`https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?app_id=${this.appId}&app_code=${this.appCode}&mode=retrieveAddresses&prox=${coord.lat.toFixed(4)},${coord.lng.toFixed(4)},250`)
        .then((data) => data.json())
        .then((data) => {
          console.log(data.Response.View[0].Result[0].Location.Address.Country);

          const icon = new H.map.Icon(svgMarkup),
            coords = {lat: coord.lat, lng: coord.lng},
            marker = new H.map.Marker(coords, {icon: icon});

          if (this.selectedObject) {
            this.map.removeObject(this.selectedObject);
          }

          this.selectedObject = marker;
          this.map.addObject(this.selectedObject);
        });
    });
  }

}
