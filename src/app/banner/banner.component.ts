import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const UP_ARROW_KEY_CODE = 38;
    const DOWN_ARROW_KEY_CODE = 40;
    const SCROLL_DELAY = 0;

    let scrollToId = (idSelector) => {
      $('html, body').animate({
        scrollTop: $(idSelector).offset().top
      }, SCROLL_DELAY);
    };

    $('#scroll-button').click(() => {
      scrollToId('#intro-section');
    });

    $('html').keyup(e => {
      e.preventDefault();
      switch(e.keyCode) {
        case UP_ARROW_KEY_CODE:
          scrollToId('#index-banner');
          break;
        case DOWN_ARROW_KEY_CODE:
          scrollToId('#intro-section');
        default: break;
      }
    });
  }

}
