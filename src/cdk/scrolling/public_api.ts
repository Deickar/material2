/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {SCROLL_DISPATCHER_PROVIDER} from './scroll-dispatcher';
import {Scrollable} from  './scrollable';
import {PlatformModule} from '@angular/cdk/platform';

@NgModule({
  imports: [PlatformModule],
  exports: [Scrollable],
  declarations: [Scrollable],
  providers: [SCROLL_DISPATCHER_PROVIDER],
})
export class ScrollDispatchModule {}

export * from './scroll-dispatcher';
export * from './scrollable';
export * from './viewport-ruler';
