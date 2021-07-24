


import {NgModule} from '@angular/core';
import {AppDropDownValidator} from '../directives/dropdownValidator';
import {EqualityValidator} from '../directives/equality.directive';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule(
    {
        declarations: [AppDropDownValidator,EqualityValidator],
        exports: [AppDropDownValidator,EqualityValidator]

    })

export class SharedModule
{

}