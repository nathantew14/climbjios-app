import React from 'react';
import { Stack, InputAdornment, FormHelperText } from '@mui/material';
// components
import { RHFTextField, RHFSelect } from '../../components/hook-form';
import { useFormContext } from 'react-hook-form';
import { UserRequest } from 'src/@types/user';
import { getPronounList } from 'src/services/pronouns';
import useSafeRequest from 'src/hooks/services/useSafeRequest';
import { useSnackbar } from 'notistack';

export const DetailsForm = () => {
  const { formState } = useFormContext<UserRequest>();
  const { errors } = formState;
  const { enqueueSnackbar } = useSnackbar();
  const { data: pronouns } = useSafeRequest(getPronounList, {
    onError: () => {
      enqueueSnackbar('Failed to get pronouns.', { variant: 'error' });
    },
  });

  return (
    <Stack spacing={2}>
      <RHFTextField
        type="number"
        name="height"
        label="Height"
        placeholder="173"
        InputProps={{
          endAdornment: <InputAdornment position="end">cm</InputAdornment>,
        }}
      />
      <RHFTextField
        type="number"
        name="reach"
        label="Reach"
        helperText={
          errors?.reach?.message ||
          'Leave this empty if you are unsure or do not know what reach is.'
        }
        FormHelperTextProps={{
          error: !!errors?.reach,
        }}
      />
      <RHFSelect name="pronounId" label="Pronoun">
        <option value="" />
        {pronouns?.data.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </RHFSelect>
    </Stack>
  );
};
