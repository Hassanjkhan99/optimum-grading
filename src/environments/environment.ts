// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // isMockEnabled: false, // You have to switch this, when your real back-end is done
  isMockEnabled: true, // You have to switch this, when your real back-end is done for local

  authTokenKey: 'authce9d77b308c149d5992a80073637e4d5',
};
// local
// export const main_url = 'http://localhost:8000'
// production
// export const main_url = 'https://gradebackend.optimumgrading.com/grading'
// testing
export const main_url = 'https://gradebackend.optimumgrading.com/gradingtest';
//export const main_url = 'http://159.89.52.247:8090'

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
