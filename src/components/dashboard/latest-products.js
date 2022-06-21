import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const products = [
  {
    id: uuid(),
    name: 'Avocado',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Coffee',
    imageUrl: '/static/images/products/product_2.jpg',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Gold',
    imageUrl: '/static/images/products/product_3.jpg',
    updatedAt: subHours(Date.now(), 3)
  },
  {
    id: uuid(),
    name: 'Flower',
    imageUrl: '/static/images/products/product_4.jpg',
    updatedAt: subHours(Date.now(), 5)
  },
  {
    id: uuid(),
    name: 'Beans',
    imageUrl: '/static/images/products/product_5.jpg',
    updatedAt: subHours(Date.now(), 9)
  }
];

export const LatestProducts = (props) => (
  <Card {...props}>
    <Typography
        sx={{ m: 1 }}
        variant="h4"
    >
      <CardHeader
      subtitle={`${products.length} in total`}
      title="Latest Products"
      titleStyle={{textAlign: 'center'}}
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
    
    </Box>
  
 </Typography>
  </Card>  
);
