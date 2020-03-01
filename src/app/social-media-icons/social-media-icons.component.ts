import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-icons',
  templateUrl: './social-media-icons.component.html',
  styleUrls: ['./social-media-icons.component.scss']
})
export class SocialMediaIconsComponent implements OnInit {
  urls: object = {
    linkedin: "https://www.linkedin.com/in/nico-miguelino-640565122/",
    github: "https://github.com/nicomiguelino",
    facebook: "https://www.facebook.com/nmiguelino",
  };

  constructor() { }

  ngOnInit() {
  }

}
