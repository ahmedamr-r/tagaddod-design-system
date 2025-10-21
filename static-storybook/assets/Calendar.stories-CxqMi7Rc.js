import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{C as o}from"./Calendar-kiPbSDid.js";import{r as s}from"./index-D4H_InIO.js";const De={title:"Components/Calendar",component:o,parameters:{layout:"centered",docs:{description:{component:"A flexible calendar component built on React DayPicker with full design system integration and RTL support."}}},argTypes:{variant:{control:{type:"select"},options:["default","analytics"],description:"Calendar variant - analytics enables preset sidebar"},mode:{control:{type:"select"},options:["single","multiple","range"],description:"Selection mode for the calendar"},captionLayout:{control:{type:"select"},options:["label","dropdown","dropdown-months","dropdown-years"],description:"Layout of the month caption"},numberOfMonths:{control:{type:"number",min:1,max:3},description:"Number of months to display"},showOutsideDays:{control:"boolean",description:"Whether to show days from adjacent months"},fixedWeeks:{control:"boolean",description:"Whether to display 6 weeks per month (fixed height)"},reverseMonths:{control:"boolean",description:"Whether to reverse the order of months when displaying multiple"},pagedNavigation:{control:"boolean",description:"Whether to enable paged navigation for multiple months"}},args:{variant:"default",mode:"single",captionLayout:"label",numberOfMonths:1,showOutsideDays:!1,fixedWeeks:!1,reverseMonths:!1,pagedNavigation:!1}},g={render:a=>{const[t,r]=s.useState();return e.jsx(o,{...a,selected:t,onSelect:n=>r(n)})}},p={args:{mode:"multiple"},render:a=>{const[t,r]=s.useState();return e.jsx(o,{...a,selected:t,onSelect:n=>r(n)})}},u={args:{mode:"range"},render:a=>{const[t,r]=s.useState();return e.jsx(o,{...a,selected:t,onSelect:n=>r(n)})}},m={args:{captionLayout:"dropdown",startMonth:new Date(2020,0),endMonth:new Date(2030,11)},render:a=>{const[t,r]=s.useState();return e.jsx(o,{...a,selected:t,onSelect:n=>r(n)})}},y={args:{numberOfMonths:2},render:a=>{const[t,r]=s.useState();return e.jsx(o,{...a,selected:t,onSelect:n=>r(n)})}},h={args:{mode:"range",numberOfMonths:2,pagedNavigation:!0},render:a=>{const[t,r]=s.useState();return e.jsxs("div",{children:[e.jsx(o,{...a,selected:t,onSelect:n=>r(n)}),t&&(t.from||t.to)&&e.jsx("div",{style:{marginTop:"16px",padding:"12px",backgroundColor:"var(--t-color-surface-secondary)",borderRadius:"8px",fontSize:"14px",textAlign:"center"},children:t.from&&t.to?`Selected range: ${t.from.toLocaleDateString()} - ${t.to.toLocaleDateString()}`:t.from?`Start date: ${t.from.toLocaleDateString()}`:t.to?`End date: ${t.to.toLocaleDateString()}`:null})]})}},f={args:{showOutsideDays:!0},render:a=>{const[t,r]=s.useState();return e.jsx(o,{...a,selected:t,onSelect:n=>r(n)})}},S={render:a=>{const[t,r]=s.useState();return e.jsx(o,{...a,selected:t,onSelect:n=>r(n),footer:t?e.jsxs("p",{style:{margin:0,textAlign:"center"},children:["You selected ",t.toLocaleDateString(),"."]}):e.jsx("p",{style:{margin:0,textAlign:"center"},children:"Please pick a date."})})}},x={render:a=>{const[t,r]=s.useState(),n=i=>{const l=i.getDay();return l===0||l===6};return e.jsx(o,{...a,selected:t,onSelect:i=>r(i),disabled:n,footer:"Weekends are disabled"})}},D={parameters:{docs:{description:{story:`Calendar component with RTL text direction and Arabic content for testing right-to-left layout and font rendering.

        **Features tested:**
        - Arabic font family integration
        - RTL text direction
        - Proper date formatting in Arabic locale
        - Line height adjustments for Arabic text
        - Border positioning in RTL mode`}}},render:a=>{const[t,r]=s.useState(),n={fontFamily:"var(--t-font-family-arabic)",padding:"20px",textAlign:"right",lineHeight:"var(--t-line-height-arabic, 1.2)"},i={marginBottom:"16px",fontSize:"18px",fontWeight:"bold",lineHeight:"var(--t-line-height-arabic, 1.2)"};return e.jsxs("div",{dir:"rtl",style:n,children:[e.jsx("div",{style:i,children:"التقويم العربي - اختبار التخطيط من اليمين إلى اليسار"}),e.jsx(o,{...a,selected:t,onSelect:l=>r(l),footer:e.jsx("div",{style:{textAlign:"center",lineHeight:"var(--t-line-height-arabic, 1.2)",margin:0},children:t?`تم اختيار: ${t.toLocaleDateString("ar-SA")}`:"اختر تاريخاً من التقويم"})}),t&&e.jsxs("div",{style:{marginTop:"16px",padding:"12px",backgroundColor:"var(--t-color-surface-secondary)",borderRadius:"8px",fontSize:"14px",lineHeight:"var(--t-line-height-arabic, 1.2)"},children:["التاريخ المحدد: ",t.toLocaleDateString("ar-SA",{weekday:"long",year:"numeric",month:"long",day:"numeric"})]})]})}},v={parameters:{viewport:{defaultViewport:"mobile1"}},render:a=>{const[t,r]=s.useState();return e.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:e.jsx(o,{...a,selected:t,onSelect:n=>r(n)})})}},b={args:{variant:"analytics",mode:"range",numberOfMonths:2},parameters:{docs:{description:{story:`**Analytics Range Calendar with Date Input Validation**

        This story demonstrates robust date validation for the analytics variant with configurable month display.

        **Use the numberOfMonths control above to change between 1, 2, or 3 months!**

        **Validation Features:**
        - **Graceful Invalid Input Handling**: No error messages shown for invalid formats
        - **Multiple Format Support**: Accepts dd/MM/yyyy, dd/MM/yy, d/M/yyyy, dd-MM-yyyy, yyyy-MM-dd
        - **Smart Fallbacks**: Invalid dates automatically fallback to sensible defaults
        - **OnBlur Validation**: Validation triggers when user moves focus away from input

        **Fallback Behavior:**
        - **Start Date**: Invalid input falls back to January 1st of current year
        - **End Date**: Invalid input falls back to current date
        - **Since Date**: Invalid input falls back to January 1st of current year

        **Test Cases to Try:**
        1. Enter letters like "abc" in date fields and click away
        2. Enter partial dates like "12/" and blur the input
        3. Enter invalid dates like "32/13/2024" and blur
        4. Enter valid dates in different formats (12/05/2024, 2024-05-12, etc.)
        5. Clear the input completely and blur

        The component will silently handle all invalid cases with appropriate fallbacks.`}}},render:a=>{const[t,r]=s.useState({from:new Date(new Date().setDate(new Date().getDate()-30)),to:new Date}),[n,i]=s.useState("custom"),[l,ue]=s.useState("between"),[me,ye]=s.useState(30),[he,fe]=s.useState("week"),[d,j]=s.useState(new Date(new Date().setDate(new Date().getDate()-30))),[c,k]=s.useState(new Date),[Se,xe]=s.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px",backgroundColor:"var(--t-color-surface-secondary)",minHeight:"100vh"},children:[e.jsxs("div",{style:{padding:"16px",backgroundColor:"var(--t-color-surface-primary)",borderRadius:"8px",border:"1px solid var(--t-color-border-secondary)"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",color:"var(--t-color-text-primary)"},children:"Date Validation Test Instructions"}),e.jsxs("ul",{style:{margin:0,color:"var(--t-color-text-secondary)",fontSize:"14px"},children:[e.jsx("li",{children:'Try entering invalid text like "abc" in date fields'}),e.jsx("li",{children:'Enter partial dates like "12/" or "2024-"'}),e.jsx("li",{children:'Enter impossible dates like "32/13/2024"'}),e.jsx("li",{children:"Test different valid formats: dd/MM/yyyy, yyyy-MM-dd, etc."}),e.jsx("li",{children:"Clear inputs completely and click away"}),e.jsxs("li",{children:[e.jsx("strong",{children:"Expected:"})," Invalid inputs silently fall back to defaults on blur"]})]})]}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"flex-start"},children:e.jsx(o,{...a,selected:t,onSelect:C=>{const R=C;r(R),R&&(j(R.from),k(R.to))},selectedPreset:n,onPresetChange:i,rangeType:l,onRangeTypeChange:C=>{ue(C),C==="since"&&(xe(!0),i("custom"))},rangeValue:me,onRangeValueChange:ye,periodType:he,onPeriodTypeChange:fe,startDate:d,endDate:c,onStartDateChange:j,onEndDateChange:k,showCustomPreset:Se,onApply:()=>{console.log("Applied range:",{startDate:d,endDate:c,rangeType:l}),alert(`Applied range: ${d==null?void 0:d.toLocaleDateString()} - ${c==null?void 0:c.toLocaleDateString()}`)},onCancel:()=>{console.log("Cancelled")}})}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"var(--t-color-surface-primary)",borderRadius:"8px",border:"1px solid var(--t-color-border-secondary)"},children:[e.jsx("h4",{style:{margin:"0 0 12px 0",color:"var(--t-color-text-primary)"},children:"Current State"}),e.jsxs("div",{style:{fontSize:"14px",color:"var(--t-color-text-secondary)"},children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Range Type:"})," ",l]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Start Date:"})," ",d?d.toLocaleDateString():"Not set"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"End Date:"})," ",c?c.toLocaleDateString():"Not set"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Selected Range:"})," ",t!=null&&t.from?t.from.toLocaleDateString():"N/A"," - ",t!=null&&t.to?t.to.toLocaleDateString():"N/A"]})]})]})]})}},w={args:{variant:"default",mode:"single",numberOfMonths:1},parameters:{docs:{description:{story:`**Calendar with Navigation Restrictions**

        This story demonstrates the new \`minDate\` and \`maxDate\` props that restrict calendar navigation.

        **Features:**
        - **minDate**: Prevents navigating to months before this date
        - **maxDate**: Prevents navigating to months after this date
        - **Smart Button States**: Previous/Next buttons automatically disable when limits are reached
        - **RTL Support**: Works correctly in both LTR and RTL modes
        - **All Variants**: Compatible with default, dropdown, and analytics variants

        **Current Configuration:**
        - **Min Date**: January 2024 (cannot go before)
        - **Max Date**: December 2025 (cannot go after)
        - Try clicking the navigation arrows to see the restrictions in action

        **Use Cases:**
        - Restrict date selection to valid business periods
        - Prevent navigation to historical data that doesn't exist
        - Limit future date selection for booking systems
        - Control data visualization timeframes`}}},render:a=>{const[t,r]=s.useState(),n=new Date(2024,0,1),i=new Date(2025,11,31);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px",alignItems:"center"},children:[e.jsxs("div",{style:{padding:"16px",backgroundColor:"var(--t-color-surface-primary)",borderRadius:"8px",border:"1px solid var(--t-color-border-secondary)",maxWidth:"600px",textAlign:"center"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",color:"var(--t-color-text-primary)"},children:"Navigation Restrictions Demo"}),e.jsxs("p",{style:{margin:0,color:"var(--t-color-text-secondary)",fontSize:"14px"},children:[e.jsx("strong",{children:"Allowed Range:"})," January 2024 - December 2025",e.jsx("br",{}),"Try navigating with the arrow buttons. They will disable when you reach the limits."]})]}),e.jsx(o,{...a,selected:t,onSelect:l=>r(l),minDate:n,maxDate:i,footer:t?e.jsxs("p",{style:{margin:0,textAlign:"center"},children:["Selected: ",t.toLocaleDateString()]}):e.jsx("p",{style:{margin:0,textAlign:"center"},children:"Navigation restricted to Jan 2024 - Dec 2025"})}),e.jsxs("div",{style:{padding:"12px",backgroundColor:"var(--t-color-surface-secondary)",borderRadius:"8px",fontSize:"14px",color:"var(--t-color-text-secondary)",textAlign:"center"},children:[e.jsx("strong",{children:"Current Month:"})," ",new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"}),e.jsx("br",{}),e.jsx("strong",{children:"Min Date:"})," ",n.toLocaleDateString(),e.jsx("br",{}),e.jsx("strong",{children:"Max Date:"})," ",i.toLocaleDateString()]})]})}};var M,T,L;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<Date | undefined>();
    return <Calendar {...args} selected={selected} onSelect={date => setSelected(date as Date | undefined)} />;
  }
}`,...(L=(T=g.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var A,P,W;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    mode: 'multiple'
  },
  render: args => {
    const [selected, setSelected] = useState<Date[] | undefined>();
    return <Calendar {...args} selected={selected} onSelect={date => setSelected(date as Date[] | undefined)} />;
  }
}`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var E,N,V;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    mode: 'range'
  },
  render: args => {
    const [selected, setSelected] = useState<{
      from?: Date;
      to?: Date;
    } | undefined>();
    return <Calendar {...args} selected={selected} onSelect={date => setSelected(date as {
      from?: Date;
      to?: Date;
    } | undefined)} />;
  }
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var I,O,z;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    captionLayout: 'dropdown',
    startMonth: new Date(2020, 0),
    endMonth: new Date(2030, 11)
  },
  render: args => {
    const [selected, setSelected] = useState<Date | undefined>();
    return <Calendar {...args} selected={selected} onSelect={date => setSelected(date as Date | undefined)} />;
  }
}`,...(z=(O=m.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var F,$,H;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    numberOfMonths: 2
  },
  render: args => {
    const [selected, setSelected] = useState<Date | undefined>();
    return <Calendar {...args} selected={selected} onSelect={date => setSelected(date as Date | undefined)} />;
  }
}`,...(H=($=y.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var J,B,U;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    mode: 'range',
    numberOfMonths: 2,
    pagedNavigation: true
  },
  render: args => {
    const [selected, setSelected] = useState<{
      from?: Date;
      to?: Date;
    } | undefined>();
    return <div>
        <Calendar {...args} selected={selected} onSelect={date => setSelected(date as {
        from?: Date;
        to?: Date;
      } | undefined)} />
        {selected && (selected.from || selected.to) && <div style={{
        marginTop: '16px',
        padding: '12px',
        backgroundColor: 'var(--t-color-surface-secondary)',
        borderRadius: '8px',
        fontSize: '14px',
        textAlign: 'center'
      }}>
            {selected.from && selected.to ? \`Selected range: \${selected.from.toLocaleDateString()} - \${selected.to.toLocaleDateString()}\` : selected.from ? \`Start date: \${selected.from.toLocaleDateString()}\` : selected.to ? \`End date: \${selected.to.toLocaleDateString()}\` : null}
          </div>}
      </div>;
  }
}`,...(U=(B=h.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var _,G,Y;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    showOutsideDays: true
  },
  render: args => {
    const [selected, setSelected] = useState<Date | undefined>();
    return <Calendar {...args} selected={selected} onSelect={date => setSelected(date as Date | undefined)} />;
  }
}`,...(Y=(G=f.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var q,K,Q;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<Date | undefined>();
    return <Calendar {...args} selected={selected} onSelect={date => setSelected(date as Date | undefined)} footer={selected ? <p style={{
      margin: 0,
      textAlign: 'center'
    }}>
              You selected {selected.toLocaleDateString()}.
            </p> : <p style={{
      margin: 0,
      textAlign: 'center'
    }}>
              Please pick a date.
            </p>} />;
  }
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<Date | undefined>();

    // Disable weekends
    const isWeekend = (date: Date) => {
      const day = date.getDay();
      return day === 0 || day === 6;
    };
    return <Calendar {...args} selected={selected} onSelect={date => setSelected(date as Date | undefined)} disabled={isWeekend} footer="Weekends are disabled" />;
  }
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`Calendar component with RTL text direction and Arabic content for testing right-to-left layout and font rendering.

        **Features tested:**
        - Arabic font family integration
        - RTL text direction
        - Proper date formatting in Arabic locale
        - Line height adjustments for Arabic text
        - Border positioning in RTL mode\`
      }
    }
  },
  render: args => {
    const [selected, setSelected] = useState<Date | undefined>();

    // Apply RTL-aware styling
    const rtlContainerStyle = {
      fontFamily: 'var(--t-font-family-arabic)',
      padding: '20px',
      textAlign: 'right' as const,
      lineHeight: 'var(--t-line-height-arabic, 1.2)'
    };
    const titleStyle = {
      marginBottom: '16px',
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: 'var(--t-line-height-arabic, 1.2)'
    };
    return <div dir="rtl" style={rtlContainerStyle}>
        <div style={titleStyle}>
          التقويم العربي - اختبار التخطيط من اليمين إلى اليسار
        </div>
        <Calendar {...args} selected={selected} onSelect={date => setSelected(date as Date | undefined)} footer={<div style={{
        textAlign: 'center',
        lineHeight: 'var(--t-line-height-arabic, 1.2)',
        margin: 0
      }}>
              {selected ? \`تم اختيار: \${selected.toLocaleDateString('ar-SA')}\` : 'اختر تاريخاً من التقويم'}
            </div>} />
        {selected && <div style={{
        marginTop: '16px',
        padding: '12px',
        backgroundColor: 'var(--t-color-surface-secondary)',
        borderRadius: '8px',
        fontSize: '14px',
        lineHeight: 'var(--t-line-height-arabic, 1.2)'
      }}>
            التاريخ المحدد: {selected.toLocaleDateString('ar-SA', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
          </div>}
      </div>;
  }
}`,...(ae=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,se,oe;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: args => {
    const [selected, setSelected] = useState<Date | undefined>();
    return <div style={{
      width: '100%',
      maxWidth: '300px'
    }}>
        <Calendar {...args} selected={selected} onSelect={date => setSelected(date as Date | undefined)} />
      </div>;
  }
}`,...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,le,de;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    variant: 'analytics',
    mode: 'range',
    numberOfMonths: 2
  },
  parameters: {
    docs: {
      description: {
        story: \`**Analytics Range Calendar with Date Input Validation**

        This story demonstrates robust date validation for the analytics variant with configurable month display.

        **Use the numberOfMonths control above to change between 1, 2, or 3 months!**

        **Validation Features:**
        - **Graceful Invalid Input Handling**: No error messages shown for invalid formats
        - **Multiple Format Support**: Accepts dd/MM/yyyy, dd/MM/yy, d/M/yyyy, dd-MM-yyyy, yyyy-MM-dd
        - **Smart Fallbacks**: Invalid dates automatically fallback to sensible defaults
        - **OnBlur Validation**: Validation triggers when user moves focus away from input

        **Fallback Behavior:**
        - **Start Date**: Invalid input falls back to January 1st of current year
        - **End Date**: Invalid input falls back to current date
        - **Since Date**: Invalid input falls back to January 1st of current year

        **Test Cases to Try:**
        1. Enter letters like "abc" in date fields and click away
        2. Enter partial dates like "12/" and blur the input
        3. Enter invalid dates like "32/13/2024" and blur
        4. Enter valid dates in different formats (12/05/2024, 2024-05-12, etc.)
        5. Clear the input completely and blur

        The component will silently handle all invalid cases with appropriate fallbacks.\`
      }
    }
  },
  render: args => {
    const [selectedRange, setSelectedRange] = useState<{
      from?: Date;
      to?: Date;
    }>({
      from: new Date(new Date().setDate(new Date().getDate() - 30)),
      to: new Date()
    });
    const [selectedPreset, setSelectedPreset] = useState<string>('custom');
    const [rangeType, setRangeType] = useState<'between' | 'last' | 'since' | 'this'>('between');
    const [rangeValue, setRangeValue] = useState<string | number>(30);
    const [periodType, setPeriodType] = useState<string>('week');
    const [startDate, setStartDate] = useState<Date | undefined>(new Date(new Date().setDate(new Date().getDate() - 30)));
    const [endDate, setEndDate] = useState<Date | undefined>(new Date());
    const [showCustomPreset, setShowCustomPreset] = useState<boolean>(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
      backgroundColor: 'var(--t-color-surface-secondary)',
      minHeight: '100vh'
    }}>
        {/* Instructions */}
        <div style={{
        padding: '16px',
        backgroundColor: 'var(--t-color-surface-primary)',
        borderRadius: '8px',
        border: '1px solid var(--t-color-border-secondary)'
      }}>
          <h3 style={{
          margin: '0 0 12px 0',
          color: 'var(--t-color-text-primary)'
        }}>
            Date Validation Test Instructions
          </h3>
          <ul style={{
          margin: 0,
          color: 'var(--t-color-text-secondary)',
          fontSize: '14px'
        }}>
            <li>Try entering invalid text like "abc" in date fields</li>
            <li>Enter partial dates like "12/" or "2024-"</li>
            <li>Enter impossible dates like "32/13/2024"</li>
            <li>Test different valid formats: dd/MM/yyyy, yyyy-MM-dd, etc.</li>
            <li>Clear inputs completely and click away</li>
            <li><strong>Expected:</strong> Invalid inputs silently fall back to defaults on blur</li>
          </ul>
        </div>

        {/* Calendar Component */}
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
          <Calendar {...args} selected={selectedRange} onSelect={range => {
          const newRange = range as {
            from?: Date;
            to?: Date;
          };
          setSelectedRange(newRange);
          if (newRange) {
            setStartDate(newRange.from);
            setEndDate(newRange.to);
          }
        }} selectedPreset={selectedPreset} onPresetChange={setSelectedPreset} rangeType={rangeType} onRangeTypeChange={type => {
          setRangeType(type);
          // Switch to 'since' mode to test single date validation
          if (type === 'since') {
            setShowCustomPreset(true);
            setSelectedPreset('custom');
          }
        }} rangeValue={rangeValue} onRangeValueChange={setRangeValue} periodType={periodType} onPeriodTypeChange={setPeriodType} startDate={startDate} endDate={endDate} onStartDateChange={setStartDate} onEndDateChange={setEndDate} showCustomPreset={showCustomPreset} onApply={() => {
          console.log('Applied range:', {
            startDate,
            endDate,
            rangeType
          });
          alert(\`Applied range: \${startDate?.toLocaleDateString()} - \${endDate?.toLocaleDateString()}\`);
        }} onCancel={() => {
          console.log('Cancelled');
        }} />
        </div>

        {/* Current State Display */}
        <div style={{
        padding: '16px',
        backgroundColor: 'var(--t-color-surface-primary)',
        borderRadius: '8px',
        border: '1px solid var(--t-color-border-secondary)'
      }}>
          <h4 style={{
          margin: '0 0 12px 0',
          color: 'var(--t-color-text-primary)'
        }}>
            Current State
          </h4>
          <div style={{
          fontSize: '14px',
          color: 'var(--t-color-text-secondary)'
        }}>
            <p><strong>Range Type:</strong> {rangeType}</p>
            <p><strong>Start Date:</strong> {startDate ? startDate.toLocaleDateString() : 'Not set'}</p>
            <p><strong>End Date:</strong> {endDate ? endDate.toLocaleDateString() : 'Not set'}</p>
            <p><strong>Selected Range:</strong> {selectedRange?.from ? selectedRange.from.toLocaleDateString() : 'N/A'} - {selectedRange?.to ? selectedRange.to.toLocaleDateString() : 'N/A'}</p>
          </div>
        </div>
      </div>;
  }
}`,...(de=(le=b.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ge,pe;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    variant: "default",
    mode: "single",
    numberOfMonths: 1
  },
  parameters: {
    docs: {
      description: {
        story: \`**Calendar with Navigation Restrictions**

        This story demonstrates the new \\\`minDate\\\` and \\\`maxDate\\\` props that restrict calendar navigation.

        **Features:**
        - **minDate**: Prevents navigating to months before this date
        - **maxDate**: Prevents navigating to months after this date
        - **Smart Button States**: Previous/Next buttons automatically disable when limits are reached
        - **RTL Support**: Works correctly in both LTR and RTL modes
        - **All Variants**: Compatible with default, dropdown, and analytics variants

        **Current Configuration:**
        - **Min Date**: January 2024 (cannot go before)
        - **Max Date**: December 2025 (cannot go after)
        - Try clicking the navigation arrows to see the restrictions in action

        **Use Cases:**
        - Restrict date selection to valid business periods
        - Prevent navigation to historical data that doesn't exist
        - Limit future date selection for booking systems
        - Control data visualization timeframes\`
      }
    }
  },
  render: args => {
    const [selected, setSelected] = useState<Date | undefined>();

    // Set restrictions: January 2024 to December 2025
    const minDate = new Date(2024, 0, 1); // January 1, 2024
    const maxDate = new Date(2025, 11, 31); // December 31, 2025

    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
      alignItems: "center"
    }}>
        {/* Instructions */}
        <div style={{
        padding: "16px",
        backgroundColor: "var(--t-color-surface-primary)",
        borderRadius: "8px",
        border: "1px solid var(--t-color-border-secondary)",
        maxWidth: "600px",
        textAlign: "center"
      }}>
          <h3 style={{
          margin: "0 0 12px 0",
          color: "var(--t-color-text-primary)"
        }}>
            Navigation Restrictions Demo
          </h3>
          <p style={{
          margin: 0,
          color: "var(--t-color-text-secondary)",
          fontSize: "14px"
        }}>
            <strong>Allowed Range:</strong> January 2024 - December 2025<br />
            Try navigating with the arrow buttons. They will disable when you reach the limits.
          </p>
        </div>

        {/* Calendar */}
        <Calendar {...args} selected={selected} onSelect={date => setSelected(date as Date | undefined)} minDate={minDate} maxDate={maxDate} footer={selected ? <p style={{
        margin: 0,
        textAlign: "center"
      }}>
                Selected: {selected.toLocaleDateString()}
              </p> : <p style={{
        margin: 0,
        textAlign: "center"
      }}>
                Navigation restricted to Jan 2024 - Dec 2025
              </p>} />
        
        {/* Current State */}
        <div style={{
        padding: "12px",
        backgroundColor: "var(--t-color-surface-secondary)",
        borderRadius: "8px",
        fontSize: "14px",
        color: "var(--t-color-text-secondary)",
        textAlign: "center"
      }}>
          <strong>Current Month:</strong> {new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "numeric"
        })}<br />
          <strong>Min Date:</strong> {minDate.toLocaleDateString()}<br />
          <strong>Max Date:</strong> {maxDate.toLocaleDateString()}
        </div>
      </div>;
  }
}`,...(pe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};const ve=["Default","Multiple","Range","WithDropdown","MultipleMonths","MultipleMonthsRange","WithOutsideDays","WithFooter","WithDisabledDates","RTLTest","Responsive","AnalyticsDateValidation","WithNavigationRestrictions"],Re=Object.freeze(Object.defineProperty({__proto__:null,AnalyticsDateValidation:b,Default:g,Multiple:p,MultipleMonths:y,MultipleMonthsRange:h,RTLTest:D,Range:u,Responsive:v,WithDisabledDates:x,WithDropdown:m,WithFooter:S,WithNavigationRestrictions:w,WithOutsideDays:f,__namedExportsOrder:ve,default:De},Symbol.toStringTag,{value:"Module"}));export{Re as C,g as D,p as M,u as R,m as W,y as a,h as b,S as c,x as d,f as e,D as f};
