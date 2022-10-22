// @mui
import { Card, Grid, List, ListItem, Typography } from '@mui/material';
// types
import { Send } from 'src/@types/send';

type Props = {
  sends: Array<Send>,
}

export default function Sends({ sends }: Props) {
  if (!sends) {
    return (
      <Card sx={{ textAlign: 'left', px: 3, pb: 3 }}>
        <Typography>
          {'Lewis Simmons hasn\'t posted any sends yet.'}
        </Typography>
      </Card>
    )
  }
  return (
    <Grid container spacing={3} justifyContent="center">
      {
        sends.map((send: Send, index: number) => (
          <Grid key={send.id} item xs={12} md={4}>
            <Card sx={{ textAlign: 'left', px: 3, pb: 3 }}></Card>
          </Grid>
        ))
      }
    </Grid>
  );
}