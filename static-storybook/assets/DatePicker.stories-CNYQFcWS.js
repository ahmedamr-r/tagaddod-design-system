import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{t as Me,D as o,s as ze,a as Re}from"./Calendar-kiPbSDid.js";import{r as n}from"./index-D4H_InIO.js";function Oe(r,e){const a=Me(r,e==null?void 0:e.in).getDay();return a===0||a===6}const We={title:"Components/DatePicker",component:o,parameters:{layout:"centered",docs:{description:{component:"A date picker component that combines a text input with a calendar popover. Built on TextInput, Popover, and Calendar components with full RTL support and design system integration."}}},argTypes:{mode:{control:{type:"select"},options:["single","multiple","range"],description:"Selection mode for the date picker"},dateFormat:{control:"text",description:"Date format pattern for display in the input field"},size:{control:{type:"select"},options:["xlarge","large","medium","small","xsmall"],description:"Size of the input field"},placeholder:{control:"text",description:"Placeholder text when no date is selected"},showCalendarIcon:{control:"boolean",description:"Whether to show the calendar icon"},closeOnSelect:{control:"boolean",description:"Whether to close the calendar after date selection"},readOnly:{control:"boolean",description:"Whether the input is read-only (prevents manual typing)"},disabled:{control:"boolean",description:"Whether the input is disabled"},fullWidth:{control:"boolean",description:"Whether the input takes full width of container"},popoverSide:{control:{type:"select"},options:["top","right","bottom","left"],description:"Position of the calendar popover"},popoverAlign:{control:{type:"select"},options:["start","center","end"],description:"Alignment of the calendar popover"},numberOfMonths:{control:{type:"number",min:1,max:6,step:1},description:"Number of months to display in the calendar"}},args:{mode:"single",dateFormat:"PPP",size:"medium",showCalendarIcon:!0,closeOnSelect:!0,readOnly:!0,disabled:!1,fullWidth:!1,popoverSide:"bottom",popoverAlign:"start",numberOfMonths:1}},u={render:r=>{const[e,a]=n.useState();return t.jsx(o,{...r,value:e,onChange:a,label:"Select Date"})}},p={args:{mode:"multiple",placeholder:"Select multiple dates"},render:r=>{const[e,a]=n.useState();return t.jsx(o,{...r,value:e,onChange:a,label:"Select Multiple Dates",helpText:"Hold Ctrl/Cmd to select multiple dates"})}},g={args:{mode:"range",placeholder:"Select date range",closeOnSelect:!1},render:r=>{const[e,a]=n.useState();return t.jsx(o,{...r,value:e,onChange:a,label:"Select Date Range",helpText:"Click on two dates to select a range"})}},m={args:{mode:"range",layout:"dual",closeOnSelect:!1,numberOfMonths:2},render:r=>{const[e,a]=n.useState();return t.jsx("div",{style:{width:"400px"},children:t.jsx(o,{...r,value:e,onChange:a,startLabel:"Departure",endLabel:"Return",startPlaceholder:"Select departure date",endPlaceholder:"Select return date"})})}},h={args:{mode:"range",layout:"dual",closeOnSelect:!1,numberOfMonths:2},render:r=>{const[e,a]=n.useState();return t.jsxs("div",{style:{width:"450px",padding:"20px",border:"1px solid var(--t-color-border-secondary)",borderRadius:"var(--t-border-radius-300)"},children:[t.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",fontWeight:"600"},children:"Hotel Booking"}),t.jsx(o,{...r,value:e,onChange:a,startLabel:"Check-in",endLabel:"Check-out",startPlaceholder:"Check-in date",endPlaceholder:"Check-out date"}),(e==null?void 0:e.from)&&(e==null?void 0:e.to)&&t.jsxs("div",{style:{marginTop:"12px",fontSize:"14px",color:"var(--t-color-text-secondary)"},children:["Duration: ",Math.ceil((e.to.getTime()-e.from.getTime())/(1e3*60*60*24))," nights"]}),t.jsx("button",{style:{marginTop:"16px",width:"100%",padding:"12px",background:"var(--t-color-fill-brand)",color:"var(--t-color-text-on-brand)",border:"none",borderRadius:"var(--t-border-radius-200)",cursor:"pointer",fontSize:"16px",fontWeight:"500"},children:"Check Availability"})]})}},D={render:r=>{const[e,a]=n.useState(),[c,i]=n.useState(""),d=l=>{if(a(l),!l){i("Date is required");return}const s=new Date;if(s.setHours(0,0,0,0),l<s){i("Date cannot be in the past");return}i("")};return t.jsx(o,{...r,value:e,onChange:d,label:"Birth Date",placeholder:"Select your birth date",errorMessage:c,required:!0})}},f={render:r=>{const[e,a]=n.useState(),c=new Date,i=ze(c,30),d=Re(c,30);return t.jsx(o,{...r,value:e,onChange:a,label:"Appointment Date",placeholder:"Select appointment date",minDate:i,maxDate:d,helpText:`Select a date between ${i.toLocaleDateString()} and ${d.toLocaleDateString()}`})}},b={render:r=>{const[e,a]=n.useState();return t.jsx(o,{...r,value:e,onChange:a,label:"Working Day",placeholder:"Select a working day",isDateDisabled:Oe,helpText:"Weekends are disabled",calendarProps:{footer:"Weekends are not available for selection"}})}},v={render:r=>{const[e,a]=n.useState();return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[t.jsx(o,{...r,value:e,onChange:a,label:"XLarge",size:"xlarge"}),t.jsx(o,{...r,value:e,onChange:a,label:"Large",size:"large"}),t.jsx(o,{...r,value:e,onChange:a,label:"Medium",size:"medium"}),t.jsx(o,{...r,value:e,onChange:a,label:"Small",size:"small"}),t.jsx(o,{...r,value:e,onChange:a,label:"XSmall",size:"xsmall"})]})}},x={args:{readOnly:!1,placeholder:"Type or select date"},render:r=>{const[e,a]=n.useState();return t.jsx(o,{...r,value:e,onChange:a,label:"Editable Date",helpText:"You can type the date or use the calendar"})}},S={args:{dateFormat:"dd/MM/yyyy"},render:r=>{const[e,a]=n.useState();return t.jsx(o,{...r,value:e,onChange:a,label:"Custom Format (DD/MM/YYYY)",placeholder:"DD/MM/YYYY"})}},y={render:r=>{const[e,a]=n.useState({startDate:void 0,endDate:void 0,birthDate:void 0}),[c,i]=n.useState({startDate:"",endDate:"",birthDate:""}),d=l=>{l.preventDefault();const s={startDate:"",endDate:"",birthDate:""};e.startDate||(s.startDate="Start date is required"),e.endDate||(s.endDate="End date is required"),e.birthDate||(s.birthDate="Birth date is required"),e.startDate&&e.endDate&&e.startDate>e.endDate&&(s.endDate="End date must be after start date"),i(s),Object.values(s).some(Ve=>Ve)||alert("Form submitted successfully!")};return t.jsxs("form",{onSubmit:d,style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[t.jsx(o,{value:e.startDate,onChange:l=>a(s=>({...s,startDate:l})),label:"Start Date",placeholder:"Select start date",errorMessage:c.startDate,required:!0}),t.jsx(o,{value:e.endDate,onChange:l=>a(s=>({...s,endDate:l})),label:"End Date",placeholder:"Select end date",errorMessage:c.endDate,required:!0}),t.jsx(o,{value:e.birthDate,onChange:l=>a(s=>({...s,birthDate:l})),label:"Birth Date",placeholder:"Select birth date",errorMessage:c.birthDate,maxDate:new Date,required:!0}),t.jsx("button",{type:"submit",style:{padding:"8px 16px",marginTop:"16px",background:"var(--t-color-fill-brand)",color:"var(--t-color-text-on-brand)",border:"none",borderRadius:"var(--t-border-radius-200)",cursor:"pointer"},children:"Submit"})]})}},C={parameters:{docs:{description:{story:"DatePicker component with RTL text direction and Arabic content for testing right-to-left layout and font rendering."}}},render:r=>{const[e,a]=n.useState();return t.jsxs("div",{dir:"rtl",style:{fontFamily:"var(--t-font-family-arabic)",padding:"20px"},children:[t.jsx("div",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:"bold"},children:"منتقي التاريخ العربي"}),t.jsx(o,{...r,value:e,onChange:a,label:"تاريخ الميلاد",placeholder:"اختر التاريخ",helpText:"انقر على الأيقونة لفتح التقويم"})]})}},T={render:r=>{const[e,a]=n.useState();return t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px",padding:"100px",width:"600px"},children:[t.jsx(o,{...r,value:e,onChange:a,label:"Bottom Start",popoverSide:"bottom",popoverAlign:"start"}),t.jsx(o,{...r,value:e,onChange:a,label:"Bottom End",popoverSide:"bottom",popoverAlign:"end"}),t.jsx(o,{...r,value:e,onChange:a,label:"Top Start",popoverSide:"top",popoverAlign:"start"}),t.jsx(o,{...r,value:e,onChange:a,label:"Top End",popoverSide:"top",popoverAlign:"end"})]})}},k={args:{showCalendarIcon:!1,readOnly:!1,placeholder:"Type date here"},render:r=>{const[e,a]=n.useState();return t.jsx(o,{...r,value:e,onChange:a,label:"Date without Icon",helpText:"Focus the input to open calendar"})}},j={args:{numberOfMonths:2,mode:"range",placeholder:"Select date range with 2 months"},render:r=>{const[e,a]=n.useState();return t.jsx(o,{...r,value:e,onChange:a,label:"Date Range with Multiple Months",helpText:"Select a range across multiple months"})}},w={args:{numberOfMonths:3,mode:"range",placeholder:"Plan your vacation dates",closeOnSelect:!1},render:r=>{const[e,a]=n.useState();return t.jsxs("div",{style:{width:"400px"},children:[t.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",fontWeight:"600"},children:"Vacation Planning"}),t.jsx(o,{...r,value:e,onChange:a,label:"Vacation Dates",helpText:"Select your vacation period from the 3-month view"}),(e==null?void 0:e.from)&&(e==null?void 0:e.to)&&t.jsxs("div",{style:{marginTop:"16px",padding:"12px",backgroundColor:"var(--t-color-fill-success-secondary)",border:"1px solid var(--t-color-border-success)",borderRadius:"var(--t-border-radius-200)",fontSize:"14px"},children:[t.jsx("strong",{children:"Vacation Duration:"})," ",Math.ceil((e.to.getTime()-e.from.getTime())/(1e3*60*60*24))," days",t.jsx("br",{}),t.jsx("strong",{children:"From:"})," ",e.from.toLocaleDateString(),t.jsx("br",{}),t.jsx("strong",{children:"To:"})," ",e.to.toLocaleDateString()]})]})}},P={args:{mode:"range",layout:"analytics",numberOfMonths:2,showTimezone:!0,timezone:"(UTC+00:00) UTC",showTimeSelection:!0,placeholder:"Select date range"},render:r=>{const[e,a]=n.useState({from:new Date(2025,7,15),to:new Date(2025,8,14)}),[c,i]=n.useState(!1);return t.jsxs("div",{style:{width:"300px"},children:[t.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",fontWeight:"600"},children:"Analytics Date Range"}),t.jsx("p",{style:{margin:"0 0 24px 0",fontSize:"14px",color:"var(--t-color-text-secondary)"},children:"Professional analytics date picker with presets, custom ranges, and timezone support - similar to Amplitude, Mixpanel, and other analytics platforms."}),t.jsx(o,{...r,value:e,onChange:a,open:c,onOpenChange:i,onApply:d=>{console.log("Applied date range config:",d),i(!1)},onCancel:()=>{console.log("Cancelled date range selection"),i(!1)},onSavePreset:(d,l)=>{console.log("Save preset:",d,l)},onRangeTypeChange:d=>{console.log("Range type changed:",d)},label:"Date Range",helpText:"Click to open the analytics date picker"}),(e==null?void 0:e.from)&&(e==null?void 0:e.to)&&t.jsxs("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"var(--t-color-surface-secondary)",border:"1px solid var(--t-color-border-secondary)",borderRadius:"var(--t-border-radius-200)",fontSize:"14px"},children:[t.jsx("strong",{children:"Selected Range:"}),t.jsx("br",{}),t.jsx("strong",{children:"From:"})," ",e.from.toLocaleDateString(),t.jsx("br",{}),t.jsx("strong",{children:"To:"})," ",e.to.toLocaleDateString(),t.jsx("br",{}),t.jsx("strong",{children:"Duration:"})," ",Math.ceil((e.to.getTime()-e.from.getTime())/(1e3*60*60*24))," days"]}),t.jsxs("div",{style:{marginTop:"16px",padding:"12px",backgroundColor:"var(--t-color-fill-info-secondary)",border:"1px solid var(--t-color-border-info)",borderRadius:"var(--t-border-radius-200)",fontSize:"13px"},children:[t.jsx("strong",{children:"Features:"}),t.jsxs("ul",{style:{margin:"8px 0",paddingLeft:"20px"},children:[t.jsx("li",{children:"Preset date ranges (Last 30/60/90 Days, This Week/Month/Quarter/Year)"}),t.jsx("li",{children:"Custom range types (Between, Last, Since, This)"}),t.jsx("li",{children:"Two-month calendar view"}),t.jsx("li",{children:"Save custom presets functionality"}),t.jsx("li",{children:"Timezone display"}),t.jsx("li",{children:"Apply/Cancel actions"}),t.jsx("li",{children:"Time selection option"}),t.jsx("li",{children:"Professional analytics UI"})]})]})]})}};var V,M,z;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <DatePicker {...args} value={value} onChange={setValue} label="Select Date" />;
  }
}`,...(z=(M=u.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var R,O,W;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    mode: 'multiple',
    placeholder: 'Select multiple dates'
  },
  render: args => {
    const [value, setValue] = useState<Date[] | undefined>();
    return <DatePicker {...args} value={value} onChange={setValue} label="Select Multiple Dates" helpText="Hold Ctrl/Cmd to select multiple dates" />;
  }
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var E,L,A;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    mode: 'range',
    placeholder: 'Select date range',
    closeOnSelect: false
  },
  render: args => {
    const [value, setValue] = useState<{
      from?: Date;
      to?: Date;
    } | undefined>();
    return <DatePicker {...args} value={value} onChange={setValue} label="Select Date Range" helpText="Click on two dates to select a range" />;
  }
}`,...(A=(L=g.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var F,Y,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    mode: 'range',
    layout: 'dual',
    closeOnSelect: false,
    numberOfMonths: 2
  },
  render: args => {
    const [value, setValue] = useState<{
      from?: Date;
      to?: Date;
    } | undefined>();
    return <div style={{
      width: '400px'
    }}>
        <DatePicker {...args} value={value} onChange={setValue} startLabel="Departure" endLabel="Return" startPlaceholder="Select departure date" endPlaceholder="Select return date" />
      </div>;
  }
}`,...(B=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var I,q,H;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    mode: 'range',
    layout: 'dual',
    closeOnSelect: false,
    numberOfMonths: 2
  },
  render: args => {
    const [value, setValue] = useState<{
      from?: Date;
      to?: Date;
    } | undefined>();
    return <div style={{
      width: '450px',
      padding: '20px',
      border: '1px solid var(--t-color-border-secondary)',
      borderRadius: 'var(--t-border-radius-300)'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '18px',
        fontWeight: '600'
      }}>Hotel Booking</h3>
        <DatePicker {...args} value={value} onChange={setValue} startLabel="Check-in" endLabel="Check-out" startPlaceholder="Check-in date" endPlaceholder="Check-out date" />
        {value?.from && value?.to && <div style={{
        marginTop: '12px',
        fontSize: '14px',
        color: 'var(--t-color-text-secondary)'
      }}>
            Duration: {Math.ceil((value.to.getTime() - value.from.getTime()) / (1000 * 60 * 60 * 24))} nights
          </div>}
        <button style={{
        marginTop: '16px',
        width: '100%',
        padding: '12px',
        background: 'var(--t-color-fill-brand)',
        color: 'var(--t-color-text-on-brand)',
        border: 'none',
        borderRadius: 'var(--t-border-radius-200)',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500'
      }}>
          Check Availability
        </button>
      </div>;
  }
}`,...(H=(q=h.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var U,_,X;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    const [error, setError] = useState<string>('');
    const handleChange = (date: Date | undefined) => {
      setValue(date);
      if (!date) {
        setError('Date is required');
        return;
      }
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (date < today) {
        setError('Date cannot be in the past');
        return;
      }
      setError('');
    };
    return <DatePicker {...args} value={value} onChange={handleChange} label="Birth Date" placeholder="Select your birth date" errorMessage={error} required />;
  }
}`,...(X=(_=D.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var $,Q,N;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    const today = new Date();
    const minDate = subDays(today, 30); // 30 days ago
    const maxDate = addDays(today, 30); // 30 days from now

    return <DatePicker {...args} value={value} onChange={setValue} label="Appointment Date" placeholder="Select appointment date" minDate={minDate} maxDate={maxDate} helpText={\`Select a date between \${minDate.toLocaleDateString()} and \${maxDate.toLocaleDateString()}\`} />;
  }
}`,...(N=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:N.source}}};var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <DatePicker {...args} value={value} onChange={setValue} label="Working Day" placeholder="Select a working day" isDateDisabled={isWeekend} helpText="Weekends are disabled" calendarProps={{
      footer: "Weekends are not available for selection"
    }} />;
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Z,ee,te;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '300px'
    }}>
        <DatePicker {...args} value={value} onChange={setValue} label="XLarge" size="xlarge" />
        <DatePicker {...args} value={value} onChange={setValue} label="Large" size="large" />
        <DatePicker {...args} value={value} onChange={setValue} label="Medium" size="medium" />
        <DatePicker {...args} value={value} onChange={setValue} label="Small" size="small" />
        <DatePicker {...args} value={value} onChange={setValue} label="XSmall" size="xsmall" />
      </div>;
  }
}`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,oe;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    placeholder: 'Type or select date'
  },
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <DatePicker {...args} value={value} onChange={setValue} label="Editable Date" helpText="You can type the date or use the calendar" />;
  }
}`,...(oe=(re=x.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,se,le;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    dateFormat: 'dd/MM/yyyy'
  },
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <DatePicker {...args} value={value} onChange={setValue} label="Custom Format (DD/MM/YYYY)" placeholder="DD/MM/YYYY" />;
  }
}`,...(le=(se=S.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,de,ce;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => {
    const [formData, setFormData] = useState({
      startDate: undefined as Date | undefined,
      endDate: undefined as Date | undefined,
      birthDate: undefined as Date | undefined
    });
    const [errors, setErrors] = useState({
      startDate: '',
      endDate: '',
      birthDate: ''
    });
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors = {
        startDate: '',
        endDate: '',
        birthDate: ''
      };
      if (!formData.startDate) {
        newErrors.startDate = 'Start date is required';
      }
      if (!formData.endDate) {
        newErrors.endDate = 'End date is required';
      }
      if (!formData.birthDate) {
        newErrors.birthDate = 'Birth date is required';
      }
      if (formData.startDate && formData.endDate && formData.startDate > formData.endDate) {
        newErrors.endDate = 'End date must be after start date';
      }
      setErrors(newErrors);
      if (!Object.values(newErrors).some(error => error)) {
        alert('Form submitted successfully!');
      }
    };
    return <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '300px'
    }}>
        <DatePicker value={formData.startDate} onChange={date => setFormData(prev => ({
        ...prev,
        startDate: date as Date
      }))} label="Start Date" placeholder="Select start date" errorMessage={errors.startDate} required />
        
        <DatePicker value={formData.endDate} onChange={date => setFormData(prev => ({
        ...prev,
        endDate: date as Date
      }))} label="End Date" placeholder="Select end date" errorMessage={errors.endDate} required />
        
        <DatePicker value={formData.birthDate} onChange={date => setFormData(prev => ({
        ...prev,
        birthDate: date as Date
      }))} label="Birth Date" placeholder="Select birth date" errorMessage={errors.birthDate} maxDate={new Date()} required />
        
        <button type="submit" style={{
        padding: '8px 16px',
        marginTop: '16px',
        background: 'var(--t-color-fill-brand)',
        color: 'var(--t-color-text-on-brand)',
        border: 'none',
        borderRadius: 'var(--t-border-radius-200)',
        cursor: 'pointer'
      }}>
          Submit
        </button>
      </form>;
  }
}`,...(ce=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,ge;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'DatePicker component with RTL text direction and Arabic content for testing right-to-left layout and font rendering.'
      }
    }
  },
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <div dir="rtl" style={{
      fontFamily: 'var(--t-font-family-arabic)',
      padding: '20px'
    }}>
        <div style={{
        marginBottom: '16px',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
          منتقي التاريخ العربي
        </div>
        <DatePicker {...args} value={value} onChange={setValue} label="تاريخ الميلاد" placeholder="اختر التاريخ" helpText="انقر على الأيقونة لفتح التقويم" />
      </div>;
  }
}`,...(ge=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var me,he,De;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      padding: '100px',
      width: '600px'
    }}>
        <DatePicker {...args} value={value} onChange={setValue} label="Bottom Start" popoverSide="bottom" popoverAlign="start" />
        
        <DatePicker {...args} value={value} onChange={setValue} label="Bottom End" popoverSide="bottom" popoverAlign="end" />
        
        <DatePicker {...args} value={value} onChange={setValue} label="Top Start" popoverSide="top" popoverAlign="start" />
        
        <DatePicker {...args} value={value} onChange={setValue} label="Top End" popoverSide="top" popoverAlign="end" />
      </div>;
  }
}`,...(De=(he=T.parameters)==null?void 0:he.docs)==null?void 0:De.source}}};var fe,be,ve;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    showCalendarIcon: false,
    readOnly: false,
    placeholder: 'Type date here'
  },
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <DatePicker {...args} value={value} onChange={setValue} label="Date without Icon" helpText="Focus the input to open calendar" />;
  }
}`,...(ve=(be=k.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var xe,Se,ye;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    numberOfMonths: 2,
    mode: 'range',
    placeholder: 'Select date range with 2 months'
  },
  render: args => {
    const [value, setValue] = useState<{
      from?: Date;
      to?: Date;
    } | undefined>();
    return <DatePicker {...args} value={value} onChange={setValue} label="Date Range with Multiple Months" helpText="Select a range across multiple months" />;
  }
}`,...(ye=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var Ce,Te,ke;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    numberOfMonths: 3,
    mode: 'range',
    placeholder: 'Plan your vacation dates',
    closeOnSelect: false
  },
  render: args => {
    const [value, setValue] = useState<{
      from?: Date;
      to?: Date;
    } | undefined>();
    return <div style={{
      width: '400px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '18px',
        fontWeight: '600'
      }}>
          Vacation Planning
        </h3>
        <DatePicker {...args} value={value} onChange={setValue} label="Vacation Dates" helpText="Select your vacation period from the 3-month view" />
        {value?.from && value?.to && <div style={{
        marginTop: '16px',
        padding: '12px',
        backgroundColor: 'var(--t-color-fill-success-secondary)',
        border: '1px solid var(--t-color-border-success)',
        borderRadius: 'var(--t-border-radius-200)',
        fontSize: '14px'
      }}>
            <strong>Vacation Duration:</strong> {Math.ceil((value.to.getTime() - value.from.getTime()) / (1000 * 60 * 60 * 24))} days
            <br />
            <strong>From:</strong> {value.from.toLocaleDateString()}
            <br />
            <strong>To:</strong> {value.to.toLocaleDateString()}
          </div>}
      </div>;
  }
}`,...(ke=(Te=w.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var je,we,Pe;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    mode: 'range',
    layout: 'analytics',
    numberOfMonths: 2,
    showTimezone: true,
    timezone: '(UTC+00:00) UTC',
    showTimeSelection: true,
    placeholder: 'Select date range'
  },
  render: args => {
    const [value, setValue] = useState<{
      from?: Date;
      to?: Date;
    } | undefined>({
      from: new Date(2025, 7, 15),
      // Aug 15, 2025
      to: new Date(2025, 8, 14) // Sep 14, 2025
    });
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      width: '300px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '18px',
        fontWeight: '600'
      }}>
          Analytics Date Range
        </h3>
        <p style={{
        margin: '0 0 24px 0',
        fontSize: '14px',
        color: 'var(--t-color-text-secondary)'
      }}>
          Professional analytics date picker with presets, custom ranges, and timezone support - similar to Amplitude, Mixpanel, and other analytics platforms.
        </p>

        <DatePicker {...args} value={value} onChange={setValue} open={isOpen} onOpenChange={setIsOpen} onApply={config => {
        console.log('Applied date range config:', config);
        setIsOpen(false);
      }} onCancel={() => {
        console.log('Cancelled date range selection');
        setIsOpen(false);
      }} onSavePreset={(name, config) => {
        console.log('Save preset:', name, config);
      }} onRangeTypeChange={type => {
        console.log('Range type changed:', type);
      }} label="Date Range" helpText="Click to open the analytics date picker" />

        {value?.from && value?.to && <div style={{
        marginTop: '24px',
        padding: '16px',
        backgroundColor: 'var(--t-color-surface-secondary)',
        border: '1px solid var(--t-color-border-secondary)',
        borderRadius: 'var(--t-border-radius-200)',
        fontSize: '14px'
      }}>
            <strong>Selected Range:</strong>
            <br />
            <strong>From:</strong> {value.from.toLocaleDateString()}
            <br />
            <strong>To:</strong> {value.to.toLocaleDateString()}
            <br />
            <strong>Duration:</strong> {Math.ceil((value.to.getTime() - value.from.getTime()) / (1000 * 60 * 60 * 24))} days
          </div>}

        <div style={{
        marginTop: '16px',
        padding: '12px',
        backgroundColor: 'var(--t-color-fill-info-secondary)',
        border: '1px solid var(--t-color-border-info)',
        borderRadius: 'var(--t-border-radius-200)',
        fontSize: '13px'
      }}>
          <strong>Features:</strong>
          <ul style={{
          margin: '8px 0',
          paddingLeft: '20px'
        }}>
            <li>Preset date ranges (Last 30/60/90 Days, This Week/Month/Quarter/Year)</li>
            <li>Custom range types (Between, Last, Since, This)</li>
            <li>Two-month calendar view</li>
            <li>Save custom presets functionality</li>
            <li>Timezone display</li>
            <li>Apply/Cancel actions</li>
            <li>Time selection option</li>
            <li>Professional analytics UI</li>
          </ul>
        </div>
      </div>;
  }
}`,...(Pe=(we=P.parameters)==null?void 0:we.docs)==null?void 0:Pe.source}}};const Ee=["Default","Multiple","Range","DualRange","HotelBooking","WithValidation","WithRestrictions","WithDisabledDates","Sizes","Editable","CustomFormat","FormIntegration","RTLTest","PopoverPositions","WithoutIcon","MultipleMonths","VacationPlanning","AnalyticsRange"],Ye=Object.freeze(Object.defineProperty({__proto__:null,AnalyticsRange:P,CustomFormat:S,Default:u,DualRange:m,Editable:x,FormIntegration:y,HotelBooking:h,Multiple:p,MultipleMonths:j,PopoverPositions:T,RTLTest:C,Range:g,Sizes:v,VacationPlanning:w,WithDisabledDates:b,WithRestrictions:f,WithValidation:D,WithoutIcon:k,__namedExportsOrder:Ee,default:We},Symbol.toStringTag,{value:"Module"}));export{S as C,Ye as D,x as E,y as F,p as M,T as P,g as R,v as S,D as W,u as a,f as b,b as c,C as d};
