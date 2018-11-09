import { RouterModule, Routes} from '@angular/router';
import { LogginComponent } from './_components/loggin/loggin.component';
import { ScheduleComponent } from './_components/schedule/schedule.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './_components/home/home.component';
//./_components/home/home.module#HomeModule

const appRoutes: Routes =[
    {
      path: 'home',
      component: HomeComponent,
      loadChildren: './_components/home/home.module#HomeModule',
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