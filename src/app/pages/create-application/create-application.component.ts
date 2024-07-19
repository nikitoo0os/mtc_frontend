import {Component, OnInit} from '@angular/core';
import {LayoutComponent} from "../../ui-components/layout/layout.component";
import {NgForOf, NgIf} from "@angular/common";
import {NzSegmentedComponent} from "ng-zorro-antd/segmented";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzDatePickerComponent, NzRangePickerComponent} from "ng-zorro-antd/date-picker";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzPaginationComponent} from "ng-zorro-antd/pagination";
import {NzPopoverDirective} from "ng-zorro-antd/popover";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {ActivatedRoute} from "@angular/router";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {
  AbstractControl,
  FormControl,
  FormGroup, FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule, ValidationErrors,
  Validators
} from "@angular/forms";
import {NzI18nService, ru_RU} from "ng-zorro-antd/i18n";
import {NzSwitchComponent} from "ng-zorro-antd/switch";

@Component({
  selector: 'app-create-application',
  standalone: true,
  imports: [
    LayoutComponent,
    NgForOf,
    NgIf,
    NzButtonComponent,
    NzDatePickerComponent,
    NzIconDirective,
    NzOptionComponent,
    NzPaginationComponent,
    NzPopoverDirective,
    NzRangePickerComponent,
    NzSegmentedComponent,
    NzSelectComponent,
    NzWaveDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzColDirective,
    NzInputDirective,
    NzFormControlComponent,
    NzFormDirective,
    ReactiveFormsModule,
    NzInputGroupComponent,
    FormsModule,
    NzRowDirective,
    NzSwitchComponent
  ],
  templateUrl: './create-application.component.html',
  styleUrl: './create-application.component.scss'
})
export class CreateApplicationComponent  implements OnInit {
  isCollapsed = false;
  label: string = '';
  constructor(
    private route: ActivatedRoute,
    private fb: NonNullableFormBuilder,
    private i18n: NzI18nService
    ) { }
  switchValue=false;
  ngOnInit() {
    this.i18n.setLocale(ru_RU)
    this.route.paramMap.subscribe(params => {
      this.label = params.get('label') || '';
    });

  }
  specializationOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ];
  postOptions = [
    { label: 'должность 1', value: 'должность 1' },
    { label: 'должность 2', value: 'должность 2' },
    { label: 'должность 3', value: 'должность 3' },
  ];
  organizationOptions = [
    { label: 'организация 1', value: 'организация 1' },
    { label: 'организация 2', value: 'организация 2' },
    { label: 'организация 3', value: 'организация 3' },
  ];
  validateForm: FormGroup<{
    userName: FormControl<string>;
    userPatronymic: FormControl<string>;
    remember: FormControl<boolean>;
    datePicker: FormControl<Date | null>;
    userEmail: FormControl<string>;
    userPhone: FormControl<string>;

  }> = this.fb.group({
    userName: ['', [Validators.required]],
    userPatronymic: ['', [Validators.required]],
    datePicker: this.fb.control<Date | null>(null),
    userPhone: ['', [Validators.required]],
    userEmail: ['', [Validators.required]],
    remember: [true],
  });
  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

 }
