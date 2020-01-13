import posed from 'react-pose';
import { Item, List } from './styles';

export const PosedList = posed(List)({
  open: {
    x: '0%',
    delayChildren: 400,
    staggerChildren: 50
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%'
  }
});

export const PosedItem = posed(Item)({ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } });
