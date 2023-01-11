import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '454621456124dsadas',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '',
          'price': 40
        },
        'quantity': 3,
        '_id': '5646eqw4e56qw4e65ca'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '',
          'price': 7
        },
        'quantity': 3,
        '_id': '5646eqw4e56qw4e65ca'
      }
    ]
  }
];

export function Orders(){
  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={orders}
      />
      <OrdersBoard
        icon="✅"
        title="Fila de espera"
        orders={orders}
      />
    </Container>
  )

}
