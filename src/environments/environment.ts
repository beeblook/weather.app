// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//   $http_result = drupal_http_request('http://api.openweathermap.org/data/2.5/weather?id=702550&appid=dd4c65e42c6be0a9a64c50b8cf85ed56&lang=ua&units=metric', $options);

export const environment = {
  production: false,
  appId: 'dd4c65e42c6be0a9a64c50b8cf85ed56',
  baseUrl: 'http://',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
