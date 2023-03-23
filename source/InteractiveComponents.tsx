import React, { FC } from 'react';
import products from './baseData.json';
import { Card, CardList } from './types';
import { Text, Box, useFocus, useInput } from 'ink';

const data: CardList = products as CardList;

const CardComponent: FC<Card & { selected: boolean, onSelected: () => void }> = ({ title, subtitle, text, link, link2, selected, onSelected }) => {
  const { isFocused: focus } = useFocus({ autoFocus: true });
  useInput((_input, key) => {
    if (key.return) {
      onSelected();
    } else {
      return;
    }
  }, { isActive: focus });

  const [focusedBorderStyle, setFocusedBorderStyle] = React.useState<'classic' | 'round'>('round');


  React.useEffect(() => {
    if (!focus) {
    }
    const intr = setInterval(() => {
      setFocusedBorderStyle((current)=>{
        if (current === 'classic') {
          return 'round';
        }
        return 'classic';
      });
      
    }, 500);

    return () => {
      clearInterval(intr);
    }
  }, [focus]);

  return (
    <Box
      flexDirection="column"
      borderStyle={focus ? focusedBorderStyle : "round"}
      borderColor={selected ? "blue" : "gray"}
      padding={1}
    >
      <Box flexDirection="column">
        <Text color="yellow">{title}</Text>
        <Text dimColor color="yellow">{subtitle}</Text>
        <Text>{text}</Text>
        <Text color="blue" underline>{link}</Text>
        <Text color="blue" underline>{link2}</Text>
      </Box>
    </Box>
  )
}

const InteractiveComponents: FC<{ onSelected: (c: Card) => void }> = ({ onSelected }) => {
  const [selected, setSelected] = React.useState<number | undefined>(0);

  return (
    <Box flexDirection="column"
      borderStyle="single"
      borderColor="gray"
      width={150}
    >
      <Text>Edit Card data</Text>
      {
        data.map((item, index) => (
          <CardComponent {...item}
            onSelected={() => {
              setSelected(index);
              onSelected(item);
            }}
            key={`${item.text}-${index}`} selected={selected === index} />
        ))
      }
    </Box>
  );
}

export default InteractiveComponents;
