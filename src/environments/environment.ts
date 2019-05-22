// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backendBaseUrl: 'http://localhost:7001/api/v1/',
  backendseller: 'http://localhost:7002/api/v1/',
  backendbuyer: 'http://localhost:7003/api/v1/',
  backendbank: 'http://localhost:7004/api/v1/',

  // backendBaseUrl: 'https://backend-api-loopback-rpt-dev.mybluemix.net/api/'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
