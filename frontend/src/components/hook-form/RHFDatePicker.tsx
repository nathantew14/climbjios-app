// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  label: string;
};

type Props = IProps;

export default function RHFDatePicker({ name, label }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            inputRef={ref}
            minDate={new Date()}
            label={label}
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} fullWidth error={!!error} helperText={error?.message} />
            )}
            inputFormat="DD/MM/YYYY"
          />
        </LocalizationProvider>
      )}
    />
  );
}
