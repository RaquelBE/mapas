import { Component } from '@angular/core';

interface House {
  title: string;
  description: string;
  lngLat: [number, number];
}

@Component({
  selector: 'properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css'],
})
export class PropertiesPageComponent {
  public houses: House[] = [
    {
      title: 'Casa residencial, Seseña',
      description: 'Nuestro Hogar, Toledo',
      lngLat: [-3.6915409818313947, 40.11006491539797],
    },
    {
      title: 'Casa del Pueblo, Caleruela',
      description: 'Donde crecí, Toledo',
      lngLat: [-5.25465642995016, 39.87296673002342],
    },
    {
      title: 'Cancún, México',
      description: 'Luna de Miel, Cancún',
      lngLat: [-86.82851552553302, 21.178571084686084],
    },
    {
      title: 'Islas Mujeres, México',
      description: 'Playa Transparente, México',
      lngLat: [-86.70070422142417, 21.24551962896932],
    },
  ];
}
