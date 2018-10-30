import { RouterModule, Routes} from '@angular/router';
import { LogginComponent } from '../_components/loggin/loggin.component';
import { ScheduleComponent } from '../_components/schedule/schedule.component';
import { AuthGuard } from '../_guards/auth.guard';

const appRoutes: Routes =[
    {
      path: 'home',
      loadChildren: '../_components/home/home.module#HomeModule',
      canActivate: [AuthGuard]
    },
    {
      path: 'schedule',
      component: ScheduleComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'login',
      component: LogginComponent
    },
    { path: '**', redirectTo: 'home' }
  ];

export const routing = RouterModule.forRoot(appRoutes);