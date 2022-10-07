import * as React from 'react';
import { useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { listJios, ListJiosArgs } from '../../../store/reducers/jios';
import { useDispatch, useSelector } from '../../../store';
import useVersion from 'src/hooks/useVersion';
import JioCard from './JioCard';
import JioCardSkeleton from './JioCardSkeleton';
import EmptyContent from '../../../components/EmptyContent';

interface JioCardListProps {
  searchParams: ListJiosArgs;
}

export default function JioCardList({ searchParams }: JioCardListProps) {
  const dispatch = useDispatch();
  const version = useVersion();
  const jiosData = useSelector((state) => state.jios);
  const displayedData = React.useMemo(() => {
    if (jiosData.error) {
      return (
        <Grid sx={{ width: '100%', mt: 2 }} item>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <EmptyContent sx={{ py: 3 }} title="There's an error" />
            <Button variant="contained">Contact Support</Button>
          </div>
        </Grid>
      );
    }

    if (jiosData.loading) {
      return (
        <Grid sx={{ width: '100%', mt: 2 }} item>
          <JioCardSkeleton />
        </Grid>
      );
    }

    if (jiosData.data.length === 0) {
      return (
        <Grid sx={{ width: '100%', mt: 2 }} item>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <EmptyContent
              sx={{ py: 3 }}
              title="There's no Jios now."
              description="Create a Jio and it will show up here."
            />
            <Button variant="contained">Create a Jio</Button>
          </div>
        </Grid>
      );
    }

    return jiosData.data.map((jio) => (
      <Grid key={jio.id} sx={{ width: '100%', mt: 2 }} item>
        <JioCard data={jio} />
      </Grid>
    ));
  }, [jiosData.data, jiosData.error, jiosData.loading]);

  useEffect(() => {
    dispatch(listJios(searchParams));
  }, [version, dispatch, searchParams]);

  return (
    <Grid container sm={12}>
      {displayedData}
    </Grid>
  );
}
