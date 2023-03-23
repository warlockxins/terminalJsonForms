import React, { FC } from 'react';
import { Box, Text } from 'ink';

export const LeftPanel: FC = () => {
  return (
    <Box width={25}
      borderStyle="single"
      flexDirection="column"
      borderColor="gray"
    >
      <Box marginBottom={1}>
        <Text color="green" underline>[V/x] Admin</Text>
      </Box>
      <Text color="blue">Products</Text>
      <Text>Dashboard</Text>
      <Text>Orders</Text>
      <Text>Customers</Text>
    </Box>
  )
};
