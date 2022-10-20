import React from 'react';
import { Stack } from '@mui/material';
// components
import { RHFTextField } from '../../components/hook-form';
import { useFormContext } from 'react-hook-form';
import { OnboardingFormValues } from './types';

export const UsernameForm = () => {
  const { formState } = useFormContext<OnboardingFormValues>();
  const { errors } = formState;

  return (
    <Stack spacing={2}>
      <RHFTextField
        name="name"
        label="Name"
        helperText={
          errors?.name?.message ||
          'Your name will be displayed on your profile page. You can always change this later.'
        }
        FormHelperTextProps={{
          error: !!errors?.name,
        }}
        required
      />
    </Stack>
  );
};
