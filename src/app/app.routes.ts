import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { TestselectionComponent } from './testselection/testselection.component';
import { MCQsComponent } from './mcqs/mcqs.component';
import { McqtestComponent } from './mcqtest/mcqtest.component';



import {Route} from "@angular/router"
export const routes: Route[] = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: '#det',
    component: FirstpageComponent
  },
  {
    path: 'login',
    component: LoginpageComponent
  },
  {
    path: 'testsel',
    component: TestselectionComponent
  },
  {
    path: 'mcqpage',
    component: McqtestComponent
  },
  {
    path: 'starttest',
    component: MCQsComponent
  }
]
