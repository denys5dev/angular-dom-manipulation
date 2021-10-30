import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicComponentsComponent } from 'src/app/components/dynamic-components/dynamic-components.component';
import { AChildComponentComponent } from 'src/app/components/modify-dom-structure-task/a-child-component/a-child-component.component';
import { ModifyDomStructureTaskComponent } from 'src/app/components/modify-dom-structure-task/modify-dom-structure-task.component';
import { Task2SolutionComponent } from 'src/app/components/modify-dom-structure-task/task2-solution/task2-solution.component';
import { ModifyElemPropsTask1Component } from 'src/app/components/modify-elem-props-task1/modify-elem-props-task1.component';
import { AddAttributeDirective } from 'src/app/components/modify-elem-props-task1/task1-solution/addAttribute.directive';
import { Task1SolutionComponent } from 'src/app/components/modify-elem-props-task1/task1-solution/task1-solution.component';
import { AboutComponent } from 'src/app/components/portal/about/about.component';
import { AttachToDirective } from 'src/app/components/portal/attachTo.directive';
import { ContactsComponent } from 'src/app/components/portal/contacts/contacts.component';
import { PortalComponent } from 'src/app/components/portal/portal.component';
import { TargetDirective } from 'src/app/components/portal/target.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ModifyElemPropsTask1Component,
    Task1SolutionComponent,
    AddAttributeDirective,
    ModifyDomStructureTaskComponent,
    AChildComponentComponent,
    Task2SolutionComponent,
    DynamicComponentsComponent,
    PortalComponent,
    AttachToDirective,
    AboutComponent,
    ContactsComponent,
    TargetDirective,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
