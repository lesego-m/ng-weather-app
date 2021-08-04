import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSun, faSnowflake, faCloud, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faBolt, faSmog, faSearch } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconsModule {
  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faSun, faSnowflake, faCloud, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faBolt, faSmog, faSearch);
  }
 }
