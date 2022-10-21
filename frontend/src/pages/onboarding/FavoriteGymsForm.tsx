import React from 'react';
import { Stack, FormGroup, Typography } from '@mui/material';
// components
import { useFormContext } from 'react-hook-form';
import { OnboardingFormValues } from './types';

import { getGymList } from 'src/services/gyms';
import useSafeRequest from 'src/hooks/services/useSafeRequest';
import { useSnackbar } from 'notistack';
import RHFAutoMultiSelect from 'src/components/hook-form/RHFAutoMultiSelect';
import { CacheKey, OPTIONS_CACHE_TIME, OPTIONS_STALE_TIME } from 'src/config';

export const FavoriteGymsForm = () => {
  const { formState } = useFormContext<OnboardingFormValues>();
  const { errors } = formState;
  const { enqueueSnackbar } = useSnackbar();
  const { data: gyms } = useSafeRequest(getGymList, {
    // Caches successful data
    cacheTime: OPTIONS_CACHE_TIME,
    staleTime: OPTIONS_STALE_TIME,
    cacheKey: CacheKey.Gyms,
    onError: () => {
      enqueueSnackbar('Failed to get gyms.', { variant: 'error' });
    },
  });

  return (
    <Stack spacing={2}>
      <FormGroup>
        <Typography variant="subtitle1" gutterBottom>
          Favourite Gyms
        </Typography>
        <RHFAutoMultiSelect
          name="favouriteGymIds"
          label="Select Gym (Optional)"
          options={gyms?.data.map((option) => ({
            value: option.id,
            label: option.name,
          }))}
          helperText={errors?.favouriteGymIds?.message || 'Choose the gyms that you frequent.'}
          FormHelperTextProps={{
            error: !!errors?.favouriteGymIds,
          }}
        />
      </FormGroup>
    </Stack>
  );
};
