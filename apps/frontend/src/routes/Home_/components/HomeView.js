import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DuckImage from '../assets/Duck.jpg'
import styles from './HomeView.scss'

export const HomeView = () => (

  <div>
    <Card className={styles.card}>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
      />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  </div>
);

export default HomeView;
