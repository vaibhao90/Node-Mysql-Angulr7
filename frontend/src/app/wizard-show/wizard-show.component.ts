import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-wizard-show',
  templateUrl: './wizard-show.component.html',
  styleUrls: ['./wizard-show.component.css']
})
export class WizardShowComponent implements OnInit {

  filteredPrimitiveOptions: any[] = [];
  primitiveOptions: SelectItem[] = [];
  selectedPrimitive: any = {};
  selectedPrimitive1: any = {};
  xmlString = `
  <RadioGroup
  android:id="@+id/daily_weekly_button_view"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
  android:layout_marginStart="8dp"
  android:layout_marginLeft="8dp"
  android:layout_marginTop="8dp"
  android:layout_marginEnd="8dp"
  android:layout_marginRight="8dp"
  android:gravity="center_horizontal"
  android:orientation="horizontal"
  app:layout_constraintEnd_toEndOf="parent"
  app:layout_constraintStart_toStartOf="parent"
  app:layout_constraintTop_toTopOf="parent">


  <RadioButton
      android:id="@+id/radio0"
      android:layout_width="@dimen/_80sdp"
      android:gravity="center"
      android:layout_height="wrap_content"
      android:background="@drawable/radio_flat_selector"
      android:button="@android:color/transparent"
      android:checked="true"
      android:paddingLeft="@dimen/_16sdp"
      android:paddingTop="@dimen/_3sdp"
      android:paddingRight="@dimen/_16sdp"
      android:paddingBottom="@dimen/_3sdp"
      android:text="Daily"
      android:textColor="@color/radio_flat_text_selector" />

  <RadioButton
      android:id="@+id/radio1"
      android:gravity="center"
      android:layout_width="@dimen/_80sdp"
      android:layout_height="wrap_content"
      android:background="@drawable/radio_flat_selector"
      android:button="@android:color/transparent"
      android:paddingLeft="@dimen/_16sdp"
      android:paddingTop="@dimen/_3sdp"
      android:paddingRight="@dimen/_16sdp"
      android:paddingBottom="@dimen/_3sdp"
      android:text="Weekly"
      android:textColor="@color/radio_flat_text_selector" />

  </RadioGroup>`;
  codeString = `
  package com.mkyong.android;

  import android.app.Activity;
  import android.os.Bundle;
  import android.view.View;
  import android.view.View.OnClickListener;
  import android.widget.Button;
  import android.widget.RadioButton;
  import android.widget.RadioGroup;
  import android.widget.Toast;
  
  public class MyAndroidAppActivity extends Activity {
  
    private RadioGroup radioSexGroup;
    private RadioButton radioSexButton;
    private Button btnDisplay;
  
    @Override
    public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.main);
  
    addListenerOnButton();
  
    }
  
    public void addListenerOnButton() {
  
    radioSexGroup = (RadioGroup) findViewById(R.id.radioSex);
    btnDisplay = (Button) findViewById(R.id.btnDisplay);
  
    btnDisplay.setOnClickListener(new OnClickListener() {
  
      @Override
      public void onClick(View v) {
  
              // get selected radio button from radioGroup
        int selectedId = radioSexGroup.getCheckedRadioButtonId();
  
        // find the radiobutton by returned id
              radioSexButton = (RadioButton) findViewById(selectedId);
  
        Toast.makeText(MyAndroidAppActivity.this,
          radioSexButton.getText(), Toast.LENGTH_SHORT).show();
  
      }
  
    });
  
    }
  }
  `;

  constructor() { }

  ngOnInit() {
    this.primitiveOptions = [
      // { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];
    this.selectedPrimitive1 = this.primitiveOptions[0];
    this.selectedPrimitive = this.primitiveOptions[0];
  }

  filterOptions(event) {
    let query = event.query;
    let filtered: any[] = [];
    for (let i = 0; i < this.primitiveOptions.length; i++) {
      let country = this.primitiveOptions[i];
      if (country.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredPrimitiveOptions = filtered;
  }

  selectPrimitive(){
    this.selectedPrimitive = this.selectedPrimitive1;
  }

}
