import { Injectable } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Injectable({
  providedIn: 'root'
})
export class Okta {
  widget;

  constructor() {
    this.widget = new OktaSignIn({
      baseUrl: 'https://dev-709191.okta.com',
      clientId: '0oa40vvbnqMjXV0I74x6',
      redirectUri: 'https://ethicsbowlchina-login.github.io',
      authParams: {
        issuer: 'default'
      }
    });
  }

  getWidget() {
    return this.widget;
  }
}
