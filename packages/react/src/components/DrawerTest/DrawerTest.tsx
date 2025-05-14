import React from 'react';
import { Drawer } from '../Drawer/Drawer';
import { Button } from '../Button/Button';

// This is just a test file to make sure the Drawer component can be rendered
// with Button components replacing the native buttons

const DrawerTest = () => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Test Drawer"
        showBackButton={true}
        showClose={true}
        showFooter={true}
        position="right"
        size="medium"
        primaryAction={{
          label: 'Save',
          onClick: () => {
            console.log('Save clicked');
            setOpen(false);
          },
          variant: 'primary',
          tone: 'default'
        }}
        secondaryAction={{
          label: 'Cancel',
          onClick: () => setOpen(false),
          variant: 'secondary',
          tone: 'default'
        }}
      >
        <div>
          <p>Drawer content goes here</p>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerTest;
